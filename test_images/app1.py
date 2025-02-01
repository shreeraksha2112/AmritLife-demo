import os
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# Ensure the 'static' directory exists for storing images
UPLOAD_FOLDER = "static"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
MODEL_PATH = "retrained_full_model.pth"  # Update with the correct model path

# Allowlist EfficientNet as a safe global (fix for PyTorch 2.6+)
torch.serialization.add_safe_globals([models.efficientnet.EfficientNet])

# Load the trained model
device = torch.device("cpu")
model = torch.load(MODEL_PATH, map_location=device, weights_only=False)
model.eval()  # Set model to evaluation mode

# Define image transformations (should match training preprocessing)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Updated class labels
class_indices = {
    0: "Acne",
    1: "Psoriasis",
    2: "Chicken Pox",
    3: "Jaundice",
    4: "Varicose Veins",
    5: "Conjunctivitis",
    6: "Cataract",
    7: "Impetigo",
    8: "Melanoma"
}


def predict_image(image_path):
    img = Image.open(image_path).convert("RGB")  # Ensure RGB mode
    img = transform(img).unsqueeze(0)  # Add batch dimension

    with torch.no_grad():
        output = model(img)
        probabilities = torch.nn.functional.softmax(output[0], dim=0)
        predicted_class = torch.argmax(probabilities).item()
        confidence = probabilities[predicted_class].item()

    return class_indices.get(predicted_class, "Unknown"), confidence


@app.route("/", methods=["GET"])
def home():
    return render_template("index1.html")


@app.route("/predict", methods=["GET", "POST"])
def upload_predict():
    if request.method == "GET":
        return redirect(url_for("home"))  # Redirect GET requests to homepage

    if "files" not in request.files:
        return redirect(request.url)

    files = request.files.getlist("files")  # Get multiple uploaded files
    predictions = []

    for file in files:
        if file.filename == "":
            continue  

        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        predicted_class, confidence = predict_image(file_path)
        predictions.append((predicted_class, confidence, file_path))

    return render_template("index1.html", predictions=predictions)


if __name__ == "__main__":
    app.run(debug=True)

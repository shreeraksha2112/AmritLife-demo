import os
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, request, render_template, redirect, url_for, flash

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "static/uploads"
app.secret_key = "supersecretkey"  # For Flash messages

# Ensure the upload folder exists
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# Load the trained model
MODEL_PATH = "C:/Users/Keerthana/Downloads/chennai hackathon/website/retrained_full_model.pth"  # Update with the correct path
device = torch.device("cpu")

try:
    model = torch.load(MODEL_PATH, map_location=device)
    model.eval()  # Set model to evaluation mode
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define image transformations (should match training preprocessing)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Class labels
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

# Allowed file extensions
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}

def allowed_file(filename):
    """Check if the file extension is allowed."""
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

def predict_image(image_path):
    """Perform image classification and return the predicted label and confidence."""
    try:
        img = Image.open(image_path).convert("RGB")  # Ensure RGB mode
        img = transform(img).unsqueeze(0)  # Add batch dimension

        with torch.no_grad():
            output = model(img)
            probabilities = torch.nn.functional.softmax(output[0], dim=0)
            predicted_class = torch.argmax(probabilities).item()
            confidence = probabilities[predicted_class].item()

        return class_indices.get(predicted_class, "Unknown"), confidence

    except Exception as e:
        print(f"Prediction error: {e}")
        return "Error", 0.0

@app.route("/", methods=["GET"])
def home():
    return render_template("index1.html")

@app.route("/predict", methods=["POST"])
def upload_predict():
    if "files" not in request.files:
        flash("No file part")
        return redirect(request.url)

    files = request.files.getlist("files")
    predictions = []

    for file in files:
        if file.filename == "":
            flash("No selected file")
            continue

        if file and allowed_file(file.filename):
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(file_path)

            predicted_class, confidence = predict_image(file_path)
            predictions.append((predicted_class, confidence, file_path))
        else:
            flash("Invalid file format! Only JPG, JPEG, PNG allowed.")

    return render_template("index1.html", predictions=predictions)

if __name__ == "__main__":
    app.run(debug=True, port=3000, host='0.0.0.0')
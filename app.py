import os
import torch
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, request, render_template, redirect, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename



app = Flask(__name__, 
    template_folder='templates',  
    static_folder='static'        
)
CORS(app)

# Configure upload folder
UPLOAD_FOLDER = os.path.join(app.static_folder, "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load the trained model
MODEL_PATH = os.path.join("models", "retrained_full_model.pth")

device = torch.device("cpu")

try:
    model = torch.load(MODEL_PATH, map_location=device)
    model.eval()
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define image transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Disease classes and descriptions
class_details = {
         "Acne": "Skin condition causing pimples and inflammation.\n description: Skin condition causing pimples and inflammation of hair follicles. \n common_drugs:\n name: Clindamycin Gel, dosage: Apply a thin layer twice daily \n name: Benzoyl Peroxide, dosage: Apply once daily at night \n name: Retino-A (Tretinoin), dosage: Apply a pea-sized amount at night \n precautions: Keep skin clean, avoid touching face, and maintain a healthy diet",  

    "Psoriasis": "Autoimmune condition causing rapid skin cell growth, resulting in scaly patches.\n description: Autoimmune condition causing rapid skin cell growth, resulting in scaly patches. \n common_drugs:\n name: Methotrexate, dosage: 7.5-15 mg once weekly \n name: Cyclosporine, dosage: 2.5-5 mg/kg/day in divided doses \n name: Topical Corticosteroids, dosage: Apply twice daily as directed \n precautions: Moisturize regularly, avoid triggers like stress, and take prescribed medications",  
  

    "Chicken Pox": "Viral infection causing itchy, blister-like rash across the body.\n description: Viral infection causing itchy, blister-like rash across the body. \n common_drugs:\n name: Acyclovir, dosage: 800 mg five times daily for 5 days \n name: Paracetamol (Calpol), dosage: 500 mg every 6 hours as needed \n name: Calamine Lotion, dosage: Apply to affected areas as needed \n precautions: Avoid scratching, stay hydrated, and rest well",  

    "Jaundice": "Yellowing of skin and eyes due to high bilirubin levels.\n\n description: Yellowing of skin and eyes due to high bilirubin levels. \n\n  common_drugs:\n\n name: Liv 52 (Ayurvedic), dosage: 2 tablets twice daily \n\n name: Ursodeoxycholic Acid, dosage: 300-600 mg twice daily \n\n name: Silymarin, dosage: 140 mg three times daily \n\n  precautions: Drink plenty of fluids, avoid alcohol, and eat a liver-friendly diet",  

    "Varicose Veins": "Enlarged, twisted veins typically in legs, caused by weakened vein walls.\n description: Enlarged, twisted veins typically in legs, caused by weakened vein walls. \n common_drugs:\n name: Diosmin Tablets, dosage: 500 mg twice daily \n name: Horse Chestnut Extract, dosage: 300 mg twice daily \n name: Compression Stockings, dosage: Wear daily as prescribed \n precautions: Exercise regularly, avoid prolonged standing, and elevate legs when resting",  

    "Conjunctivitis": "Eye inflammation causing redness, itching, and discharge.\n description: Eye inflammation causing redness, itching, and discharge. \n common_drugs:\n name: Moxifloxacin Eye Drops, dosage: 1 drop in affected eye every 6 hours \n name: Tobramycin Eye Ointment, dosage: Apply a small amount twice daily \n name: Olopatadine Drops, dosage: 1 drop twice daily \n precautions: Avoid touching eyes, wash hands frequently, and use prescribed eye drops",  

    "Cataract": "Clouding of the eye's natural lens, leading to decreased vision.\n description: Clouding of the eye's natural lens, leading to decreased vision. \n common_drugs:\n name: Carboxymethylcellulose Eye Drops, dosage: 1 drop in affected eye every 6 hours \n name: Vitamin C & E Supplements, dosage: As directed by physician \n precautions: Wear sunglasses, eat antioxidant-rich foods, and consult an eye specialist for surgery options",  

    "Impetigo": "Highly contagious bacterial skin infection causing red sores.\n description: Highly contagious bacterial skin infection causing red sores. \n common_drugs:\n name: Mupirocin Ointment, dosage: Apply to affected areas three times daily \n name: Fusidic Acid Cream, dosage: Apply twice daily \n name: Cephalexin, dosage: 500 mg every 6 hours for 7-10 days \n precautions: Maintain hygiene, avoid sharing personal items, and complete the antibiotic course", 
     
    "Melanoma": "Serious skin cancer developing in pigment-producing cells.\n description: Serious skin cancer developing in pigment-producing cells. \n common_drugs:\n name: Dacarbazine, dosage: 4.5 mg/kg IV every day for 10 days \n name: Pembrolizumab, dosage: 200 mg IV every 3 weeks \n name: Ipilimumab, dosage: 3 mg/kg IV every 3 weeks for 4 doses \n precautions: Avoid excessive sun exposure, wear sunscreen, and monitor skin changes regularly"
}

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def predict_image(image_path):
    try:
        img = Image.open(image_path).convert('RGB')
        img = transform(img).unsqueeze(0).to(device)

        with torch.no_grad():
            output = model(img)
            probabilities = torch.nn.functional.softmax(output[0], dim=0)
            predicted_class_index = torch.argmax(probabilities).item()
            confidence = probabilities[predicted_class_index].item()

        predicted_class = list(class_details.keys())[predicted_class_index]
        reason = class_details[predicted_class]

        return predicted_class, confidence, reason
    except Exception as e:
        print(f"Prediction error: {e}")
        return "Error", 0.0, "Unable to process image"

# Route for home page
@app.route('/')
def home():
    return render_template('home.html')

# Route for classifier page
@app.route('/classifier', methods=['GET', 'POST'])
def classifier():
    print("Classifier function called")  # Debug statement
    if request.method == 'POST':
        if 'files[]' not in request.files:
            return render_template('classifier.html', error="No files uploaded")

        files = request.files.getlist('files[]')
        results = []

        for file in files:
            if file and file.filename and allowed_file(file.filename):
                # Create a secure filename
                filename = secure_filename(file.filename)
                filepath = os.path.join(UPLOAD_FOLDER, filename)
                
                # Save the file
                file.save(filepath)
                
                # Make prediction
                predicted_class, confidence, reason = predict_image(filepath)
                
                # Create relative path for template
                relative_path = os.path.join('uploads', filename)
                
                results.append({
                    "filename": filename,
                    "file_path": relative_path,
                    "disease": predicted_class,
                    "confidence": confidence,
                    "reason": reason
                })
            else:
                results.append({
                    "filename": file.filename if file.filename else "Unknown",
                    "error": "Invalid file format"
                })

        return render_template('classifier.html', results=results)

    return render_template('classifier.html')

# Route for emergency services page
@app.route('/emergency-services')
def emergency_services():
    return render_template('emergency_services.html')

# Route for info page
@app.route('/info')
def info():
    return render_template('info_page.html')

# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    # Ensure all required directories exist
    os.makedirs(os.path.join(app.static_folder, 'css'), exist_ok=True)
    os.makedirs(os.path.join(app.static_folder, 'js'), exist_ok=True)
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    
    app.run(debug=True, host='0.0.0.0', port=5000) 

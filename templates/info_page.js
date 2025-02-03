const diseases = [
    {
        name: "Fungal infection",
        description: "In humans, fungal infections occur when an invading fungus takes over an area of the body and is too much for the immune system to handle. Fungi can live in the air, soil, water, and plants. There are also some fungi that live naturally in the human body.",
        symptoms: ["itching", "skin rash", "nodal skin eruptions", "dischromic patches"],
        precautions: ["bath twice", "use detol or neem in bathing water", "keep infected area dry", "use clean clothes"]
    },
    {
        name: "Allergy",
        description: "An allergy is an immune system response to a foreign substance that's not typically harmful to your body. They can include certain foods, pollen, or pet dander. Your immune system's job is to keep you healthy by fighting harmful pathogens.",
        symptoms: ["continuous sneezing", "shivering", "chills", "watering from eyes"],
        precautions: ["apply calamine", "cover area with bandage", "use ice to compress itching"]
    },
    {
        name: "GERD",
        description: "Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid indigestion caused by GERD.",
        symptoms: ["stomach pain", "acidity", "ulcers on tongue", "vomiting", "cough", "chest pain"],
        precautions: ["avoid fatty spicy food", "avoid lying down after eating", "maintain healthy weight", "exercise"]
    },
    {
        name: "Chronic cholestasis",
        description: "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases.",
        symptoms: ["itching", "vomiting", "yellowish skin", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes"],
        precautions: ["cold baths", "anti itch medicine", "consult doctor", "eat healthy"]
    },
    {
        name: "Drug Reaction",
        description: "An adverse drug reaction (ADR) is an injury caused by taking medication. ADRs may occur following a single dose or prolonged administration of a drug or result from the combination of two or more drugs.",
        symptoms: ["itching", "skin rash", "stomach pain", "burning micturition", "spotting urination"],
        precautions: ["stop irritation", "consult nearest hospital", "stop taking drug", "follow up"]
    },
    {
        name: "Peptic ulcer disease",
        description: "Peptic ulcer disease (PUD) is a break in the inner lining of the stomach, the first part of the small intestine, or sometimes the lower esophagus. An ulcer in the stomach is called a gastric ulcer, while one in the first part of the intestines is a duodenal ulcer.",
        symptoms: ["vomiting", "loss of appetite", "abdominal pain", "passage of gases", "internal itching"],
        precautions: ["avoid fatty spicy food", "consume probiotic food", "eliminate milk", "limit alcohol"]
    },
    {
        name: "AIDS",
        description: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.",
        symptoms: ["muscle wasting", "patches in throat", "high fever", "extra marital contacts"],
        precautions: ["avoid open cuts", "wear ppe if possible", "consult doctor", "follow up"]
    },
    {
        name: "Diabetes",
        description: "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose get into your cells to be used for energy.",
        symptoms: ["fatigue", "weight loss", "restlessness", "lethargy", "irregular sugar level", "blurred and distorted vision", "obesity", "excessive hunger", "increased appetite", "polyuria"],
        precautions: ["have balanced diet", "exercise", "consult doctor", "follow up"]
    },
    {
        name: "Gastroenteritis",
        description: "Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines. Viral and bacterial gastroenteritis are intestinal infections associated with symptoms of diarrhea, abdominal cramps, nausea, and vomiting.",
        symptoms: ["vomiting", "sunken eyes", "dehydration", "diarrhoea"],
        precautions: ["stop eating solid food for while", "try taking small sips of water", "rest", "ease back into eating"]
    },
    {
        name: "Bronchial Asthma",
        description: "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing.",
        symptoms: ["fatigue", "cough", "high fever", "breathlessness", "family history", "mucoid sputum"],
        precautions: ["switch to loose clothing", "take deep breaths", "get away from trigger", "seek help"]
    },
    {
        name: "Hypertension",
        description: "Hypertension (HTN or HT), also known as high blood pressure (HBP), is a long-term medical condition in which the blood pressure in the arteries is persistently elevated. High blood pressure typically does not cause symptoms.",
        symptoms: ["headache", "chest pain", "dizziness", "loss of balance", "lack of concentration"],
        precautions: ["meditation", "salt baths", "reduce stress", "get proper sleep"]
    },
    {
        name: "Migraine",
        description: "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
        symptoms: ["acidity", "indigestion", "headache", "blurred and distorted vision", "excessive hunger", "stiff neck", "depression", "irritability", "visual disturbances"],
        precautions: ["meditation", "reduce stress", "use polaroid glasses in sun", "consult doctor"]
    },
    {
        name: "Cervical spondylosis",
        description: "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).",
        symptoms: ["back pain", "weakness in limbs", "neck pain", "dizziness", "loss of balance"],
        precautions: ["use heating pad or cold pack", "exercise", "take otc pain reliever", "consult doctor"]
    },
    {
        name: "Paralysis (brain hemorrhage)",
        description: "Intracerebral hemorrhage (ICH) is when blood suddenly bursts into brain tissue, causing damage to your brain. Symptoms usually appear suddenly during ICH. They include headache, weakness, confusion, and paralysis, particularly on one side of your body.",
        symptoms: ["vomiting", "headache", "weakness of one body side", "altered sensorium"],
        precautions: ["massage", "eat healthy", "exercise", "consult doctor"]
    },
    {
        name: "Jaundice",
        description: "Yellow staining of the skin and sclerae (the whites of the eyes) by abnormally high blood levels of the bile pigment bilirubin. The yellowing extends to other tissues and body fluids.",
        symptoms: ["itching", "vomiting", "fatigue", "weight loss", "high fever", "yellowish skin", "dark urine", "abdominal pain"],
        precautions: ["drink plenty of water", "consume milk thistle", "eat fruits and high fiberous food", "medication"]
    },
    {
        name: "Malaria",
        description: "An infectious disease caused by protozoan parasites from the Plasmodium family that can be transmitted by the bite of the Anopheles mosquito or by a contaminated needle or transfusion. Falciparum malaria is the most deadly type.",
        symptoms: ["chills", "vomiting", "high fever", "sweating", "headache", "nausea", "muscle pain"],
        precautions: ["Consult nearest hospital", "avoid oily food", "avoid non veg food", "keep mosquitos out"]
    },
    {
        name: "Chicken pox",
        description: "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, blister-like rash. The rash first appears on the chest, back, and face, and then spreads over the entire body.",
        symptoms: ["itching", "skin rash", "fatigue", "lethargy", "high fever", "headache", "loss of appetite", "mild fever", "swelled lymph nodes", "malaise", "red spots over body"],
        precautions: ["use neem in bathing", "consume neem leaves", "take vaccine", "avoid public places"]
    },
    {
        name: "Dengue",
        description: "An acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash.",
        symptoms: ["skin rash", "chills", "joint pain", "vomiting", "fatigue", "high fever", "headache", "nausea", "loss of appetite", "pain behind the eyes", "back pain", "muscle pain", "red spots over body"],
        precautions: ["drink papaya leaf juice", "avoid fatty spicy food", "keep mosquitos away", "keep hydrated"]
    },

    {
        name: "Typhoid",
        description: "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain.",
        symptoms: ["chills", "vomiting", "fatigue", "high fever", "nausea", "constipation", "abdominal pain", "diarrhoea", "toxic look (typhos)", "belly pain"],
        precautions: ["eat high calorie vegetables", "antibiotic therapy", "consult doctor", "medication"]
    },
    {
        name: "Hepatitis A",
        description: "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis viruses that cause inflammation and affect your liver's ability to function.",
        symptoms: ["joint pain", "vomiting", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "diarrhoea", "mild fever", "yellowing of eyes", "muscle pain"],
        precautions: ["Consult nearest hospital", "wash hands through", "avoid fatty spicy food", "medication"]
    },
    {
        name: "Hepatitis B",
        description: "Hepatitis B is an infection of your liver. It can cause scarring of the organ, liver failure, and cancer. It can be fatal if it isn't treated. It's spread when people come in contact with the blood, open sores, or body fluids of someone who has the hepatitis B virus.",
        symptoms: ["itching", "fatigue", "lethargy", "yellowish skin", "dark urine", "loss of appetite", "abdominal pain", "yellow urine", "yellowing of eyes", "malaise", "receiving blood transfusion", "receiving unsterile injections"],
        precautions: ["consult nearest hospital", "vaccination", "eat healthy", "medication"]
    },
    {
        name: "Hepatitis C",
        description: "Inflammation of the liver due to the hepatitis C virus (HCV), which is usually spread via blood transfusion (rare), hemodialysis, and needle sticks. The damage hepatitis C does to the liver can lead to cirrhosis and its complications as well as cancer.",
        symptoms: ["fatigue", "yellowish skin", "nausea", "loss of appetite", "family history"],
        precautions: ["Consult nearest hospital", "vaccination", "eat healthy", "medication"]
    },
    {
        name: "Hepatitis D",
        description: "Hepatitis D, also known as the hepatitis delta virus, is an infection that causes the liver to become inflamed. This swelling can impair liver function and cause long-term liver problems, including liver scarring and cancer.",
        symptoms: ["joint pain", "vomiting", "fatigue", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes"],
        precautions: ["consult doctor", "medication", "eat healthy", "follow up"]
    },
    {
        name: "Hepatitis E",
        description: "A rare form of liver inflammation caused by infection with the hepatitis E virus (HEV). It is transmitted via food or drink handled by an infected person or through infected water supplies in areas where fecal matter may get into the water.",
        symptoms: ["joint pain", "vomiting", "fatigue", "high fever", "yellowish skin", "dark urine", "nausea", "loss of appetite", "abdominal pain", "yellowing of eyes", "coma", "stomach bleeding"],
        precautions: ["stop alcohol consumption", "rest", "consult doctor", "medication"]
    },
    {
        name: "Alcoholic hepatitis",
        description: "Alcoholic hepatitis is a diseased, inflammatory condition of the liver caused by heavy alcohol consumption over an extended period of time. It's also aggravated by binge drinking and ongoing alcohol use.",
        symptoms: ["vomiting", "yellowish skin", "abdominal pain", "swelling of stomach", "distention of abdomen", "history of alcohol consumption", "fluid overload"],
        precautions: ["stop alcohol consumption", "consult doctor", "medication", "follow up"]
    },
    {
        name: "Tuberculosis",
        description: "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body.",
        symptoms: ["chills", "vomiting", "fatigue", "weight loss", "cough", "high fever", "breathlessness", "sweating", "loss of appetite", "mild fever", "yellowing of eyes", "swelled lymph nodes", "malaise", "phlegm", "chest pain", "blood in sputum"],
        precautions: ["cover mouth", "consult doctor", "medication", "rest"]
    },
    {
        name: "Common Cold",
        description: "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        symptoms: ["continuous sneezing", "chills", "fatigue", "cough", "high fever", "headache", "swelled lymph nodes", "malaise", "phlegm", "throat irritation", "redness of eyes", "sinus pressure", "runny nose", "congestion", "chest pain", "loss of smell", "muscle pain"],
        precautions: ["drink vitamin c rich drinks", "take vapor", "avoid cold food", "keep fever in check"]
    },
        {
            name: "Pneumonia",
            description: "Pneumonia is an infection in one or both lungs. Bacteria, viruses, and fungi cause it. The infection causes inflammation in the air sacs in your lungs, which are called alveoli. The alveoli fill with fluid or pus, making it difficult to breathe.",
            symptoms: ["chills", "fatigue", "cough", "high fever", "breathlessness", "sweating", "malaise", "chest pain", "fast heart rate", "rusty sputum"],
            precautions: ["consult doctor", "medication", "rest", "follow up"]
        },
        {
            name: "Dimorphic hemmorhoids(piles)",
            description: "Hemorrhoids, also spelled haemorrhoids, are vascular structures in the anal canal. Other names, Haemorrhoids, piles, hemorrhoidal disease.",
            symptoms: ["constipation", "pain during bowel movements", "pain in anal region", "bloody stool", "irritation in anus"],
            precautions: ["avoid fatty spicy food", "consume witch hazel", "warm bath with epsom salt", "consume alovera juice"]
        },
        {
            name: "Heart attack",
            description: "The death of heart muscle due to the loss of blood supply. The loss of blood supply is usually caused by a complete blockage of a coronary artery, one of the arteries that supplies blood to the heart muscle.",
            symptoms: ["vomiting", "breathlessness", "sweating", "chest pain"],
            precautions: ["call ambulance", "chew or swallow asprin", "keep calm"]
        },
        {
            name: "Varicose veins",
            description: "A vein that has enlarged and twisted, often appearing as a bulging, blue blood vessel that is clearly visible through the skin. Varicose veins are most common in older adults, particularly women, and occur especially on the legs.",
            symptoms: ["fatigue", "cramps", "bruising", "obesity", "swollen legs", "swollen blood vessels", "prominent veins on calf"],
            precautions: ["lie down flat and raise the leg high", "use oinments", "use vein compression", "dont stand still for long"]
        },
        {
            name: "Hypothyroidism",
            description: "Hypothyroidism, also called underactive thyroid or low thyroid, is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.",
            symptoms: ["fatigue", "weight gain", "cold hands and feets", "mood swings", "lethargy", "dizziness", "puffy face and eyes", "enlarged thyroid", "brittle nails", "swollen extremeties", "depression", "irritability", "abnormal menstruation"],
            precautions: ["reduce stress", "exercise", "eat healthy", "get proper sleep"]
        },
        {
            name: "Hyperthyroidism",
            description: "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat.",
            symptoms: ["fatigue", "mood swings", "weight loss", "restlessness", "sweating", "diarrhoea", "fast heart rate", "excessive hunger", "muscle weakness", "irritability", "abnormal menstruation"],
            precautions: ["eat healthy", "massage", "use lemon balm", "take radioactive iodine treatment"]
        },
        {
            name: "Hypoglycemia",
            description: "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes treatment. But other drugs and a variety of conditions — many rare — can cause low blood sugar in people who don't have diabetes.",
            symptoms: ["vomiting", "fatigue", "anxiety", "sweating", "headache", "nausea", "blurred and distorted vision", "excessive hunger", "slurred speech", "irritability", "palpitations"],
            precautions: ["lie down on side", "check in pulse", "drink sugary drinks", "consult doctor"]
        },
        {
            name: "Osteoarthristis",
            description: "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
            symptoms: ["joint pain", "neck pain", "knee pain", "hip joint pain", "swelling joints", "painful walking"],
            precautions: ["acetaminophen", "consult nearest hospital", "follow up", "salt baths"]
        },
        {
            name: "Arthritis",
            description: "Arthritis is the swelling and tenderness of one or more of your joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.",
            symptoms: ["muscle weakness", "stiff neck", "swelling joints", "movement stiffness", "painful walking"],
            precautions: ["exercise", "use hot and cold therapy", "try acupuncture", "massage"]
        },
        {
            name: "(vertigo) Paroymsal  Positional Vertigo",
            description: "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. Benign paroxysmal positional vertigo causes brief episodes of mild to intense dizziness.",
            symptoms: ["vomiting", "headache", "nausea", "spinning movements", "loss of balance", "unsteadiness"],
            precautions: ["lie down", "avoid sudden change in body", "avoid abrupt head movment", "relax"]
        },
        {
            name: "Acne",
            description: "Acne vulgaris is the formation of comedones, papules, pustules, nodules, and/or cysts as a result of obstruction and inflammation of pilosebaceous units (hair follicles and their accompanying sebaceous gland). Acne develops on the face and upper trunk. It most often affects adolescents.",
            symptoms: ["skin rash", "pus filled pimples", "blackheads", "scurring"],
            precautions: ["bath twice", "avoid fatty spicy food", "drink plenty of water", "avoid too many products"]
        },
        {
            name: "Urinary tract infection",
            description: "Urinary tract infection: An infection of the kidney, ureter, bladder, or urethra. Abbreviated UTI. Not everyone with a UTI has symptoms, but common symptoms include a frequent urge to urinate and pain or burning when urinating.",
            symptoms: ["burning micturition", "bladder discomfort", "foul smell of urine", "continuous feel of urine"],
            precautions: ["drink plenty of water", "increase vitamin c intake", "drink cranberry juice", "take probiotics"]
        },
        {
            name: "Psoriasis",
            description: "Psoriasis is a common skin disorder that forms thick, red, bumpy patches covered with silvery scales. They can pop up anywhere, but most appear on the scalp, elbows, knees, and lower back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.",
            symptoms: ["skin rash", "joint pain", "skin peeling", "silver like dusting", "small dents in nails", "inflammatory nails"],
            precautions: ["wash hands with warm soapy water", "stop bleeding using pressure", "consult doctor", "salt baths"]
        },
        {
            name: "Impetigo",
            description: "Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts.",
            symptoms: ["skin rash", "high fever", "blister", "red sore around nose", "yellow crust ooze"],
            precautions: ["soak affected area in warm water", "use antibiotics", "remove scabs with wet compressed cloth", "consult doctor"]
        }
];

// Function to create a card for each disease
function createDiseaseCard(disease) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Convert arrays to bullet points
    const symptomsList = disease.symptoms.map(s => `<li>${s}</li>`).join('');
    const precautionsList = disease.precautions.map(p => `<li>${p}</li>`).join('');
    
    card.innerHTML = `
        <div class="card-header">
            <h2>${disease.name}</h2>
        </div>
        <p class="description">${disease.description}</p>
        <div class="card-content">
            <div class="symptoms">
                <h3>Symptoms</h3>
                <ul>${symptomsList}</ul>
            </div>
            <div class="precautions">
                <h3>Precautions</h3>
                <ul>${precautionsList}</ul>
            </div>
        </div>
    `;
    
    // Add click event to toggle content
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
    
    return card;
}

// Function to render filtered diseases
function renderDiseases(diseasesToRender) {
    const container = document.getElementById('diseaseContainer');
    container.innerHTML = '';
    diseasesToRender.forEach(disease => {
        container.appendChild(createDiseaseCard(disease));
    });
}

// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDiseases = diseases.filter(disease => 
        disease.name.toLowerCase().includes(searchTerm) ||
        disease.description.toLowerCase().includes(searchTerm) ||
        disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm)) ||
        disease.precautions.some(precaution => precaution.toLowerCase().includes(searchTerm))
    );
    renderDiseases(filteredDiseases);
});

// Initial render of all diseases
document.addEventListener('DOMContentLoaded', () => {
    renderDiseases(diseases);
});
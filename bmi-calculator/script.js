// Disease & Diet Information
const diseaseData = {
    diabetes: {
        name: "Diabetes Management Diet",
        calories: "1800-2200 (adjust based on BMI and activity level)",
        carbs: "45-50%",
        protein: "15-20%",
        fat: "25-35%",
        components: [
            "Low Glycemic Index (GI) foods",
            "High fiber foods (whole grains, vegetables, legumes)",
            "Lean proteins (fish, chicken, legumes)",
            "Limit refined sugars and processed foods",
            "Control portion sizes",
            "Eat at regular intervals to maintain steady blood sugar",
            "Reduce saturated fats",
            "Stay hydrated with water"
        ]
    },
    hypertension: {
        name: "Hypertension (High Blood Pressure) Diet",
        calories: "1800-2200 (based on BMI)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "25-30%",
        components: [
            "DASH diet (Dietary Approaches to Stop Hypertension)",
            "Limit sodium intake to <2300mg per day",
            "High potassium foods (bananas, spinach, sweet potatoes)",
            "High calcium sources (dairy, leafy greens)",
            "Rich in magnesium (nuts, seeds, whole grains)",
            "Reduce processed and canned foods",
            "Avoid alcohol and caffeine",
            "Regular small meals"
        ]
    },
    obesity: {
        name: "Weight Management Diet",
        calories: "1200-1800 (deficit diet for weight loss)",
        carbs: "45-50%",
        protein: "25-30%",
        fat: "20-30%",
        components: [
            "High protein diet to maintain muscle mass",
            "Low calorie, nutrient-dense foods",
            "High fiber for satiety",
            "Whole grains instead of refined carbs",
            "Lean meats and plant-based proteins",
            "Plenty of vegetables and fruits",
            "Limit sugary drinks and desserts",
            "Portion control with smaller plates"
        ]
    },
    heart: {
        name: "Heart Disease Diet",
        calories: "1600-2000 (based on activity level)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "20-30%",
        components: [
            "Mediterranean diet pattern",
            "Omega-3 rich foods (salmon, sardines, walnuts)",
            "Limit saturated fat to <7% of calories",
            "Zero trans fats",
            "Low sodium (<2300mg daily)",
            "High fiber (oats, beans, vegetables)",
            "Plant-based proteins",
            "Avoid fried and processed foods",
            "Limit red meat consumption"
        ]
    },
    kidney: {
        name: "Kidney Disease Diet",
        calories: "1800-2200 (adjusted per nephrologist)",
        carbs: "50-55%",
        protein: "0.6-0.8g per kg body weight",
        fat: "25-35%",
        components: [
            "Restricted protein intake",
            "Limited sodium to <2000mg daily",
            "Controlled potassium (avoid high-K foods)",
            "Controlled phosphorus",
            "Limited fluid intake as advised",
            "High quality protein sources",
            "Avoid processed foods",
            "Regular monitoring with dietitian"
        ]
    },
    liver: {
        name: "Liver Disease Diet",
        calories: "1800-2400 (based on condition severity)",
        carbs: "50-55%",
        protein: "1.2-1.5g per kg body weight",
        fat: "25-35%",
        components: [
            "Adequate protein but avoid ammonia-producing foods if cirrhotic",
            "Complex carbohydrates",
            "Limited sodium",
            "No alcohol whatsoever",
            "Small frequent meals",
            "Limit saturated fats",
            "Fresh foods over processed",
            "Adequate vitamins and minerals"
        ]
    },
    gout: {
        name: "Gout Management Diet",
        calories: "1800-2200 (weight management important)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "25-35%",
        components: [
            "Low purine diet (limit organ meats, red meat)",
            "Limit seafood high in purines (anchovies, sardines)",
            "Limit alcohol, especially beer",
            "Avoid high fructose foods and drinks",
            "Stay well hydrated (2-3 liters water daily)",
            "Maintain healthy weight",
            "Low-fat dairy products",
            "Plant-based proteins preferred"
        ]
    },
    anemia: {
        name: "Anemia Diet",
        calories: "1800-2200 (based on individual needs)",
        carbs: "45-50%",
        protein: "15-20%",
        fat: "25-35%",
        components: [
            "Iron-rich foods (red meat, poultry, fish, beans, spinach)",
            "Vitamin C sources to enhance iron absorption (citrus, berries)",
            "Fortified cereals and grains",
            "Vitamin B12 sources (meat, dairy, eggs)",
            "Folate-rich foods (leafy greens, legumes)",
            "Avoid tea and coffee with meals (inhibit iron absorption)",
            "Separate calcium supplements from iron intake",
            "Regular small meals"
        ]
    }
};

// Calculate BMI
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);

    // Validation
    if (!height || !weight || !age || height <= 0 || weight <= 0 || age <= 0) {
        alert('Please enter valid values for height, weight, and age');
        return;
    }

    // Convert height to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Determine category
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        color = '#2ecc71';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
    } else {
        category = 'Obese';
        color = '#e74c3c';
    }

    // Display result
    const resultDiv = document.getElementById('bmiResult');
    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    document.getElementById('bmiCategory').textContent = `Category: ${category}`;
    document.getElementById('bmiCategory').style.color = color;
    document.getElementById('bmiValue').style.color = color;
    resultDiv.classList.remove('hidden');
}

// Calculate Diet
function calculateDiet() {
    const diseaseSelect = document.getElementById('diseaseSelect');
    const selectedDisease = diseaseSelect.value;
    
    const dietResultDiv = document.getElementById('dietResult');
    
    if (!selectedDisease) {
        dietResultDiv.classList.add('hidden');
        return;
    }

    const disease = diseaseData[selectedDisease];
    
    if (disease) {
        document.getElementById('conditionName').textContent = disease.name;
        document.getElementById('caloriesInfo').textContent = disease.calories;
        document.getElementById('carbs').textContent = disease.carbs;
        document.getElementById('protein').textContent = disease.protein;
        document.getElementById('fat').textContent = disease.fat;
        
        const componentsList = document.getElementById('dietComponents');
        componentsList.innerHTML = '';
        disease.components.forEach(component => {
            const li = document.createElement('li');
            li.textContent = component;
            componentsList.appendChild(li);
        });
        
        dietResultDiv.classList.remove('hidden');
    }
}

// Allow Enter key to calculate BMI
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('age').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });
});

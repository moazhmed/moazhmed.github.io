// بيانات الأمراض والنظام الغذائي
const diseaseData = {
    obesity: {
        name: "نظام غذائي لمرضى السمنة",
        calories: "1200-1800 (نظام غذائي بسعرات منخفضة لفقدان الوزن)",
        carbs: "45-55%",
        protein: "15-25%",
        fat: "20-30%",
        components: [
            "تقليل السعرات الحرارية بشكل تدريجي دون حرمان شديد",
            "تقسيم الوجبات إلى 3 وجبات رئيسية + 2 خفيفة",
            "شرب الماء بانتظام، ويفضل قبل الأكل لزيادة الشعور بالشبع",
            "ممارسة نشاط بدني يومي (مثل المشي 30-45 دقيقة)",
            "الحبوب الكاملة مثل الشوفان والأرز البني",
            "تجنب السكريات البسيطة والأطعمة المصنعة",
            "اختيار البروتينات قليلة الدهون (الدجاج، السمك، البقوليات)",
            "استخدام الدهون الصحية مثل زيت الزيتون والمكسرات"
        ]
    },
    underweight: {
        name: "نظام غذائي للنحافة",
        calories: "2200-2800 (سعرات عالية لزيادة الوزن)",
        carbs: "50-60%",
        protein: "20-25%",
        fat: "20-30%",
        components: [
            "زيادة السعرات الحرارية بشكل صحي ومنظم",
            "تقسيم الوجبات إلى 3 رئيسية + 2-3 وجبات خفيفة",
            "التركيز على الأطعمة الغنية بالعناصر الغذائية (بروتين + نشويات + دهون صحية)",
            "ممارسة تمارين خفيفة لبناء العضلات",
            "اختيار أطعمة عالية السعرات الصحية (مكسرات، حليب كامل الدسم، أفوكادو)",
            "عدم إهمال وجبة الإفطار",
            "النوم الكافي لتحسين الشهية والطاقة",
            "تجنب المشروبات التي تقلل الشهية قبل الأكل"
        ]
    },
    diabetes: {
        name: "نظام غذائي لمرضى السكري",
        calories: "1800-2200 (حسب مؤشر كتلة الجسم ومستوى النشاط)",
        carbs: "45-50%",
        protein: "15-20%",
        fat: "30-35%",
        components: [
            "الالتزام بنظام غذائي صحي ومنظم",
            "قياس مستوى السكر بانتظام",
            "الالتزام بالأدوية أو الأنسولين حسب تعليمات الطبيب",
            "ممارسة الرياضة بانتظام",
            "تجنب التوتر والضغوط النفسية",
            "الكربوهيدرات المعقدة وتجنب السكريات البسيطة",
            "البروتينات الصحية مثل الدجاج والسمك والبقوليات",
            "الدهون الصحية مثل زيت الزيتون مع تقليل الدهون الضارة"
        ]
    },
    hypertension: {
        name: "نظام غذائي لارتفاع ضغط الدم",
        calories: "1800-2200 (حسب مؤشر كتلة الجسم)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "25-30%",
        components: [
            "تقليل الملح في الطعام قدر الإمكان",
            "الالتزام بالأدوية الموصوفة من الطبيب",
            "ممارسة الرياضة بانتظام",
            "تجنب التوتر والضغوط النفسية",
            "قياس الضغط بشكل دوري",
            "تجنب الأطعمة المالحة والمعلبات",
            "التقليل من الكافيين",
            "الإقلاع عن التدخين",
            "الحبوب الكاملة مثل الشوفان والأرز البني",
            "البروتينات قليلة الدهون والدهون الصحية"
        ]
    },
    pregnancy: {
        name: "نظام غذائي للمرأة الحامل",
        calories: "2000-2500 (سعرات إضافية حسب احتياجات الحمل)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "25-30%",
        components: [
            "اتباع نظام غذائي متوازن يحتوي على جميع العناصر الغذائية",
            "المتابعة الدورية مع الطبيب",
            "تناول الفيتامينات والمكملات (مثل الحديد وحمض الفوليك)",
            "شرب كميات كافية من الماء",
            "تجنب المجهود الزائد والتوتر",
            "الحصول على قسط كافٍ من الراحة والنوم",
            "زيادة الكالسيوم والحديد وحمض الفوليك",
            "الأطعمة سهلة الهضم والغنية بالعناصر الغذائية",
            "تجنب الكحول والتدخين وأدوية غير آمنة"
        ]
    },
    ulcer: {
        name: "نظام غذائي لقرحة المعدة",
        calories: "1800-2200 (حسب الحالة الصحية)",
        carbs: "50-55%",
        protein: "15-20%",
        fat: "25-30%",
        components: [
            "تناول وجبات صغيرة ومتكررة",
            "تجنب الأطعمة الحارة والدهنية والمهيجة",
            "الالتزام بالعلاج الموصوف من الطبيب",
            "تقليل التوتر والضغط النفسي",
            "عدم تناول المسكنات بدون استشارة طبية",
            "تجنب التدخين والكافيين",
            "الأكل ببطء ومضغ جيد",
            "عدم النوم بعد الأكل مباشرة",
            "الابتعاد عن التوتر",
            "الالتزام بمواعيد الوجبات",
            "الأطعمة سهلة الهضم مثل الأرز والبطاطس المسلوقة",
            "البروتين الصحي مثل الدجاج المسلوق والسمك"
        ]
    },
    kidney: {
        name: "نظام غذائي للفشل الكلوي",
        calories: "1800-2400 (حسب توجيهات الطبيب)",
        carbs: "50-60%",
        protein: "10-15%",
        fat: "25-30%",
        components: [
            "الالتزام بالعلاج والمتابعة الدورية مع الطبيب",
            "تقليل تناول الأملاح والسوائل حسب إرشادات الطبيب",
            "تجنب المجهود الزائد",
            "متابعة ضغط الدم ومستوى الأملاح في الجسم",
            "اتباع نظام غذائي خاص بالحالة",
            "تجنب الأطعمة عالية الصوديوم (الملح والمعلبات)",
            "تجنب الأطعمة الغنية بالبوتاسيوم بكثرة (الموز، البرتقال)",
            "تجنب الأطعمة الغنية بالفوسفور (المشروبات الغازية ومنتجات الألبان)",
            "تجنب الأطعمة المقلية والدسمة",
            "تجنب البروتين الزائد بدون إشراف طبي",
            "ضبط كمية السوائل والأملاح حسب حالة المريض"
        ]
    },
    cancer: {
        name: "نظام غذائي لمرضى السرطان",
        calories: "2000-2500 (لتقوية المناعة)",
        carbs: "45-50%",
        protein: "20-25%",
        fat: "25-35%",
        components: [
            "الالتزام بخطة العلاج (جراحة / كيماوي / إشعاع حسب الحالة)",
            "المتابعة المستمرة مع الطبيب",
            "دعم الحالة النفسية وتقليل التوتر",
            "الاهتمام بالتغذية الجيدة لتقوية المناعة",
            "تجنب العدوى والاهتمام بالنظافة الشخصية",
            "الإكثار من الخضروات والفواكه الغنية بمضادات الأكسدة",
            "تناول بروتينات سهلة الهضم (دجاج، سمك، بقوليات)",
            "وجبات صغيرة ومتكررة لتقليل الإجهاد",
            "شرب كميات كافية من الماء (حسب الحالة)",
            "تجنب الأطعمة المصنعة والدهون الضارة",
            "تجنب التدخين والكحول",
            "تجنب الأطعمة المحفوظة والسكريات الزائدة"
        ]
    }
};

// حساب مؤشر كتلة الجسم
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);

    // التحقق من الصحة
    if (!height || !weight || !age || height <= 0 || weight <= 0 || age <= 0) {
        alert('يرجى إدخال قيم صحيحة للطول والوزن والعمر');
        return;
    }

    // تحويل الطول إلى متر
    const heightInMeters = height / 100;
    
    // حساب مؤشر كتلة الجسم
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // تحديد الفئة
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'نحافة';
        color = '#3498db';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'وزن طبيعي';
        color = '#2ecc71';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'وزن زائد';
        color = '#f39c12';
    } else {
        category = 'سمنة';
        color = '#e74c3c';
    }

    // عرض النتيجة
    const resultDiv = document.getElementById('bmiResult');
    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    document.getElementById('bmiCategory').textContent = `الحالة: ${category}`;
    document.getElementById('bmiCategory').style.color = color;
    document.getElementById('bmiValue').style.color = color;
    resultDiv.classList.remove('hidden');
}

// حساب النظام الغذائي
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

// السماح بمفتاح Enter لحساب مؤشر كتلة الجسم
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('age').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });
});
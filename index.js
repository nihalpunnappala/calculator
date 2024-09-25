function calculateBMI() {
    const weight = parseFloat(document.getElementById('height').value);
    const height = parseFloat(document.getElementById('weight').value) / 100; // Convert height to meters

    if (weight >=40 && height <= 100) {
        const bmi = weight / (height * height);
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid values';
    }

   
}


function clearInput() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    
}
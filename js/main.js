let passwordInput = document.getElementById('password');
let passwordStrength = document.querySelectorAll(".password-strength");
let text = document.getElementById('text');

passwordInput.addEventListener('input', function(e) {
    let password = e.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30;
    let grandColor = strength <= 4 ? '#ff2c2c' : (strength <= 8 ? '#ff9800' : '#12ff12');
    let strengthText = strength <= 4 ? 'Weak' : (strength <= 8 ? 'Medium' : 'Strong');
    
    passwordStrength.forEach(passwordStrength => {
        passwordStrength.style.background = `conic-gradient(${grandColor} ${degree}deg, #1115 ${degree}deg)`;
    });

    text.textContent = strengthText;
    text.style.color = grandColor;
});

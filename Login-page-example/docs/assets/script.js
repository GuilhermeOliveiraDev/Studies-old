function togglePasswordVisibility() {
    var passElement = document.querySelector('input[name="password"]');
    var eyeIcon = document.querySelector('.eye');
    
    if (passElement.type === "password") {
        passElement.type = "text";
        eyeIcon.classList.add('hide-icon');
    } else {
        passElement.type = "password";
        eyeIcon.classList.remove('hide-icon');
    }
}
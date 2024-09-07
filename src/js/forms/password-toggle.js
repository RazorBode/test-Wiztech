export class PasswordToggle {
    constructor(toggleButtonClass, passwordFieldClass) {
        this.toggleButtons = document.querySelectorAll(`.${toggleButtonClass}`);
        this.passwordFields = document.querySelectorAll(`.${passwordFieldClass}`);

        if (this.toggleButtons.length !== this.passwordFields.length) {
            console.error('The number of toggle buttons does not match the number of password fields.');
            return;
        }

        this.toggleButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                this.togglePasswordVisibility(index);
            });
        });
    }

    togglePasswordVisibility(index) {
        const passwordField = this.passwordFields[index];
        const toggleButton = this.toggleButtons[index];

        const isPasswordVisible = passwordField.getAttribute('type') === 'password';
        passwordField.setAttribute('type', isPasswordVisible ? 'text' : 'password');

        toggleButton.classList.toggle('show-password');

        const eyeIcon = toggleButton.querySelector('img[alt="eye"]');
        const eyeClosedIcon = toggleButton.querySelector('img[alt="eye-closed"]');

        if (isPasswordVisible) {
            eyeIcon.style.display = 'block';
            eyeClosedIcon.style.display = 'none';
        } else {
            eyeIcon.style.display = 'none';
            eyeClosedIcon.style.display = 'block';
        }
    }
}

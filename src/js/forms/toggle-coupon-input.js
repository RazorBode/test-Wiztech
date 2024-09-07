export class CouponInputToggle {
    constructor(triggerId, inputContainerId, toggleContainerId) {
        this.trigger = document.getElementById(triggerId);
        this.inputContainer = document.getElementById(inputContainerId);
        this.toggleContainer = document.getElementById(toggleContainerId);

        if (!this.trigger || !this.inputContainer || !this.toggleContainer) {
            console.error("Trigger, input container or toggle container not found!");
            return;
        }

        this.addEventListeners();
    }

    addEventListeners() {
        this.trigger.addEventListener('click', () => this.toggleInput());
    }

    toggleInput() {
        if (this.inputContainer.style.display === 'none') {
            this.inputContainer.style.display = 'flex';
            this.toggleContainer.innerHTML = '<div>Cupón</div>';
        } else {
            this.inputContainer.style.display = 'none';
            this.toggleContainer.innerHTML = '¿Tienes código de <span id="toggleCouponInput">cupón?</span> (opcional)';
            this.addEventListeners();
        }
    }
}

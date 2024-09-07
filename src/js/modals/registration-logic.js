export class FormNavigation {
    constructor(step1Id, step2Id, nextButtonId, prevButtonId) {
        this.step1 = document.getElementById(step1Id);
        this.step2 = document.getElementById(step2Id);
        this.nextStepButton = document.getElementById(nextButtonId);
        this.prevStepButton = document.getElementById(prevButtonId);

        this.stepperItems = document.querySelectorAll('.modal-stepper-item');

        this.initializeEvents();
    }

    initializeEvents() {
        if (this.nextStepButton) {
            this.nextStepButton.addEventListener('click', () => this.goToNextStep());
        }

        if (this.prevStepButton) {
            this.prevStepButton.addEventListener('click', () => this.goToPrevStep());
        }
    }

    goToNextStep() {
        if (this.step1 && this.step2) {
            this.step1.classList.remove('active');
            this.step2.classList.add('active');
            this.stepperItems[0].classList.add('active');
        }
    }

    goToPrevStep() {
        if (this.step1 && this.step2) {
            this.step2.classList.remove('active');
            this.step1.classList.add('active');
            this.stepperItems[0].classList.remove('active');
        }
    }
}



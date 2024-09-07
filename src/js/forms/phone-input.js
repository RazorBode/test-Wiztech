export class CustomPhoneInput {
    constructor(selectContainerId, optionsListId, phoneInputId) {
        this.selectContainer = document.getElementById(selectContainerId);
        this.optionsList = document.getElementById(optionsListId);
        this.phoneInput = document.getElementById(phoneInputId);

        if (!this.selectContainer) {
            console.error("Select container not found!");
            return;
        }

        if (!this.optionsList) {
            console.error("Options list not found!");
            return;
        }

        if (!this.phoneInput) {
            console.error("Phone input not found!");
            return;
        }

        this.selectedOption = this.selectContainer.querySelector('.selected-option');
        if (!this.selectedOption) {
            console.error("Selected option element not found in select container!");
            return;
        }

        this.options = this.optionsList.querySelectorAll('.option');

        this.initialize();
    }

    initialize() {
        if (!this.selectedOption) {
            console.error("Selected option is not initialized properly.");
            return;
        }

        this.selectedOption.addEventListener('click', () => {
            this.toggleOptions();
        });

        this.options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.target);
                this.toggleOptions();
            });
        });

        document.addEventListener('click', (e) => {
            if (!this.selectContainer.contains(e.target)) {
                this.closeOptions();
            }
        });
    }

    toggleOptions() {
        const isOptionsOpen = this.optionsList.style.display === 'flex';

        this.optionsList.style.display = isOptionsOpen ? 'none' : 'flex';

        if (!isOptionsOpen) {
            this.selectedOption.classList.add('active');
        } else {
            this.selectedOption.classList.remove('active');
        }
    }


    closeOptions() {
        this.optionsList.style.display = 'none';
    }

    selectOption(option) {
        const flag = option.getAttribute('data-flag');
        const value = option.getAttribute('data-value');
        this.selectedOption.innerHTML = `<span class="flag-${flag}"></span> <span class="value">${value}</span>`;
    }
}

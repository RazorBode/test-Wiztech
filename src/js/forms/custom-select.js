export class CustomSelect {
    constructor(triggerId, optionsId, optionsData) {
        this.trigger = document.getElementById(triggerId);
        this.optionsContainer = document.getElementById(optionsId);
        this.label = this.trigger ? this.trigger.querySelector('.custom-select__label') : null;
        this.arrow = this.trigger ? this.trigger.querySelector('.custom-select__arrow') : null;
        this.optionsData = optionsData;

        if (!this.trigger || !this.optionsContainer) {
            console.error("Trigger or options container not found!");
            return;
        }

        this.removeEventListeners();

        this.initialize();
    }

    initialize() {
        this.populateOptions();
        this.addEventListeners();
    }

    populateOptions() {
        if (this.optionsData && Array.isArray(this.optionsData)) {
            this.optionsContainer.innerHTML = '';

            this.optionsData.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'custom-select__option';
                optionElement.textContent = option.label;
                optionElement.dataset.value = option.value;
                this.optionsContainer.appendChild(optionElement);
            });

            this.addOptionClickListeners();
        } else {
            console.error('No options data provided or data is not an array');
        }
    }

    addOptionClickListeners() {
        const options = this.optionsContainer.querySelectorAll('.custom-select__option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.target);
            });
        });
    }

    addEventListeners() {
        this.trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleOptions();
        });

        document.addEventListener('click', this.handleClickOutside.bind(this));
    }

    removeEventListeners() {
        this.trigger.removeEventListener('click', this.toggleOptions.bind(this));
        document.removeEventListener('click', this.handleClickOutside.bind(this));
    }

    toggleOptions() {
        if (this.optionsContainer.classList.contains('show')) {
            this.hideOptions();
        } else {
            this.showOptions();
        }
    }

    showOptions() {
        this.optionsContainer.classList.add('show');
        if (this.arrow) {
            this.arrow.classList.add('rotated');
        }
        console.log('Options shown');
    }

    hideOptions() {
        this.optionsContainer.classList.remove('show');
        if (this.arrow) {
            this.arrow.classList.remove('rotated');
        }
        console.log('Options hidden');
    }

    handleClickOutside(e) {
        if (!this.trigger.contains(e.target) && this.optionsContainer.classList.contains('show') && !this.optionsContainer.contains(e.target)) {
            this.hideOptions();
        }
    }

    selectOption(option) {
        if (this.label) {
            this.label.textContent = option.textContent;
        }
    }
}

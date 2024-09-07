import { Modal } from './modal.js';
import { FormNavigation } from './registration-logic';
import { PasswordToggle } from '../forms/password-toggle.js';
import { CustomPhoneInput } from '../forms/phone-input.js';
import { BirthdayForm } from '../forms/birthday-form.js';
import { CouponInputToggle } from '../forms/toggle-coupon-input.js';

export class ModalManager {
    constructor(modalsContainerId) {
        this.modalsContainer = document.getElementById(modalsContainerId);
    }

    async initialize() {
        try {
            const authModalHtml = await this.loadModal('auth-modal.html');
            const registerModalHtml = await this.loadModal('register-modal.html');

            this.modalsContainer.innerHTML = authModalHtml + registerModalHtml;

            this.authModal = new Modal('authModal', 'closeAuthModal');
            this.registerModal = new Modal('registerModal', 'closeRegisterModal');

            new FormNavigation('form-step-1', 'form-step-2', 'next-step', 'prev-step');
            new CouponInputToggle('toggleCouponInput', 'couponInputContainer', 'couponToggleButton');

            this.addEventListeners();

        } catch (error) {
            console.error('Error loading modals:', error);
        }
    }

    async loadModal(modalUrl) {
        try {
            const response = await fetch(modalUrl);
            if (!response.ok) throw new Error(`Failed to load modal: ${modalUrl}`);
            return await response.text();
        } catch (error) {
            console.error('Error fetching modal:', error);
            throw error;
        }
    }

    addEventListeners() {
        const openAuthModalButton = document.getElementById('openAuthModal');
        const openRegisterModalButton = document.getElementById('openRegisterModal');

        if (openAuthModalButton) {
            openAuthModalButton.addEventListener('click', () => this.authModal.open());
        }

        if (openRegisterModalButton) {
            openRegisterModalButton.addEventListener('click', () => this.registerModal.open());
        }

        new PasswordToggle('password-toggle', 'password-field');
        new CustomPhoneInput('selected-country', 'country-options', 'phone-number');
        const birthdayForm = new BirthdayForm('day-trigger', 'month-trigger', 'year-trigger');
        birthdayForm.initialize();
    }
}


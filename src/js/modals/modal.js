class Modal {
    constructor(modalId, closeId) {
        this.modal = document.getElementById(modalId);
        this.closeButton = document.getElementById(closeId);
        this.initEvents();
    }

    open() {
        this.modal.style.display = 'flex';
    }

    close() {
        this.modal.style.display = 'none';
    }

    initEvents() {
        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
    }
}

async function loadModal(url) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.text();
    } else {
        throw new Error('Failed to load modal content');
    }
}

export { Modal, loadModal };

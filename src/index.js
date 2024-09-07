import './styles.scss';

import { ModalManager } from './js/modals/modal-manager';

document.addEventListener('DOMContentLoaded', async () => {
    const modalManager = new ModalManager('modals-container');
    await modalManager.initialize();
});



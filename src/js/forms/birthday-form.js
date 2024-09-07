import { CustomSelect } from './custom-select.js';

export class BirthdayForm {
    constructor(dayTriggerId, monthTriggerId, yearTriggerId) {
        this.dayTriggerId = dayTriggerId;
        this.monthTriggerId = monthTriggerId;
        this.yearTriggerId = yearTriggerId;
    }

    initialize() {
        const dayOptions = Array.from({ length: 31 }, (_, i) => ({ label: i + 1, value: i + 1 }));
        const monthOptions = [
            { label: 'January', value: 1 },
            { label: 'February', value: 2 },
            { label: 'March', value: 3 },
            { label: 'April', value: 4 },
            { label: 'May', value: 5 },
            { label: 'June', value: 6 },
            { label: 'July', value: 7 },
            { label: 'August', value: 8 },
            { label: 'September', value: 9 },
            { label: 'October', value: 10 },
            { label: 'November', value: 11 },
            { label: 'December', value: 12 }
        ];
        const yearOptions = Array.from({ length: 100 }, (_, i) => ({ label: 2024 - i, value: 2024 - i }));

        new CustomSelect(this.dayTriggerId, 'day-options', dayOptions);
        new CustomSelect(this.monthTriggerId, 'month-options', monthOptions);
        new CustomSelect(this.yearTriggerId, 'year-options', yearOptions);
    }
}

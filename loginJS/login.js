class AppForm {
    constructor() {
        this.form = [];
        this.step = 0;
        this.currentGroup = null;
        this.passwordRegexValidation = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

        this.setListener();
        this.getForm();
        document.getElementById('next-button').disabled = true;
        this.refresh();
        this.check();
    }

    submit = () => console.log('SUBMIT')

    currentInput = () => this.form[this.step - 1].input;
    previousInput = () => this.form[this.step - 2].input;

    check = () => this.currentInput().addEventListener('keyup', this.enableDisable);

    enableDisable = () => {
        if (this.valid(this.currentInput())) {
            this.currentInput().classList.remove('invalid');
            this.setListener();
            document.getElementById('next-button').disabled = false;
        } else {
            this.currentInput().classList.add('invalid');
            this.removeListeners();
            document.getElementById('next-button').disabled = true;
        }
    }

    valid = (input) => {
        let formType = input.id;
        let value = input.value;
        let empty = (str) => !str.split('').every(_char => _char !== ' ');

        if (!value || empty(value)) return false; {
        if (this.pageType === 'login') return value && !empty(value);
        

        switch (formType) {

            case 'email-input':
                return /\S+@\S+\.\S+/.test(value)

            case 'email-verification-input':
                return this.previousInput().value === value;

            case 'password-input':
                return this.passwordRegexValidation.test(value);

            case 'password-verification-input':
                return this.previousInput().value === value;

            default:
                return false;
        }
    };
    goBack = () => {
        if(this.step > 1) {
            this.currentInput().value = ''
            this.step--;
            this.displayStep();
            this.enableDisable();
        }
    }

    refresh = () => {
        this.step++;
        if (this.step <= this.form.length) {
            this.displayStep();
            this.removeListeners();
            document.getElementById('next-button').disabled = true;
            this.check();
            this.pageType = window.location.href.includes('login') ? 'login' : 'signup';
            
        } else {
            this.submit()
        }
    }
             

    displayStep = () => {
        if (this.currentGroup)
            this.currentGroup.element.style.display = 'none'
        this.currentGroup = this.form.find(group => group.step == this.step);
        this.currentGroup.element.style.display = 'block'
    }


    getForm = () => {
        const groups = Array.from(document.getElementsByClassName('form-group'));
        groups.forEach(_group => {
            var children = Array.from(_group.children)
            this.form.push({
                'step': Number.parseInt(_group.dataset.step),
                'element': _group,
                'input': children.find(_element => _element.nodeName === 'INPUT'),
            });
        });
    }


    setListener = () => {
    }
    removeListeners = () => {
        document.getElementById('next-button').removeEventListener('click', this.refresh);
    }

    newMethod() {
        return 'input';
    }
}

$(document).ready(function () {
    new AppForm();
});
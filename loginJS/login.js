class AppForm {
    constructor() {
        this.form = [];
        this.step = 0;
        this.currentGroup = null;

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
        if(this.valid(this.currentInput())) {
            this.currentInput().classList.remove('invalid');
            document.getElementById('next-button').disabled = false;
        }   else {
            this.currentInput().classList.add('invalid');
            this.removeListeners();
            document.getElementById('next-button').disabled = true;
        }
    }

    valid = (input) => {
        let formType = input.id;
        let value = input.value;
        let empty = (str) => !str.split('').every(_char => _char !== ' ');

        if(!value || empty(value)) return false

        switch(formType) {
                     case 'email-input':
                     return /\S+@\S+\.\S+/.test(value)

                    case 'email-verification-input':
                    return this.previousInput.value === value;

                    case 'password-input':
                    return /(?=.*\d)(?=.*[a-z](?=.*[A-Z])[a-zA-Z0-9@$&!]/.test(value)

                    case 'password-verification-input':
                        return this.previousInput.value === value;;

                        default:
                            return false;

                    
        }
    };
    
    refresh = () => {
        this.step++;
        if(this.step <= this.form.length)
        this.displayStep();
        else
            this.submit();
    }
    displayStep = () => {
        if(this.currentGroup)
        this.currentGroup.style.element.display = 'none'
        this.currentGroup = this.form.find(_group => _group.step).element;
        this.currentGroup.style.element.display = 'block'
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
        var button = document.getElementById('next-button');
        button.addEventListener('click', this.refresh);
    }
    removeListeners = () => {
        document.getElementById('next-button').removeEventListener('click', this.refresh) ;
    }

    newMethod() {
        return 'input';
    }
  }

$(document).ready(function() {
    new AppForm();
});
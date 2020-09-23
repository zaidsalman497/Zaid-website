class AppForm {
    constructor() {
        this.Form = [];
        this.step = 1;
        this.currentGroup = null;

        this.setListener();
        this.getForm();
        this.refresh();
    }

    refresh = () => {
        this.step++;
        this.displayStep();
    }

    displayStep = () => {
        if(this.currentGroup)
        this.currentGroup.style.display = 'none';
        this.currentGroup = this.form.find(_group => _group.step === this.step);
        this.currentGroup.style.display = 'block'
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
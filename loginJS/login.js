class AppForm {
    constructor() {
        this.Form = [];
        this.step = 0;
        this.currentGroup = null;

        this.setListener();
    }

    refresh = () => {
        console.log('refreshing');
        this.step++;
    }


    setListener = () => {
        document.getElementById('next-button').addEventListener('click', this.refresh);
    }
    removeListeners = () => {
        document.getElementById('next-button').removeEventListener('click', this.refresh) ;
    }
}

new AppForm();
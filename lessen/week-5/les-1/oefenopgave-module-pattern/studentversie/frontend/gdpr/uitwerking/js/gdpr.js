
    const init = () => {
        showStatus();
        showContent();
        bindEvents();

        if(cookieStatus() !== 'accept') showGDPR();
    }

    const bindEvents = () => {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            cookieStatus('accept');
            showStatus();
            showContent();
            hideGDPR();
        });


//student uitwerking


    }

    const showContent = () => {
        resetContent();
        const status = cookieStatus() == null ? 'not-chosen' : cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    const resetContent = () => {
        const classes = [
            '.content-gdpr-accept',

//student uitwerking

            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    const showStatus = () => {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            cookieStatus() == null ? 'Niet gekozen' : cookieStatus();
    }

    const cookieStatus = (status) => {
        if (status) localStorage.setItem('gdpr-consent-choice', status);

//student uitwerking

        return localStorage.getItem('gdpr-consent-choice');
    }


//student uitwerking


    const hideGDPR = () => {
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    const showGDPR = () => {
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }


init();


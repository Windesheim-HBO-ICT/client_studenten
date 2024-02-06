// Het formulier met de knop
const form = document.querySelector('#demo-captcha');

// Koppel er een event listener aan
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    // Voorkom dat het formulier verstuurd wordt
    e.preventDefault();

    grecaptcha.ready(function () {
        // Vul hier de site sleutel in (de public key)
        grecaptcha.execute('<SITE_SLEUTEL>', { action: 'submit' }).then(async function (token) {
            try {
                // Verstuur het eerst naar jouw eigen server.
                // Voor dit voorbeeld is een nodejs server bijgevoegd (Zie map server).
                // Je kunt dit voor je showcase ook aanpassen door je eigen server project (bijv. ASP.NET) te gebruiken.
                const response = await fetch('http://localhost:3000/captcha', {
                    method: "POST",
                    body: JSON.stringify({
                        response: token
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                // handel het resultaat af en bepaal of je te maken hebt met een mens of een bot.
                // lees hier meer over de response vanuit Google: https://developers.google.com/recaptcha/docs/v3#site_verify_response
                const result = await response.json();
                let humanFactor;
                let isHuman;
                // je bepaalt zelf wat je doet met de score, 0.5 is slechts een voorbeeldwaarde
                if (result.score > 0.5) {
                    humanFactor = 'Het lijkt erop dat je een mens bent, je score is: ' + result.score;
                    isHuman = true;
                }
                else {
                    humanFactor = 'Het lijkt erop dat je geen mens bent, je score is: ' + result.score;
                    isHuman = false;
                }

                // Onderstaande code: pas aan naar je eigen smaak
                const sectionPersonalia = document.querySelector('.personalia');
                let pResult = document.createElement('p');
                pResult.innerHTML = humanFactor;
                sectionPersonalia.appendChild(pResult);

                if (isHuman) {
                    // Wacht 3 seconden en verstuur dan het formulier alsnog
                    setTimeout(() => {
                        // form.submit();
                        pResult.innerHTML = 'Het formulier is verzonden!';
                    }, 3000
                    );
                }
            }
            catch (e) {
                console.log('Het verzenden van de captcha is mislukt: ' + e.message)
            }
        });
    });
}
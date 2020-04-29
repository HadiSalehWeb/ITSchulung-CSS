window.onload = () => {
    const inhouse = document.getElementById('inhouse-training'), anzahl = document.getElementById('anzahl')
    if (inhouse !== null)
        inhouse.onchange = e => {
            if (inhouse.checked) anzahl.removeAttribute('disabled')
            else anzahl.setAttribute('disabled', true)
        }
}

// const text = `Hallo Herr Grötschel! Blablabla...

// Um diesen Nachricht nie wieder zu sehen, drücken Sie auf "Cancel". Ansonsten auf "Ok".`

// if (localStorage.getItem('removePrompt') !== 'true' && !confirm(text))
//     localStorage.setItem('removePrompt', 'true')
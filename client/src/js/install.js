const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();

    // Store the triggered events
    window.deferredPrompt = event;

    // Unhide button
    butInstall.classList.toggle('hidden', false);

});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const pEvent = window.deferredPrompt;
    // console.log(promptEvent)
    if (!promptEvent) {
        return;
    }

    // Show prompt
    pEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    // Hide button
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    
    //Clear prompt
    window.deferredPrompt = null;

}); 

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default installation prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Optionally show a custom install prompt or handle the prompt as needed
  // For example, show a "Install PWA" button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Trigger the installation prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally handle the user's choice (e.g., log the outcome)
    console.log(`User response to the installation prompt: ${outcome}`);
    // Clear the deferredPrompt variable after the prompt is shown
    deferredPrompt = null;
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // The PWA has been successfully installed
  console.log('App was installed successfully!');
  // Perform any actions after the installation (e.g., show a success message)
});

const buttonElem = document.querySelector('button');

async function turnOnNotifications() {
    let notificationPermission = false;

    // Fråga efter tillåtelse att visa notifikationer
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        notificationPermission = true;
    }

    // Returnera true eller false
    return notificationPermission;
}

async function subscribeToPush() {
    const serviceWorker = await navigator.serviceWorker.ready;
    const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BBplhidqNPeLGzhIeXbQf736vi_WOJA3_b8mPS_0a1IWE77wQzojHmgLRw9ks4AQ3NpbSrSOgaD9Sqw4ghTlVfA'
    });
    console.log(JSON.stringify(subscription));
}

buttonElem.addEventListener('click', async () => {
    const permission = await turnOnNotifications();
    
    if (permission) {
        subscribeToPush();
    }
});

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register('../service-worker.js');
    }
}

window.addEventListener('load', () => {
    registerServiceWorker();
})
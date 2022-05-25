this.addEventListener('install', () => {
    self.skipWaiting();
    console.log('Server worker installed', new Date().toLocaleTimeString());
});

self.addEventListener('activate', () => {
    self.skipWaiting();
    console.log('Service worker activated', new Date().toLocaleTimeString());
});

self.addEventListener('push', (event) => {
    self.registration.showNotification('Push notis', {
        body: event.data.text()
    });
});
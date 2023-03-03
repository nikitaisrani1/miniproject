window.addEventListener('load', () => {
    registerSW();
});

// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceworker
                .register('serviceworker.js');
        }
        catch (e) {
            console.log('SW registration failed');
        }
    }
}


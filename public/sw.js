// Service Worker - Empty file to prevent 404 errors
// This file is intentionally empty as we're not using service workers currently

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});





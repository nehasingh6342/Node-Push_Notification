
console.log('service worker loaded....');

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log('push recieved');
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "Notification through node js ", //the body of the push notification
            icon: "https://pixabay.com/vectors/bell-notification-communication-1096280/" // icon 
        }
    );
});

const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json())


const publicVapidKey = 'your public Vapid key';
const privateVapidKey = 'Your Private Vapid Key';

//setting vapid keys details
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey,privateVapidKey);

//subscribe route
app.post('/subscribe', (req, res) => {
    //get push subscription object
    const subscription = req.body;

    //send status 201
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({title: 'Push test' });

    //pass the object into sendNotification fucntion and catch any error
    webpush.sendNotification(subscription, payload).catch(err=> console.error('error found',err));
})

//set the static path 
app.use(express.static(path.join(__dirname, "client")));

const port = 3000;
app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});
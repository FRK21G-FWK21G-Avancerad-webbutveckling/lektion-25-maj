const webPush = require('web-push');

// Generera nycklar som behövs för push notifikationer
// let keys = webPush.generateVAPIDKeys();
// console.log(keys);

// Nycklarna från generateVapidKeys();
const keys = {
    PUBLIC_KEY: 'BBplhidqNPeLGzhIeXbQf736vi_WOJA3_b8mPS_0a1IWE77wQzojHmgLRw9ks4AQ3NpbSrSOgaD9Sqw4ghTlVfA',
    PRIVATE_KEY: '2OyotRD5IRazhXht2LLdX6AfMlbHpvkyu1DMoFaTVns'
}

const email = 'christoffer.wallenberg@zocom.se';

webPush.setVapidDetails(
    `mailto:${email}`,
    keys.PUBLIC_KEY,
    keys.PRIVATE_KEY
);

// Det subscription objekt vi fick tillbaka när vi prenumerar på push notiser
// Innehåller en endpoint till Googles server som är unik för oss så Google vet var den ska
// skicka push notisen
const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cMpg2nmeAHM:APA91bFNrtcP_ORgFI3xS5_ZvftqKv6nYfIcy5sysglGIYgyxjQCN3y9WeQyiI7tAR-MgFLAHTbKRz8sdrQq6stUrtTiuHt5X952SEZh8mWRpXyO0MdOnqPj2-euGII7YBgoIGsloaSW","expirationTime":null,"keys":{"p256dh":"BKozgyILvIKJYCFj1QPCxXgViYFB0BXWTaIOiwKm9q_AgDlERTKoqf694rYlA_JJE1x0ZFJhsFc_HUHekDlnduc","auth":"SP0r00ottpzGGFFHi132ew"}};

// Skickar själva push notisen
webPush.sendNotification(subscription, 'Detta är en push notis');



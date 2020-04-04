import { NConstans } from './constans';
import * as firebase from 'firebase-admin'

let serviceAccount = require("./whalelo-firebase-adminsdk-jo2bv-fa6fc0d2d9.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://whalelo.firebaseio.com"
});

export class NConfig {
    static sendMessages = function (tokens: Array<string>, data: any, title?: string, body?: string) {
        let i = 0;
        let length = tokens.length;
        if (length == 0) {
            return;
        }
        let arr = [];
        for (i = 0; i < length; i++) {
            if (tokens[i].length != NConstans.TOKEN_FIREBASE_LENGTH) {
                continue;
            }
            arr.push(tokens[i]);
        }
        if (arr.length === 0) {
            return;
        }

        try {
            let payload = {
                "notification": {
                    "title": title ? title : "",
                    "body": body ? body : ""
                },
                "data": { data: JSON.stringify(data) }
            }

            firebase.messaging().sendToDevice(arr, payload);
        } catch (err) {
            // L.d(TAG, "token firebase", registrationToken);
            console.log(err);
            return Promise.reject(err);
        }
    }

}
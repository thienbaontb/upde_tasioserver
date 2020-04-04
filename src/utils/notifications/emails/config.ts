const nodemailer = require('nodemailer');
const swig = require('swig');
import * as path from 'path';
import { RConstans } from '../../../constans';


import { EConstans } from './constans';

export class EConfig {
    static transporter = nodemailer.createTransport({
        service: 'yandex',
        auth: {
            user: EConstans.EMAIL, // generated ethereal user
            pass: EConstans.PASSWORD// generated ethereal password
        }
    });

    private static _sendMail = function (mailOptions: MailOption, name?: string): void {
        // EConfig.transporter.sendMail(mailOptions, (err: any, info: any) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     if (typeof name !== 'undefined') {
        //         console.log("send mail success " + name);
        //     }
        //     return;
        // });
    }

    static sendMail = function (to: string, subject: string, data: object): void {
        let html = swig.renderFile(path.join(RConstans.ROOT_PATH, "./templates/emails/templates", 'appointment1.html'), data);
        let mailOption = new MailOption(EConstans.SENDER_NAME, to, subject, html);
        EConfig._sendMail(mailOption);
    }
}

class MailOption {

    from: string; // sender address
    to: string;
    subject: string;
    html: string;

    constructor(from: string, to: string, subject: string, html: string) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.html = html;
    }
}
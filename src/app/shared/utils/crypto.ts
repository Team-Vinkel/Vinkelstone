/// <reference path="../../../../custom-typings/cryptojs.d.ts" />
import * as CryptoJS from 'crypto-js';

export class Crypto {
    static encryptToBase64(input: string): string {
        let utf8 = CryptoJS.enc.Utf8.parse(input);
        let base64 = CryptoJS.enc.Base64.stringify(utf8);

        return base64;
    }

    static encryptToSha1(string) {
        let sha1 = CryptoJS.SHA1(string).toString();

        return sha1;
    }
}

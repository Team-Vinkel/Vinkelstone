import { Crypto } from './../utils/crypto';

export class KinveyConfig {
    private _APP_ID = 'kid_HkVC5wlSe';
    private _APP_SECRET = '52680624648749d087ebe3ef84bd8542';
    private _APP_MASTER = 'd580dbb3e2df4867b3423c293a1edc94';
    private _AUTHORIZATION_STRING = `${this._APP_ID}:${this._APP_SECRET}`;
    private _AUTHORIZATION_STRING_MASTER = `${this._APP_ID}:${this._APP_MASTER}`;
    private _AUTH_HEADER_COMMON: string;
    private _AUTH_HEADER_USERS: string;

    constructor() {
        this.loadBase64AuthKeys();
    }

    public get APP_ID() {
        return this._APP_ID;
    }

    public get AUTH_HEADER_COMMON(){
        return this._AUTH_HEADER_COMMON;
    }

    public get AUTH_HEADER_USERS(){
        return this._AUTH_HEADER_USERS;
    }

    private loadBase64AuthKeys(): void {
        this._AUTH_HEADER_COMMON = Crypto.encryptToBase64(this._AUTHORIZATION_STRING_MASTER);
        this._AUTH_HEADER_USERS = Crypto.encryptToBase64(this._AUTHORIZATION_STRING);
    }
}

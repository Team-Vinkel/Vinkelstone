import { Crypto } from './../utils/crypto';

export class KinveyConfig {
    private _APP_ID = 'kid_HkVC5wlSe';
    private _APP_SECRET = '52680624648749d087ebe3ef84bd8542';
    private _APP_MASTER = 'd580dbb3e2df4867b3423c293a1edc94';
    private _AUTHORIZATION_STRING = `${this._APP_ID}:${this._APP_SECRET}`;
    private _AUTHORIZATION_STRING_MASTER = `${this._APP_ID}:${this._APP_MASTER}`;
    private _AUTH_STRING_COMMON: string;
    private _AUTH_STRING_USERS: string;
    private _AUTHORIZATION_HEADER_NAME = 'Authorization';
    private _AUTHORIZATION_TYPE = 'Basic';
    private _BASE_URL = 'https://baas.kinvey.com/';
    private _COLLECTIONS_URL = `${this._BASE_URL}appdata/${this._APP_ID}/`;
    private _USERS_URL = `${this._BASE_URL}user/${this._APP_ID}/`;

    public CONTENT_TYPE_HEADER = {
        name: `Content-Type`,
        value: `application/json`
    };

    constructor() {
        this.loadBase64AuthKeys();
    }

    public get AUTH_HEADER_COMMON() {
        return {
            name: this._AUTHORIZATION_HEADER_NAME,
            value: `${this._AUTHORIZATION_TYPE} ${this._AUTH_STRING_COMMON}`
        };
    }


    public get LOGIN_USER_URL(){
        return `${this._USERS_URL}login`;
    }

    public get CHECK_USER_IDENTITY_URL(){
        return `${this._USERS_URL}_me`;
    }

    public get AUTH_HEADER_USERS() {
        return {
            name: this._AUTHORIZATION_HEADER_NAME,
            value: `${this._AUTHORIZATION_TYPE} ${this._AUTH_STRING_USERS}`
        };
    }

    public  getUsersUrl(filter?: string) {
        return `${this._USERS_URL}${filter ? '?query=' + filter : ''}`;
    }

    public getCollectionUrl(collectionName: string, filter?: string) {
        return `${this._COLLECTIONS_URL}${collectionName}/${filter ? '?query=' + filter : ''}`;
    }

    private loadBase64AuthKeys(): void {
        this._AUTH_STRING_COMMON = Crypto.encryptToBase64(this._AUTHORIZATION_STRING_MASTER);
        this._AUTH_STRING_USERS = Crypto.encryptToBase64(this._AUTHORIZATION_STRING);
    }
}

import { KinveyConfig } from './kinvey.config';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class KinveyService {

    constructor(private _config: KinveyConfig, private _http: Http) {
    }

    public getCollection(collectionName: string, filter?: string) {
        let url = this._config.getCollectionUrl(collectionName, filter);
        let auth = this._config.AUTH_HEADER_COMMON;

        let headers = new Headers();
        headers.append(auth.name, auth.value);

        return this._http.get(url, { headers })
            .map(res => res.json());
    }

    public postCollection(collectionName: string, body: Object) {
        let url = this._config.getCollectionUrl(collectionName);
        let auth = this._config.AUTH_HEADER_COMMON;
        let contentType = this._config.CONTENT_TYPE_HEADER;

        let headers = new Headers();
        headers.append(auth.name, auth.value);
        headers.append(contentType.name, contentType.value);

        return this._http.post(url, JSON.stringify(body), { headers })
            .map(res => res.json());
    }

    public putCollection(collectionName: string, itemId: string, body: Object) {
        let url = `${this._config.getCollectionUrl(collectionName)}${itemId}/`;
        let auth = this._config.AUTH_HEADER_COMMON;
        let contentType = this._config.CONTENT_TYPE_HEADER;

        let headers = new Headers();
        headers.append(auth.name, auth.value);
        headers.append(contentType.name, contentType.value);

        return this._http.put(url, JSON.stringify(body), { headers })
            .map(res => res.json());
    }

    public registerUser(user: Object) {
        let url = this._config.USERS_URL;
        let auth = this._config.AUTH_HEADER_USERS;
        let contentType = this._config.CONTENT_TYPE_HEADER;

        let headers = new Headers();
        headers.append(auth.name, auth.value);
        headers.append(contentType.name, contentType.value);

        return this._http.post(url, JSON.stringify(user), { headers })
            .map(res => res.json());
    }

    public loginUser(user: Object) {
        let url = this._config.LOGIN_USER_URL;
        let auth = this._config.AUTH_HEADER_USERS;
        let contentType = this._config.CONTENT_TYPE_HEADER;

        let headers = new Headers();
        headers.append(auth.name, auth.value);
        headers.append(contentType.name, contentType.value);

        return this._http.post(url, JSON.stringify(user), { headers })
            .map(res => res.json());
    }
}

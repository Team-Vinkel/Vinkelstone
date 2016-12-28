import { KinveyConfig } from './kinvey.config';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class KinveyService {
    // TEST_URL = `https://baas.kinvey.com/appdata/${this.APP_ID}`;

    constructor(private _config: KinveyConfig, private _http: Http) {
    }

    testKinvey() {
        // let headers: Headers = new Headers();

        // headers.append('Authorization', `Basic ${this.AUTORIZATION_HEADER_MAIN}`);
        // return this._http.get(this.TEST_URL, { headers })
        //     .map(res => res.json());
    }
}

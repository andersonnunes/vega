import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {
    private API_URL: String = "http://localhost:5000";

    constructor(private http:Http) {}

    getFeatures() {
        return this.http.get(`${this.API_URL}/api/features`)
            .map(res => res.json());
    }

    getMakes() {
        return this.http.get(`${this.API_URL}/api/makes`)
            .map(res => res.json());
    }
}
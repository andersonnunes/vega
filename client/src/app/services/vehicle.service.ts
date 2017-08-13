import { SaveVehicle } from "../models/vehicle";
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

    create(vehicle) {
        return this.http.post(`${this.API_URL}/api/vehicles`, vehicle)
          .map(res => res.json());
      }
    
    getVehicle(id) {
        return this.http.get(`${this.API_URL}/api/vehicles/` + id)
            .map(res => res.json());
    }

    update(vehicle: SaveVehicle) {
        return this.http.put(`${this.API_URL}/api/vehicles/` + vehicle.id, vehicle)
            .map(res => res.json());
    }

    delete(id) {
        return this.http.delete(`${this.API_URL}/api/vehicles/` + id)
    }    
}
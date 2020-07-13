import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  
  formData:Vehicle;

  readonly rootUrl = 'http://localhost:63929/api'
  list: Vehicle[];

  constructor(private http:HttpClient) { 
    this.formData = new Vehicle;
  }

  postVehicle(formData:Vehicle){
    return this.http.post(this.rootUrl+'/Vehicles',formData);
  }

  updateVehicle(form:NgForm, id: number){
    return this.http.put(this.rootUrl+'/Vehicles/'+id,this.formData);
  }

  removeVehicle(id: number){
    return this.http.delete(this.rootUrl+'/Vehicles/'+id);
  }

  refreshList(){
    this.http.get(this.rootUrl+'/Vehicles')
    .toPromise()
    .then(res => {this.list = res as Vehicle[]; console.log("refreshing");},
    err => console.log("error: "+ err));
  }
}

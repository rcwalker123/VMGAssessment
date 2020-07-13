import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/shared/vehicles.service';
import { NgForm, NgModel } from '@angular/forms';
import { Vehicle } from 'src/app/shared/vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styles: [
  ]
})
export class VehicleComponent implements OnInit {
  noSubmit: boolean;
  showDateWarning: boolean;
  constructor(public service : VehiclesService) { 
    this.noSubmit = true;
    this.showDateWarning = false;
  }

  ngOnInit(): void {
    this.resetForm();
  }

resetForm(form?:NgForm){
  if (form != null){
    form.resetForm();
  }
  this.service.formData = {
    id : 0,
    client : '',
    model : '',
    bookingDate : '',
    notes : ''
  };
  
}

onSubmit(form:NgForm){
  if(this.service.formData.id == 0){
    this.insertRecord(form);
   }
  else{
    this.updateRecord(form, this.service.formData.id);
  }
  form.form.markAsPristine();
  this.noSubmit = true;
}

check(){
  var model = this.service.formData.model;
  var client = this.service.formData.client;
  var booking =this.service.formData.bookingDate;
  var dateFormat = "^([0-9]{2}/[0-9]{2}/[0-9]{4})$"

  var valid = booking.match(dateFormat);
  if(!valid){
    this.showDateWarning = true;
  }
  else{
    this.showDateWarning = false;
  }
  if(model.length >= 1 && client.length >= 1 && valid){
  this.noSubmit = false;
  this.showDateWarning = false;
  }
  else{
  this.noSubmit = true;
  }
}

insertRecord(form:NgForm){
  this.service.postVehicle(form.value).
      subscribe(
        res =>{ this.service.refreshList(); this.resetForm();},
        err => console.log(err));
 
}

updateRecord(form:NgForm, id:number){
  this.service.updateVehicle(form,id).subscribe(
    res => {this.resetForm(form); this.service.refreshList();},
    err => {console.log(err)}
  )
}
}

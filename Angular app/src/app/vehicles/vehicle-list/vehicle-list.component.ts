import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/shared/vehicles.service';
import { Vehicle } from 'src/app/shared/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styles: [
  ]
})

export class VehicleListComponent implements OnInit {
  dateFilter: string;
  constructor(public service: VehiclesService) { 
  }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(v: Vehicle){
    this.service.formData = Object.assign({},v);
  }

  filterUpcoming(){
    var now = new Date();
    var filterUpcoming = this.service.list.filter(x => this.formatDate(x.bookingDate) > now);

    this.service.list = filterUpcoming;
  }

  formatDate(date) {
    var dateParts = date.split("/");

    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 

    return dateObject;
}

  filterNormal(){
    this.service.refreshList();
  }

  onDelete(Id){
    if(confirm("Are you sure you want to delete this record?")){
      this.service.removeVehicle(Id).
      subscribe(
        res =>{ this.service.refreshList()},
        err => console.log(err));
    }

  }
}

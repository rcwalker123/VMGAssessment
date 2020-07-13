import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehiclesService } from './shared/vehicles.service';
import { MyFilterPipe } from './my-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleComponent,
    VehicleListComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

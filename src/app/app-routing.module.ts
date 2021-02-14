import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent} from './country-details/country-details.component';
import {AddCountryComponent} from './add-country/add-country.component';


const routes: Routes = [
  { path: '', component: CountryDetailsComponent  },//default path
  { path: 'add/:id', component: AddCountryComponent  },
  {path: 'conn', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {CountryDataService} from '../service/data/country-data.service';
import {Router} from '@angular/router';

export class Country {
  constructor(
    public id:number,
    public name:string,
    public capital:string,
    public language:string,
    public currency:string,
    public population:number,
    public president:string,
  ){

  }
}

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countries: Country[]
  message:string
  name: string

  constructor(private router: Router,
              private countryService: CountryDataService) { }

  ngOnInit() {
    this.refreshCountries()
  }

  refreshCountries(){
    this.countryService.retrieveAllCountries().subscribe(
      response => {
        console.log(response);
        this.countries = response;
      }
    )
  }

  deleteCountry(id){
    this.countryService.deleteCountry('con', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshCountries()

      }
    )
  }

  updateCountry(id){
    this.router.navigate(['add',id])
  }

  addCountry(){
    this.router.navigate(['add',-1])
  }

}


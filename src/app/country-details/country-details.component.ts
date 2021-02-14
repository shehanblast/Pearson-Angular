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

  constructor(private router: Router) { }

  ngOnInit() {
  }

}


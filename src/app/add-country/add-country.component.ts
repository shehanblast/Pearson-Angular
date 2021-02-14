import { Component, OnInit } from '@angular/core';
import {Country} from '../country-details/country-details.component';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryDataService} from '../service/data/country-data.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  id: number
  country: Country

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryDataService) { }

  ngOnInit() {
   /*
    this.id = this.route.snapshot.params['id'];
    this.country=new Country(this.id,'','','','',0,'')

    if(this.id!=-1){
      this.countryService.('in28minutes',this.id).subscribe(
        data=>this.todo=data
      )
    }
*/
  }

}

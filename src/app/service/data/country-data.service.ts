import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../country-details/country-details.component';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http:HttpClient) { }

  retrieveAllCountries(){
    return this.http.get<Country[]>(`http://localhost:8080/rest/v2/jpa/countries`);
  }
/*
  deleteCountry(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  retrieveCountry(username,id){
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  updateCountry(username,id, todo){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`,todo);
  }

  createCountry(username,todo){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/todos`,todo);
  }*/


}

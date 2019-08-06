import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Weaterservice } from '../../../services/weather.service';
declare var $: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
    public el: any;
    constructor(private router: Router,private weatherService: Weaterservice) {}

    ngAfterViewInit() {

  
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

    location = {cityName: '' }
    weather = undefined
  
  
  
    ngOnInit() {
      this.getweather(this.location.cityName)
  
    }
  
    getweather(cityName: string) {
      this.weatherService
      .getweather(cityName)
      .subscribe(
        res => {
          console.log(res)
          this.weather = res;
         },
         err => {
           console.log(err)
         }
      )
    }
  
    submitLocation(cityName: HTMLInputElement) {
      if (cityName.value) {
        this.getweather(cityName.value)
  
        cityName.value = ''
      } 
      cityName.focus()
      return false;
    }
  

}
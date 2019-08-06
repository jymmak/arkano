import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weaterservice {

  apikey: string = '9b54ee561c75d5415ebf1818d23bd32f'
  URI: string = ''

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?cnt=5&appid=${this.apikey}&units=metric&q=`
   }

   getweather(cityName: string) {
     return this.http.get(`${this.URI}${cityName}`)
   }
}

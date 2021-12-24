import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  getAdvertisements(): Observable<any> {
    return this.http.get('http://localhost:8080/advertisement')
  }

  getAdvertisementById(id: number){
    return this.http.get('http://localhost:8080/advertisement/'+id)
  }

  deleteAdvertisement(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/advertisement'+'/'+data.id);
  }

  createAdvertisement(data: any) {
    console.log(data)
    return this.http.post('http://localhost:8080/advertisement', data, {responseType: 'arraybuffer'});
  }

  editAdvertisement(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/advertisement'+'/'+data.id, data);
  }

}

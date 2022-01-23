import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor(private http: HttpClient) { }

  getLocales(): Observable<any> {
    return this.http.get('http://localhost:8080/locale')
  }

  getLocaleById(id: number){
    return this.http.get('http://localhost:8080/locale/'+id)
  }

  deleteLocale(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/locale'+'/'+data.id);
  }

  createLocale(data: any) {
    console.log('createJewellery: '+JSON.stringify(data));
    console.log(data)
    return this.http.post('http://localhost:8080/locale', data, {responseType: 'arraybuffer'});
  }

  editLocale(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/locale'+'/'+data.id, data);
  }
}

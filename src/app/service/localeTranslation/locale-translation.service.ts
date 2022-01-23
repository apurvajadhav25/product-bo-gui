import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LocaleTranslationService {

  constructor(private http: HttpClient) { }

  getLocaleTranslation(): Observable<any> {
    return this.http.get('http://localhost:8080/localeTranslation')
  }

  getLocaleTranslationById(id: number){
    return this.http.get('http://localhost:8080/localeTranslation/'+id)
  }

  deleteLocaleTranslation(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/localeTranslation'+'/'+data.id);
  }

  createLocaleTranslation(data: any) {
    console.log('createJewellery: '+JSON.stringify(data));
    console.log(data)
    return this.http.post('http://localhost:8080/localeTranslation', data, {responseType: 'arraybuffer'});
  }

  editLocaleTranslation(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/localeTranslation'+'/'+data.id, data);
  }
}

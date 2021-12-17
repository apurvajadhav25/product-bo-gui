import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Filter4Service {

  constructor(private http: HttpClient) { }

  getFilters(): Observable<any> {
    return this.http.get('http://localhost:8080/filter4')
  }

  getFilterById(id: number){
    return this.http.get('http://localhost:8080/filter4/'+id)
  }

  deleteFilter(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/filter4'+'/'+data.id);
  }

  createFilter(data: any) {
    console.log('createJewellery: '+JSON.stringify(data));
    console.log(data)
    return this.http.post('http://localhost:8080/filter4', data, {responseType: 'arraybuffer'});
  }

  editFilter(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/filter4'+'/'+data.id, data);
  }

}

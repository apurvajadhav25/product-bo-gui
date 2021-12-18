import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getConfigurations(): Observable<any> {
    return this.http.get('http://localhost:8080/configuration')
  }

  getConfigurationById(id: number){
    return this.http.get('http://localhost:8080/configuration/'+id)
  }

  deleteConfiguration(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/configuration'+'/'+data.id);
  }

  createConfiguration(data: any) {
    console.log('createJewellery: '+JSON.stringify(data));
    console.log(data)
    return this.http.post('http://localhost:8080/configuration', data, {responseType: 'arraybuffer'});
  }

  editConfiguration(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/configuration'+'/'+data.id, data);
  }

  
}

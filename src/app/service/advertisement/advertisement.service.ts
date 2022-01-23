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

  upload(file: any,id:any):Observable<any> {
    //  console.log(file)
     const formData = new FormData();
    // formData.append("file", file, file.name);
    // formData.append("id", id);

    for (var i = 0; i < file.length; i++) { 
      formData.append("file", file[i], file.name);
      
    }
    formData.append("id", id);
    console.log("success")
    return this.http.post('http://localhost:8080/uploadAdvertisement', formData)
}

deleteImage(id: number,name: any){
  console.log(id)
 
  return this.http.get('http://localhost:8080/deleteAdvertisement', {
    params:{
      id: id,
      name: name
    }
  })

}

}

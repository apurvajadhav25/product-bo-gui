import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/component/models/product';
import { api } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {

  constructor(private http: HttpClient) { }

  url = api.jewelleries;

  getJewelleries(): Observable<any> {
    return this.http.get('http://localhost:8080/products')
  }

  getJwelleryById(id: number){
    return this.http.get('http://localhost:8080/products/'+id)
  }

  deleteJewellery(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/products'+'/'+data.id);
  }

  createJewellery(data: any) {
    console.log('url : '+this.url)
    console.log('createJewellery: '+JSON.stringify(data));
    console.log(data)
    return this.http.post('http://localhost:8080/products', data, {responseType: 'arraybuffer'});
  }

  editJewellery(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/products'+'/'+data.id, data);
  }

  uploadFile(event: any) {
    console.log("inside service: "+event.files[0].name);
    console.log(this.url+"/uploadMultipleFiles");
    debugger;
    //files: File=event.files;
    return this.http.post(this.url+"/uploadMultipleFiles", event.files);
  }

  getImages(id: any) {
    return this.http.get("http://localhost:8080/images",{
     params:{
       id: id
     }
   })
   }

   getImageById(id: any): Observable<any>{
      return this.http.get('http://localhost:8080/images/'+id)
   }

   deleteImage(data: number) {
    console.log("in delete")
    return this.http.delete('http://localhost:8080/images'+'/'+data);
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
    
    return this.http.post('http://localhost:8080/uploadFile', formData)
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';







@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  constructor(private http:HttpClient) {
   }

// connect frontend to backend

   apiUrl = 'http://localhost:1150';

   ////////////////////////////////////////BACK UP///////////////////////////////////////

   getAllData():Observable<any>
   {
    return this.http.get(`${this.apiUrl}/getbackup`);
   }

   backupData(frm : any ):Observable<any>
   {
    return this.http.post(`${this.apiUrl}/backup`, frm);
   }

   updateBackupT(id: number): Observable<any>
   {
    return this.http.put(`${this.apiUrl}/gettrue/${id}`, "");
   }

   deleteBackup(id : number):Observable<any>
   {
    return this.http.delete(`${this.apiUrl}/deletebackup/`+id);
   }

/////////////////////////////////////////////////////////CONFIGURATIONS////////////////////////////////////////////////////

   postConfigTable(configu : any): Observable<any>
   {
    return this.http.post(`${this.apiUrl}/config/post`, configu);
   }
   backUpall(): Observable<any>
   {
    return this.http.put(`${this.apiUrl}/gettrue`, '');
   }

   getConfigTable(): Observable<any>
   {
    return this.http.get(`${this.apiUrl}/config/get`);
   }
   deleteConfig(id : number):Observable<any>
   {
    return this.http.delete(`${this.apiUrl}/config/delete/`+id);
   }
   getShowIP(): Observable<any>
   {
    return this.http.get(`${this.apiUrl}/config/shipintbr/`);
   }
   updateConfig(id: any): Observable<any>
   {
    return this.http.put(`${this.apiUrl}/shipintbr/`+id,'');
   }
   deleteShow(id: number):Observable<any>
   {
    return this.http.delete(`${this.apiUrl}/config/delete/showip/`+id);
   }
   deleteInvAll():Observable<any>
   {
    return this.http.delete(`${this.apiUrl}/deleteinventory`);
   }
   getJoin(id: number):Observable<any>
   {
    return this.http.get(`${this.apiUrl}/join/`+id);
   }
   getInventory():Observable<any>
   {
    return this.http.get(`${this.apiUrl}/inventory`);
   }
   getDL():Observable<any>
   {
    return this.http.get(`${this.apiUrl}/download`);
   }
   getGet():Observable<any>
   {
    return this.http.get(`${this.apiUrl}/getget`);
   }

   vlan(vlanfrm :any): Observable<any>
   {
    return this.http.post(`${this.apiUrl}/vlan`, vlanfrm);
   }
   createvlan(vlanfrm :any): Observable<any>
   {
    return this.http.post(`${this.apiUrl}/createvlan`, vlanfrm);
   }



}

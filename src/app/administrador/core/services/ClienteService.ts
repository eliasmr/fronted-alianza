import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../modelo/client";
import { ObjectResponse } from "../modelo/object.response";

@Injectable({
    providedIn: "root"
  })
export class ClienteService {
    
    constructor(private http: HttpClient){
        
    }
    public getCliente(): Observable<ObjectResponse> {
        return  this.http.get<ObjectResponse>(environment.URL_PATH+'clientAll');
    }
    public clienteDelete(id:String): Observable<ObjectResponse> {
        return  this.http.post<ObjectResponse>(environment.URL_PATH+'clientDelete'+id,null);
    }
    public findById(id:String): Observable<ObjectResponse> {
        return  this.http.post<ObjectResponse>(environment.URL_PATH+'clientFindByID'+id,null);
    }
    public update(cliente:Cliente): Observable<ObjectResponse> {
        return  this.http.post<ObjectResponse>(environment.URL_PATH+'clientUpdate',cliente);
    }
    public save(cliente:Cliente): Observable<ObjectResponse> {
        return  this.http.post<ObjectResponse>(environment.URL_PATH+'clientSave',cliente);
    }
}
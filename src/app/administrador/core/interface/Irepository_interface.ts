import { Observable } from "rxjs";

export interface IRepository<J>{
    create?(j: J): Observable<J | any>;
    sendRequest?(j: J): Observable<J | any>;
    createList?(j: J[]): Observable<J | any>;
    findAll?(): Observable<J[]>;
    sendRequest_withparse?(j: J): Observable<J[]>;
    modify?(j: J): Observable<J>;
    findbyId?(base): Observable<J>;
}
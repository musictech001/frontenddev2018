import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class WebServiceService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any>{
    return this.http.get("https://randomuser.me/api")
  }

  getUsers(n:number): Observable<any>{
    return this.http.get("https://randomuser.me/api?results=" + n);
  }
}

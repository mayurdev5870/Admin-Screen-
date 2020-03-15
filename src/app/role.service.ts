import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  configUrl = 'assets/role.json';
  constructor(private http:HttpClient) { }

  
  getConfig() {
    return this.http.get(this.configUrl);
  }

}

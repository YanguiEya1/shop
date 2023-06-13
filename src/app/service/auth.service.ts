import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = '/api/user/'; // Update the API URL to use the proxy

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  GetUserbyCode(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  Getall() {
    return this.http.get(this.apiurl);
  }
  updateuser(id: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + id, inputdata);
  }
  getuserrole() {
    return this.http.get('/api/role/'); // Update the API URL to use the proxy
  }
  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }
  getrole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }
  GetAllCustomer() {
    return this.http.get('/api/customer/'); // Update the API URL to use the proxy
  }
  Getaccessbyrole(role: any, menu: any) {
    return this.http.get('/api/roleaccess/?role=' + role + '&menu=' + menu); // Update the API URL to use the proxy
  }
}


import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL = 'http://localhost:3000/api';




  constructor(private HttpClient: HttpClient) { }

  getData() {
    return this.HttpClient.get(`${this.apiURL}/employees`);
  }

  insertData(data: any) {
    return this.HttpClient.post(`${this.apiURL}/employee/add`, data);
  }
  getDataById(id: any) {
    return this.HttpClient.get(`${this.apiURL}/employee/${id}`);
  }
  updateData(data: any, id: any) {
    return this.HttpClient.put(`${this.apiURL}/employee/update/${id}`, data);
  }
  deleteData(id: any) {
    return this.HttpClient.delete(`${this.apiURL}/employee/${id}`);
  }


}

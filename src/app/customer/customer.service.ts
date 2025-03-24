/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private baseurl: string = "/api/customer"; // Match backend

fetchallcustmors(): Observable<customer[]> {
  return this.http.get<customer[]>(${this.baseurl}); // Use correct backticks
}

createCustomer(customer: customer): Observable<customer> {
  return this.http.post<customer>(this.baseurl, customer);
}
  
updateCustomer(id: number, customer: customer): Observable<customer> {
  return this.http.put<customer>(${this.baseurl}/${id}, customer);
}

deleteCustomer(id: number): Observable<customer> {
  return this.http.delete<customer>(${this.baseurl}/${id});
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customers'; // Make sure the backend URL is correct

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}`); // ✅ Corrected backticks
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}`, customer); // ✅ Corrected backticks
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/${id}`, customer); // ✅ Corrected backticks
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`); // ✅ Corrected backticks
  }
}

*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private baseurl: string = "/api/customer"; // Match backend

fetchallcustmors(): Observable<customer[]> {
  return this.http.get<customer[]>(this.baseurl); // Use correct backticks
}

createCustomer(customer: customer): Observable<customer> {
  return this.http.post<customer>(this.baseurl, customer);
}
  
updateCustomer(id: number, customer: customer): Observable<customer> {
  return this.http.put<customer>('${this.baseurl}/${id}', customer);
}

deleteCustomer(id: number): Observable<void> {
  return this.http.delete<void>('${this.baseurl}/${id}');
}
}
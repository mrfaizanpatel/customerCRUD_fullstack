
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  //private baseurl: string = "/api/customer"; // Match backend
  private baseurl: string = "/api/customer";
  private deletedCustomersUrl: string = "/api/deleted/customer"; // Deleted customers API


fetchallcustmors(): Observable<customer[]> {
  return this.http.get<customer[]>(this.baseurl); // Use correct backticks
}
fetchdeletedcust(): Observable<customer[]> {
  return this.http.get<customer[]>(this.deletedCustomersUrl); // Use correct backticks
}
createCustomer(customer: customer): Observable<customer> {
  return this.http.post<customer>(this.baseurl, customer);
}
  

updateCustomer(id: number, customer: customer): Observable<customer> {
  return this.http.put<customer>(`${this.baseurl}/${id}`, customer);  // ✅ Fix: Use backticks (``)
}


deleteCustomer(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseurl}/${id}`);
}

softdelete(id:number):Observable<void>{
  return this.http.delete<void>(`${this.baseurl}/softdelete/${id}`);
}

restore(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseurl}/restore/${id}`);
}

}

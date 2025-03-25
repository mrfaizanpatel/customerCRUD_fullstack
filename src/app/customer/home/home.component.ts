import { CustomerService } from './../customer.service';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { customer } from '../customer';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  displayedColumns = ['id', 'name', 'email', 'password','actions'];
  dataSource = new MatTableDataSource<customer>;

  constructor(private custservice: CustomerService, public dialog: MatDialog) { }
  ngAfterViewInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.custservice.fetchallcustmors().subscribe((data) => {
      this.customers = data;
      this.dataSource = new MatTableDataSource<customer>(data);
    });
  }

  customers: customer[] = [];
  addCustomer(customer: customer) {
    this.custservice.createCustomer(customer).subscribe(() => {
      this.loadCustomers();
    });
  }

  opendialogue(customer?: customer): void {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      width: '400px',
      data: customer? { ...customer } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCustomers(); // Reload the table after adding new customer
      }
    });

  }
  updateCustomer(customer: customer) {
    this.custservice.updateCustomer(customer.id, customer).subscribe(() => {
      this.loadCustomers();
    });
  }
  deleteCustomer(customer: customer) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.custservice.deleteCustomer(customer.id).subscribe(() => {
        this.customers = this.customers.filter(c => c.id !== customer.id); // ✅ Remove deleted customer from array
        this.dataSource.data = this.customers; // ✅ Update table
        this.loadCustomers();

      });
    }
  }
   
}
import { CustomerService } from './../customer.service';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule, MatDialogModule],
  standalone:true,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  constructor(public dialogRef: MatDialogRef<CustomerFormComponent>,
    private customerService:CustomerService ,
    @Inject(MAT_DIALOG_DATA) public data: customer | null
  ) {
    if (data) {
      this.customer = { ...data }; // Pre-fill form if editing
    } 
  }
  customer: customer = {
    id: 0,
    name: '',
    email: '',
    password: ''
  };

  closeDialog(): void {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm():void{
this.customerService.createCustomer(this.customer).subscribe(()=>{
  this.dialogRef.close(true);
})
  }
}
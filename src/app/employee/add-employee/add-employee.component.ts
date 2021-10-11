import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form!: FormGroup;
  data: any;
  submitted = false;
  employees: any;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder,
    private toastr: ToastrService, private router: Router) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],

    });
  }
  ngOnInit(): void {
    this.createForm();

  }


  get f() {
    return this.form.controls;
  }
  insertData() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.employeeService.insertData(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message)
        , {
          timeOut: 1000,
          progressBar: true
        });
      this.router.navigateByUrl('/')
    });
  }
}

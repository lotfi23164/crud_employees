import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/model/employee';


import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();


  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder,
    private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  form = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
  });
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getData();

  }

  getData() {
    this.employeeService.getDataById(this.id).subscribe(res => {
      // this.employee._id = res._id;
      this.data = res;
      this.form = new FormGroup({
        name: new FormControl(this.data.name),
        email: new FormControl(this.data.email),
        salary: new FormControl(this.data.salary),
      });
    });
  }
  updateData() {
    this.employeeService.updateData(this.form.value, this.id).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000,
        progressBar: true
      })
    });
    this.router.navigateByUrl('/');
  }

}

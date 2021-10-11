import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';



const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

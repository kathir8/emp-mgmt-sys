import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LinkedList } from './linked-list';
import { addEmp } from './state/emp.action';
import { Store } from '@ngrx/store'
import { getEmp } from './state/emp.selector';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  empId:number = 100
  empList: any;
  empObject$!: Observable<any>

  constructor(private store: Store<{ employee: any }>) {}

  formSubmit(myForm: NgForm): void {
    console.log(myForm.form.value);
    if (myForm.form.valid) {
      let empObj = myForm.form.value
      empObj['empId'] = ++this.empId
      this.store.dispatch(addEmp({ empObj }))
      this.empObject$ = this.store.select(getEmp)
      this.empObject$.subscribe(val => console.log(val))
      myForm.resetForm()
    }
  }

  numberOnly(event: KeyboardEvent) {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) event.preventDefault();
  }


}

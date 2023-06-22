import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addEmp } from './state/emp.action';
import { Store } from '@ngrx/store'
import { getEmp } from './state/emp.selector';
import { Observable } from 'rxjs'
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private gridEvent!: GridReadyEvent;

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', flex: 1,sortable: true  },
    { headerName: 'Age',field:'age', flex: 1,sortable: true  },
    { headerName: 'Position', field: 'position', flex: 1 },
    { headerName: 'Salary', field: 'salary', flex: 1,sortable: true  },
    {
      headerName: 'Action', width: 100, cellRenderer: (params: any) => `<i class="fa fa-pencil" (click)="updateEmployee('edit',${params.empId})"></i>
      <i class="fa fa-trash-o ms-1" (click)="updateEmployee('delete',${params.empId})"></i>` },
  ];

 
  onGridReady(params: GridReadyEvent) {
    this.gridEvent = params
    this.gridEvent.api.setRowData([])
  }

  loadingTemplate: any = `Loading ...<i class="fas fa-sync me-1"></i>`
  overlayNoRowsTemplate: any = `<span>No Data Found</span>`

  empId:number = 100
  empList: any;
  empObject$!: Observable<any>

  constructor(private store: Store<{ employee: any }>) {}

  formSubmit(myForm: NgForm): void {
    console.log(myForm.form.value);
    if (myForm.form.valid) {
      const empObj = myForm.form.value
      empObj['age'] = Number(empObj['age'])
      empObj['salary'] = Number(empObj['salary'])
      empObj['empId'] = ++this.empId
      this.store.dispatch(addEmp({ empObj }))
      this.empObject$ = this.store.select(getEmp)
      this.empObject$.subscribe(val => this.gridEvent.api.setRowData(val))
      myForm.resetForm()
    }
  }

  numberOnly(event: KeyboardEvent) {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) event.preventDefault();
  }

  ngOnInit() {
    let empObj = {
      'empId': 101,
      'name': 'kathir',
      'age':24,
      'position': 'frontend',
      'salary': 12
    }
    this.store.dispatch(addEmp({ empObj }))
    empObj = {
      'empId': 102,
      'name': 'dummy',
      'age': 22,
      'position': 'backend',
      'salary': 2
    }
    this.store.dispatch(addEmp({ empObj }))
    this.empObject$ = this.store.select(getEmp)
    setTimeout(() => {
      this.empObject$.subscribe(val => this.gridEvent.api.setRowData(val))
    },1 );
  }

  updateEmployee(type: string, id: any) {
    console.log("type");
    console.log(type);
    
    if (type === 'edit') {
      console.log("edit");
      
    }
  }
}

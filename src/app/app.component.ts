import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formSubmit(myForm: NgForm): void {
    const detail = myForm.form.value
    console.log(detail);

    if (myForm.form.valid) {

    }
  }

  numberOnly(event: KeyboardEvent) {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) event.preventDefault();
  }


}

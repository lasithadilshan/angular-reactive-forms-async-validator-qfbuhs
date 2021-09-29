import { Component } from '@angular/core';
import { 
  FormBuilder, FormControl, FormGroup, Validators 
} from '@angular/forms';
import { UserValidators } from './validators/user.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserValidators
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [
        // initial value
        null,
        // sync built-in validators
        Validators.compose(
          [ Validators.required, Validators.minLength(3) ],
        ),
        // custom async validator
        this.service.userValidator()
      ],
    });
  }

  save() {
    console.log('save to db');
  }
}

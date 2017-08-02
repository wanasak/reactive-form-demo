import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.css']
})
export class FormBuilderDemoComponent {
  form: FormGroup;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

}

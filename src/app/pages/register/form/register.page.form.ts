import { FormBuilder, FormGroup } from '@angular/forms';

export class RegisterPageForm {
  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      repeatPassword: [''],
      phone: [''],
      address: this.formBuilder.group({
        street: [''],
        number: [''],
        neighborhood: [''],
        complement: [''],
        zipcode: [''],
        state: [''],
        city: ['']
      })
    });
  }

  getForm(): FormGroup {
    return this.form;
  }
}

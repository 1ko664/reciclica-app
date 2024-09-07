import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPageForm } from './register.page.form';

describe('RegisterPageForm', () => {
  let registerPageForm: RegisterPageForm;
  let form: FormGroup;

  beforeEach(() => {
    registerPageForm = new RegisterPageForm(new FormBuilder());
    form = registerPageForm.getForm();
  });
});

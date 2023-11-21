import { FormControl } from '@angular/forms';

export function dataNotValid(control: FormControl) {
  if (control.value !== null) {
    const dateArray = control.value.split('-');
    if (!(new Date(dateArray.join('-')) < new Date())) {
      return {
        dataNotValid: {
          value: true,
          message: 'The date is invalid'
        }
      };
    }
  }

  return null;
}

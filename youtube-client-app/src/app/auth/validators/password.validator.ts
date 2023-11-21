/* eslint-disable @typescript-eslint/quotes */
import { FormControl } from '@angular/forms';

import { MAX_PASS_LENGTH } from '../constants/constants';

export function passwordNotStrength(control: FormControl) {
  if (control.value !== null && control.value !== '') {
    if (control.value.length < MAX_PASS_LENGTH) {
      return {
        passwordNotStrength: {
          value: true,
          message:
            "Your password isn't strong enough: must be at least 8 characters long"
        }
      };
    }
    if (!control.value.match(/[A-Z]/)) {
      return {
        passwordNotStrength: {
          value: true,
          message:
            "Your password isn't strong enough: must contain at least one capital letter"
        }
      };
    }
    if (!control.value.match(/[a-z]/)) {
      return {
        passwordNotStrength: {
          value: true,
          message:
            "Your password isn't strong enough: must contain at least one capital letter"
        }
      };
    }
    if (!control.value.match(/\d/)) {
      return {
        passwordNotStrength: {
          value: true,
          message:
            "Your password isn't strong enough: must contain at least one number"
        }
      };
    }
    if (!control.value.match(/[[!@#$&*"'./|/\\+^`~_=]/)) {
      return {
        passwordNotStrength: {
          value: true,
          message:
            "Your password isn't strong enough: must contain at least one special character"
        }
      };
    }
  }
  return null;
}

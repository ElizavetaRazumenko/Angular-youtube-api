import { FormControl } from '@angular/forms';

import { passwordNotStrength } from './password.validator';

describe('passwordNotStrength Validator', () => {
  it('should return null for a strong password', () => {
    const control = new FormControl('StrongPass123!');

    const result = passwordNotStrength(control);

    expect(result).toBeNull();
  });

  it('should return an error if password is too short', () => {
    const control = new FormControl('Short');

    const result = passwordNotStrength(control);

    expect(result).toEqual({
      passwordNotStrength: {
        value: true,
        message:
          'Password is not strong enough: must be at least 8 characters long'
      }
    });
  });

  it('should return an error if password lacks a capital letter', () => {
    const control = new FormControl('nocapital');

    const result = passwordNotStrength(control);

    expect(result).toEqual({
      passwordNotStrength: {
        value: true,
        message:
          'Password is not strong enough: must contain at least one capital letter'
      }
    });
  });

  it('should return an error if password lacks a special character', () => {
    const control = new FormControl('NoSpecialCharacter123');

    const result = passwordNotStrength(control);

    expect(result).toEqual({
      passwordNotStrength: {
        value: true,
        message:
          'Password is not strong enough: must contain at least one special character'
      }
    });
  });

  it('should return an error if password lacks a number', () => {
    const control = new FormControl('NoNumberSpecialChar!');

    const result = passwordNotStrength(control);

    expect(result).toEqual({
      passwordNotStrength: {
        value: true,
        message:
          'Password is not strong enough: must contain at least one number'
      }
    });
  });

  it('should return combined errors for multiple deficiencies', () => {
    const control = new FormControl('Weakpass');

    const result = passwordNotStrength(control);

    expect(result).toEqual({
      passwordNotStrength: {
        value: true,
        message:
          'Password is not strong enough: must contain at least one number'
      }
    });
  });
});

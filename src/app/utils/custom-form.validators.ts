import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function PasswordComplexityValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valid =
    /([A-Z]){2,}/.test(control.value) &&
    /([a-z]){2,}/.test(control.value) &&
    /([$!#@%]){2,}/.test(control.value) &&
    /([0-9]){2,}/.test(control.value);

  return valid ? null : { complexity: true };
}

export function PasswordMatchValidator(
  controlKey: string,
  matchingControlKey: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const value = group.get(controlKey)?.value;
    const matchingValue = group.get(matchingControlKey)?.value;

    return !value || !matchingValue || value === matchingValue
      ? null
      : { matching: true };
  };
}

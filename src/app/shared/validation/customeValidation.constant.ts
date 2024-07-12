import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


import validator from 'validator';

export function passwordValidation(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const passwordValid=validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols:0
        });;
        // const passwordValid='/^[a-zA-Z0-9]';

        return !passwordValid ? {passwordValidation:true}: null;
    }
}



export function emailValidation(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const emailValid=validator.isEmail(value)


        return !emailValid ? {emailValidation:true}: null;
    }
}
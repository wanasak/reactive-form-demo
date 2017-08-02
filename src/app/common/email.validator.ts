import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
      if ((control.value as string).indexOf(' ') >= 0) {
          return { cannotContainSpace: true };
      }
      return null;
  }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // tslint:disable-next-line:curly
                if (control.value === 'admin@admin.com')
                    resolve({ shouldBeUnique: true });
                // tslint:disable-next-line:curly
                else
                    resolve(null);
            }, 2000);
        });
    }
}

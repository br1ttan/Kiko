import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAuthData, RegistrationService } from '@features/auth';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnDestroy {
  public subject$ = new Subject();

  @Output()
  public onToggleMenuButtonClick = new EventEmitter<Event>();

  public get isFormValid(): boolean {
    return !!this.form.invalid;
  }

  public get requiredErrorMessage(): string {
    return 'Ви повинні щось внести';
  }

  public get emailErrorMessage(): string {
    if (this.form.get('email')?.hasError('email')) {
      return 'Введіть правильний емейл';
    }

    return this.requiredErrorMessage;
  }
  
  public get passwordErrorMessage(): string {
    if (this.form.get('password')?.hasError('minlength')) {
      return 'Ваш пароль маленький';
    }
  
    return this.requiredErrorMessage;
  }

  public get iconPasswordVisibility(): string {
    return this.isPasswordIconHide ? 'visibility_off' : 'visibility';
  }

  public get inputType(): string {
    return this.isPasswordIconHide ? 'password' : 'text';
  }

  public get fullName(): string {
    return `${this.form.get('name')!.value!} ${this.form.get('surname')!.value!}`; 
  }

  public isPasswordIconHide = true;

  public form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    surname: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  constructor(
    private readonly registrationService: RegistrationService
  ) {}

  public ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.complete();
  }
  
  public onFormSubmit(): void {
    let authData: IUserAuthData = {
      email: this.form.get('email')!.value!,
      password: this.form.get('password')!.value!,
      displayName: this.fullName
    }
    
    this.registrationService.register(authData)
      .pipe(
        takeUntil(this.subject$)
      )
      .subscribe((res) => {
        console.log(res);
        
        this.form.reset();
      })
  }

  public onToggleHideButtonClick(): void {
    this.isPasswordIconHide = !this.isPasswordIconHide;
  }

  public isControlInvalid(controlName: string): boolean {
    return !!this.form.get(controlName)?.invalid;
  }
}

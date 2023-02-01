import { Component, EventEmitter, Output, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '@features/auth';
import { timer, mergeMap, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  @Output()
  public onToggleMenuButtonClick = new EventEmitter<Event>();

  public get isFormValid(): boolean {
    return !!this.form.invalid;
  }

  public get emailErrorMessage(): string {
    if (this.form.get('email')?.hasError('required')) {
      return 'Ви повинні щось внести';
    }

    return this.requiredErrorMessage;
  }

  public get requiredErrorMessage(): string {
    return 'Ви повинні щось внести';
  }

  public get iconPasswordVisibility(): string {
    return this.isPasswordIconHide ? 'visibility_off' : 'visibility';
  }

  public get inputType(): string {
    return this.isPasswordIconHide ? 'password' : 'text';
  }

  public form = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  public isPasswordIconHide = true;
  public isLoginError = false;

  public subject$ = new Subject();

  constructor(
    private readonly loginService: LoginService,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly dialog: MatDialog
  ) {}

  public ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.complete();
  }

  public onToggleHideButtonClick(): void {
    this.isPasswordIconHide = !this.isPasswordIconHide;
  }

  public isControlInvalid(controlName: string): boolean {
    return !!this.form.get(controlName)?.invalid;
  }

  public onFormSubmit() {
    if (this.form.invalid) return;
    
    
    let authData = {
      email: this.form.get('email')!.value!,
      password: this.form.get('password')!.value!,
    }
    
    return timer(2000)
    .pipe(
      mergeMap(() => this.loginService.login(authData)),
      )
      .subscribe({
        next: (res) => {
          this.dialog.closeAll();          
          this.isLoginError = false;
          this.form.reset();
          this.changeDetector.markForCheck();
        },
        error: (err) => {
          console.log(err, 'erorrroorrror')
          this.isLoginError = true;

          this.changeDetector.markForCheck();
        }
      })
  }
}

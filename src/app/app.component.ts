import { Component, OnInit } from '@angular/core';
import { AuthService } from '@features/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
  ) {}

  public ngOnInit(): void {
    this.authService.autoLogin();
  }
}

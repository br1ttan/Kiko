import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  constructor(
    private readonly router: Router
  ) {}

  public onFormSubmit(input: HTMLInputElement): void {
    if (input.value === '') return;

    this.router.navigateByUrl(`/search/${input.value}`);
    input.value = '';
  }
}

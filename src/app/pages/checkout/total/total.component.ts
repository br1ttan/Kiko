import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalComponent {
  @Input()
  public count: number | null = 0;
}

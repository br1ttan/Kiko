import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '@features';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input()
  public data?: IProduct;

  public get rate() {
    return this.data?.rating.rate;
  }
  
  public rateCount: number[] = [];

  public ngOnInit(): void {
    this.initCountRate();
  }

  public initCountRate(): void {
    for (let i = 0; i < Math.round(this.rate!); i++) {
      this.rateCount.push(i);
    }
  }
}

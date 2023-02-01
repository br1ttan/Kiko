import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyConversionToUAH'
})
export class CurrencyConversionToUAH implements PipeTransform {
    private readonly usd = 36.92;

    public transform(value: string | number): string {
        return `${value} ₴`; 
    }
}

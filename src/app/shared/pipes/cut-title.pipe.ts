import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cutTitle'
})
export class CutTitle implements PipeTransform {
    public transform(value: string) {
        return `${value.slice(0, 30)}...`;
    }
}

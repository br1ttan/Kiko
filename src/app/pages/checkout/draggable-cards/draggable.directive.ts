import { Directive, ElementRef, OnInit, HostListener, HostBinding, AfterViewInit } from '@angular/core';
import { CheckoutComponent } from '../checkout.component';

@Directive({
    selector: '[draggableDirective]',
    host: {class: 'selected'}
})
export class DraggableDirective {
    
    constructor(
        private readonly hostRef: ElementRef
    ) {}

    private toggleSelect(): void {
        this.selected = !this.selected;
    }
    
    @HostBinding('class.selected')
    private selected = false;

    @HostListener('dragstart')
    private onDragStart(): void {
        this.toggleSelect();
    }

    @HostListener('dragend')
    private onDragEnd(): void {
        this.toggleSelect();
    }
}

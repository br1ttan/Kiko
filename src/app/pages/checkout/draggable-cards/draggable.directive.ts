import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[draggableDirective]',
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

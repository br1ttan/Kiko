import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IProduct } from '@features';

@Component({
  selector: 'draggable-cards',
  templateUrl: './draggable-cards.component.html',
  styleUrls: ['./draggable-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraggableCardsComponent implements AfterViewInit {
  @ViewChild('cardParent')
  public cardParent!: ElementRef<HTMLDivElement>;

  private childList!: Element[];
  
  @Input()
  public data!: IProduct[];

  public ngAfterViewInit(): void {
    this.initChildList();
  }
  
  private initChildList(): void {
    const childList = Array.from(this.cardParent.nativeElement.children) as HTMLDivElement[];

    this.childList = childList;
  }

  private onMoveElements(event: MouseEvent): void {
    const activeElement = this.childList.filter((elem) => (
      elem.classList.contains('selected')
    ))[0] as Element;
    
    const currentElement = event.target as Element;
    const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains('card');

    if (!isMoveable) return;
    const nextElement = this.getNextElement((event.clientY), currentElement);

    if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
    ) return;

      this.cardParent.nativeElement.insertBefore(activeElement, nextElement);
  }

  public getNextElement(cursorPosition: number, currentElement: Element) {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    
    const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
    
    return nextElement;
  };

  public onDragOver(event: MouseEvent): void{
    event.preventDefault();
    this.onMoveElements(event);
  }
}

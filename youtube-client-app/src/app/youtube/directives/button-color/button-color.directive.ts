import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appButtonColor]'
})
export class ButtonColorDirective implements OnChanges {
  @Input() publishAt = '';

  constructor(
    private elRef: ElementRef,
    private render2: Renderer2
  ) {
    this.render2.setStyle(this.elRef.nativeElement, 'background-color', '');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['publishAt']) {
      this.setBorderColor();
    }
  }

  private setBorderColor(): void {
    const previousDate = new Date(this.publishAt);
    const daysDifference = Math.ceil(
      Math.abs(Date.now() - previousDate.getTime()) / (1000 * 3600 * 24)
    );
    if (daysDifference < 7) {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'blue'
      );
    } else if (daysDifference < 30) {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'green'
      );
    } else if (daysDifference < 180) {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'yellow'
      );
    } else {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'red'
      );
    }
  }
}

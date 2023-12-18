import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';

import {
  DAYS_PER_WEEK,
  MAX_DAYS_BORDER,
  MIN_DAYS_BORDER,
  SECONDS_PER_DAY
} from '../../constants/constants';

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
      Math.abs(Date.now() - previousDate.getTime()) / SECONDS_PER_DAY
    );
    if (daysDifference < DAYS_PER_WEEK) {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'blue'
      );
    } else if (daysDifference < MIN_DAYS_BORDER) {
      this.render2.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'green'
      );
    } else if (daysDifference < MAX_DAYS_BORDER) {
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

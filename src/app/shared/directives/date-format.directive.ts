import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[dateFormat]',
  standalone: true,
})
export class DateFormatDirective {
  constructor(private element: ElementRef, private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const formattedValue = this.format(value);
    this.element.nativeElement.value = formattedValue.formattedValue;
    if (!formattedValue.hasDate) return;
    this.ngControl.control?.setValue(formattedValue.date, { emitEvent: false });
  }

  private format(value: string) {
    const numericValue = value.replace(/\D/g, '');

    const day = numericValue.slice(0, 2);
    const month = numericValue.slice(2, 4);
    const year = numericValue.slice(4, 8);
    let formattedValue = '';

    if (day) {
      formattedValue += day;
      if (day.length === 2) {
        formattedValue += '/';
      }
    }

    if (month) {
      formattedValue += month;
      if (month.length === 2) {
        formattedValue += '/';
      }
    }

    if (year) {
      formattedValue += year;
    }

    const date = new Date(`${year}-${month}-${+day + 1}`);
    const hasDate = formattedValue.length === 10;

    return { formattedValue, date, hasDate };
  }
}

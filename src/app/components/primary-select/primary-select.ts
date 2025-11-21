import { Component, forwardRef, input, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-primary-select',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimarySelect),
      multi: true,
    },
  ],
  templateUrl: './primary-select.html',
  styleUrl: './primary-select.scss',
})
export class PrimarySelect implements ControlValueAccessor{

  @Input() label : string = "";
  @Input() options: string[] = [];
  @Input() inputName: string = "";

  value = "";
  onChange = (value: any) => {};
  onTouched = () => {};

  onSelect(event: Event){
    const value = (event.target as HTMLSelectElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

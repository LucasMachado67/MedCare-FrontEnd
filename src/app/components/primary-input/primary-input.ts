import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type InputTypes = "text" | "email" | "password" | "Date"

@Component({
  selector: 'app-primary-input',
  imports: [
     ReactiveFormsModule,
     CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInput),
      multi: true
    }
  ],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.scss',
})
export class PrimaryInput implements ControlValueAccessor{

  @Input() type: InputTypes = "text";
  @Input() placeHolder: string = "";
  @Input() label: string = "";  
  @Input() inputName: string = ""; 
  @Input() mask?: 'phone' | 'zipCode';
  @Input() maxLength?: number;
  @Input() onlyNumbers?: boolean = false;

  value:string =""
  onChange: any = () =>{}
  onTouched: any = () =>{}

  onInput(event: Event){
    let value = (event.target as HTMLInputElement).value
    if (this.mask === 'phone') {
      value = this.formatPhone(value);
    }
    if(this.mask === 'zipCode'){
      value = this.formatZipCode(value);
    }

    if (this.onlyNumbers) {
      value = value.replace(/\D/g, '');
      (event.target as HTMLInputElement).value = value;
    }

    this.onChange(value)
  }

  writeValue(value: any): void {

    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  private formatPhone(value: string): string {
    value = value.replace(/\D/g, ''); // remove tudo que não é número

    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

    if (value.length > 6) {
      return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    } else if (value.length > 2) {
      return `(${value.substring(0, 2)}) ${value.substring(2)}`;
    } else {
      return value;
    }
  }

  private formatZipCode(value: string): string {
    value = value.replace(/\D/g, ''); // remove tudo que não é número
    if (value.length > 8) value = value.slice(0, 8); // limita a 8 dígitos

    if (value.length > 5) {
      return `${value.substring(0, 5)}-${value.substring(5)}`;
    }
    return value;
  }

  setDisabledState(isDisabled: boolean): void {}
}

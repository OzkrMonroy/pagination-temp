import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  InputAutoComplete,
  InputColors,
  InputRules,
  InputType,
} from 'src/app/types/input';
import { StringUtils } from 'src/app/utils/stringutils/string-utils';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() label: string = 'Default label';
  @Input() id: string = 'default-id';
  @Input() name: string = 'default-name';
  @Input() length: string = '50';
  @Input() rule: InputRules = 'inherit';

  @Input() required: boolean = false;
  @Input() color: InputColors = 'primary';

  @Input() type: InputType = 'text';
  @Input() containerClasses: string = '';
  @Input() isInvalidAmount: boolean = false;
  @Input() autoComplete: InputAutoComplete = 'off';
  @Input() inputInformation!: string;
  @Input() multiple: number | undefined;

  @Input() defaultFilled: boolean = false;
  @Input() tabIndex = 1;
  @Input() customClassSelect = '';
  @Input() selectContent: boolean = false;

  @Output() enter: EventEmitter<any> = new EventEmitter();
  @Output() changeSelect: EventEmitter<any> = new EventEmitter();
  @Output() tabEvent: EventEmitter<string> = new EventEmitter();
  @Output() focusInput: EventEmitter<any> = new EventEmitter();

  @ViewChild('inputRef') inputElement!: ElementRef;

  displayDate: boolean = false;
  localForm: FormGroup = this.formBuilder.group({
    initialDate: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  focusable() {
    this.focusInput.emit();
  }

  eventKeyboard(): void {
    this.enter.emit();
  }

  handleTabEvent(): void {
    this.tabEvent.emit();
  }

  mustFloat() {
    return this.form.get(this.name)!.value !== '';
  }

  getInputColor() {
    if (this.form.get(this.name)!.errors && this.form.get(this.name)!.touched) {
      return 'error';
    }
    if (this.isInvalidAmount) {
      return 'error';
    }
    return this.color;
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  onDateSelected(value: Date): void {
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const formattedMonth = StringUtils.padTo2Digits(month);
    const finalDate = `${day}${formattedMonth}${year}`;
    const formattedDate = StringUtils.formatDate(finalDate, true);
    console.log({ day, formattedMonth, year, formattedDate });
    this.form.get(this.name)?.patchValue(finalDate);
    this.displayDateComponent();
  }
  displayDateComponent(): void {
    this.displayDate = !this.displayDate;
  }
}

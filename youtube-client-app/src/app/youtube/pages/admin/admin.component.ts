/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isSecondTag = false;
  public isThirdTag = false;
  public isFourthTag = false;
  public isFifthTag = false;
  public tagErrorMessage = '';
  public tagsArray: string[] = [''];
  public dateErrorMessage = '';
  public adminForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl<string | null>;
    tag1: FormControl<string | null>;
    tag2: FormControl<string | null>;
    tag3: FormControl<string | null>;
    tag4: FormControl<string | null>;
    tag5: FormControl<string | null>;
  }>;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.adminForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      description: ['', [Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      link: ['', [Validators.required]],
      date: ['', [Validators.required]],
      tag1: ['', [Validators.required]],
      tag2: this.isSecondTag ? ['', [Validators.required]] : [''],
      tag3: this.isThirdTag ? ['', [Validators.required]] : [''],
      tag4: this.isFourthTag ? ['', [Validators.required]] : [''],
      tag5: this.isFifthTag ? ['', [Validators.required]] : ['']
    });
  }

  public checkDate() {
    this.dateErrorMessage = '';
    const date = this.adminForm.value.date!;
    const dateArray = date?.split('.');
    if (date) {
      if (!/\d./.test(date)) {
        this.dateErrorMessage = 'Date must not contain letters';
      } else if (dateArray.length !== 3) {
        this.dateErrorMessage = 'Enter the date in the specified format';
      } else if (!(new Date(dateArray.reverse().join('-')) < new Date())) {
        this.dateErrorMessage = 'The date is invalid';
      }
    }
  }

  public clearErroMessage() {
    this.tagErrorMessage = '';
  }

  public addNewTag() {
    if (this.tagsArray.length > 4) {
      this.tagErrorMessage = 'You cannot create more than five tags';
    } else if (!this.isSecondTag) {
      this.isSecondTag = true;
      this.tagsArray.push('');
    } else if (!this.isThirdTag) {
      this.isThirdTag = true;
      this.tagsArray.push('');
    } else if (!this.isFourthTag) {
      this.isFourthTag = true;
      this.tagsArray.push('');
    } else if (!this.isFifthTag) {
      this.isFifthTag = true;
      this.tagsArray.push('');
    }
  }

  public resetSettings() {
    this.isSecondTag = false;
    this.isThirdTag = false;
    this.isFourthTag = false;
    this.isFifthTag = false;
    this.tagErrorMessage = '';
    this.adminForm.controls.title.setValue('');
    this.adminForm.controls.description.setValue('');
    this.adminForm.controls.img.setValue('');
    this.adminForm.controls.date.setValue('');
    this.adminForm.controls.tag1.setValue('');
    this.adminForm.controls.tag2.setValue('');
    this.adminForm.controls.tag3.setValue('');
    this.adminForm.controls.tag4.setValue('');
    this.adminForm.controls.tag5.setValue('');
  }
}

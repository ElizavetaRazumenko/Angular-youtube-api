/* eslint-disable class-methods-use-this */
/* eslint-disable @ngrx/use-consistent-global-store-name */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { adminAddCardAction } from 'src/app/redux/actions/admin.actions';
import { AdminCard } from 'src/app/redux/models/admin.models';
import { selectAdminCard } from 'src/app/redux/selectors/admin.selectors';

import { dataNotValid } from '../../validators/data.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  card$: Observable<AdminCard[]> = this.store.select(selectAdminCard);

  public adminForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    img: FormControl<string | null>;
    link: FormControl<string | null>;
    date: FormControl;
    tags: FormArray;
  }>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.adminForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      description: ['', [Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      link: ['', [Validators.required]],
      date: ['', [Validators.required, dataNotValid]],
      tags: this.fb.array([this.createTagArrayForm()])
    });
  }

  get tags() {
    return this.adminForm.get('tags') as FormArray;
  }

  addNewTag() {
    if (this.tags.length < 5 && this.tags.status === 'VALID') {
      this.tags.push(this.createTagArrayForm());
    }
  }
  public createTagArrayForm(): FormGroup {
    return this.fb.group({
      tag: ['', Validators.required]
    });
  }

  public resetSettings() {
    this.adminForm.reset();
    this.adminForm.setControl(
      'tags',
      this.fb.array([this.createTagArrayForm()])
    );
  }
  public submitForm() {
    if (!this.adminForm.invalid) {
      this.store.dispatch(
        adminAddCardAction({
          title: this.adminForm.value.title || '',
          description: this.adminForm.value.description || '',
          img: this.adminForm.value.img || '',
          link: this.adminForm.value.link || '',
          date: this.adminForm.value.date || '',
          tags: this.formatTagsToArray(this.adminForm.value.tags)
        })
      );
    }
    this.router.navigate(['']);
  }

  private formatTagsToArray(tags: { tag: string }[]) {
    return tags.map((item) => item.tag);
  }
}

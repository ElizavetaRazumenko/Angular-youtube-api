import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { nameNotValid } from '../../validators/name.validator';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  public TESTGroupsItems = [
    {
      name: 'Group 1',
      isCustom: false
    },
    {
      name: 'Group 2',
      isCustom: false
    },
    {
      name: 'Group 3',
      isCustom: true
    },
    {
      name: 'Group 4',
      isCustom: true
    }
  ];
  public isFormMode = false;
  public createGroupForm!: FormGroup<{
    name: FormControl;
  }>;

  constructor(
    private readonly store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createGroupForm = this.fb.group({
      name: ['', [Validators.required, nameNotValid, Validators.maxLength(30)]]
    });
  }

  public toggleTheFormMode() {
    this.isFormMode = !this.isFormMode;
    this.createGroupForm.setValue({ name: '' });
  }

  public get name() {
    return this.createGroupForm.get('name') as FormControl<string | null>;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginNotValid } from 'src/app/auth/validators/login.validator';
import {
  profileSendUserDataAction,
  profileSetNameAction
} from 'src/app/redux/actions/profile.action';
import { ProfileData } from 'src/app/redux/models/profile.model';
import {
  selectProfileData,
  selectProfileError
} from 'src/app/redux/selectors/profile.selector';
import { ApplicationService } from '../../services/application.service';

interface InfoNotify {
  message: string;
  isSuccess: boolean;
  id: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentName = '';
  public profileData$: Observable<ProfileData> =
    this.store.select(selectProfileData);

  private errorMessage$ = this.store.select(selectProfileError);

  private profileResponseData$ = this.applicationService.profileResponseData$;

  public notifyArray: InfoNotify[] = [];
  public isOnEditionMode = false;
  public isRequestCanBeSent = true;

  public editionalForm!: FormGroup<{
    name: FormControl;
  }>;

  constructor(
    private readonly store: Store,
    private fb: FormBuilder,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.profileData$.subscribe((data) => {
      if (!data.isDataBeenReceived) {
        this.store.dispatch(profileSendUserDataAction());
      }
      if (data.name !== '') {
        this.editionalForm.setValue({ name: data.name });
        this.currentName = data.name;
      }
    });

    this.errorMessage$.subscribe((message) => {
      if (message) this.sendNotifyErrorOnload(message);
    });

    this.editionalForm = this.fb.group({
      name: ['', [Validators.required, loginNotValid, Validators.maxLength(40)]]
    });
  }

  public onFormSubmit() {
    if (!this.editionalForm.invalid || this.isRequestCanBeSent) {
      this.isRequestCanBeSent = false;
      this.applicationService.changeNameQueryParams(this.name.value || '');
      this.profileResponseData$.subscribe({
        next: () => {
          this.store.dispatch(
            profileSetNameAction({ name: this.name.value || '' })
          );

          this.notifyArray.push({
            message: 'The name has been successfully changed',
            isSuccess: true,
            id: window.crypto.randomUUID()
          });

          this.isOnEditionMode = false;
          this.isRequestCanBeSent = true;
        },
        error: (error) => {
          this.sendNotify(error.error.message as string);
          this.isOnEditionMode = false;
          this.isRequestCanBeSent = true;
        }
      });
    }
  }

  public get name() {
    return this.editionalForm.get('name') as FormControl<string | null>;
  }

  private sendNotify(message: string) {
    if (message.endsWith('passed identificators.')) {
      this.notifyArray.push({
        message: 'Unsuccessful! User is not found',
        isSuccess: false,
        id: window.crypto.randomUUID()
      });
    } else if (message.endsWith('field.')) {
      this.notifyArray.push({
        message: 'Unsuccessful! Please fill in the name field',
        isSuccess: false,
        id: window.crypto.randomUUID()
      });
    } else {
      this.notifyArray.push({
        message: 'Something went wrong, please try again',
        isSuccess: false,
        id: window.crypto.randomUUID()
      });
    }
  }

  private sendNotifyErrorOnload(message: string) {
    if (message.endsWith('not found')) {
      this.notifyArray.push({
        message: 'Unsuccessful! This user does not exist',
        isSuccess: false,
        id: window.crypto.randomUUID()
      });
    } else {
      this.notifyArray.push({
        message: 'Something went wrong, please try again',
        isSuccess: false,
        id: window.crypto.randomUUID()
      });
    }
  }

  public deleteNotify(id: string) {
    this.notifyArray = this.notifyArray.filter((notify) => notify.id !== id);
  }

  public toTheEditionMode() {
    this.isOnEditionMode = true;
    this.editionalForm.setValue({ name: this.currentName });
  }

  public toTheNormalMode() {
    this.isOnEditionMode = false;
  }
}

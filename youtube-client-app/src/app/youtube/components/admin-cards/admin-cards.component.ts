import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { adminRemoveCardAction } from 'src/app/redux/actions/admin.actions';
import { AdminCard } from 'src/app/redux/models/admin.models';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent implements OnInit {
  @Input() public cardInfo!: AdminCard;
  public id!: string;
  public link!: string;
  public date = new Date();

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.cardInfo.id;
    this.link = `details/user-card/${this.id}`;
  }

  public deleteCard(id: string) {
    this.store.dispatch(
      adminRemoveCardAction({
        id
      })
    );
  }

  public toDetails() {
    this.router.navigate([this.link]);
  }
}

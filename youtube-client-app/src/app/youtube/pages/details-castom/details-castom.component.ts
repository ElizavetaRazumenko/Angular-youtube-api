import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { AdminCard } from 'src/app/redux/models/admin.models';
import { selectAdminCard } from 'src/app/redux/selectors/admin.selectors';

@Component({
  selector: 'app-details-castom',
  templateUrl: './details-castom.component.html',
  styleUrls: ['./details-castom.component.scss']
})
export class DetailsCastomComponent implements OnInit {
  public isAuntUser$ = this.loginService.isAuntUser$;
  public isAuntUser!: boolean;
  public currentId = '';
  public currentCard!: AdminCard | undefined;
  public cards$: Observable<AdminCard[]> = this.store.select(selectAdminCard);

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    public router: Router,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });

    if (!this.isAuntUser) this.router.navigate(['/login']);
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
    });

    this.cards$.subscribe((cards) => {
      this.currentCard = cards.find((card) => card.id === this.currentId);
    });
  }
}

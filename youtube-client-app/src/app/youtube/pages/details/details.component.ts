import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import Item from 'src/app/search-responce/search-item.model';
import { HttpVideoService } from 'src/app/youtube/services/http/http-video.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public isAuntUser$ = this.loginService.isAuntUser$;
  public isAuntUser!: boolean;
  public currentId = '';
  public currentItem!: Item;

  constructor(
    private httpVideoServise: HttpVideoService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    public router: Router
  ) {}

  ngOnInit() {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
    if (!this.isAuntUser) this.router.navigate(['/login']);
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.httpVideoServise.getItemById(this.currentId).subscribe({
      next: ([item]) => {
        if (item) {
          this.currentItem = item;
        }
      }
    });
  }
}

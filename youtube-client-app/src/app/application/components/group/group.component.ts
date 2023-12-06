import { Component, Input } from '@angular/core';

interface GroupList {
  name: string;
  isCustom: boolean;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  @Input() public groupList!: GroupList;
}

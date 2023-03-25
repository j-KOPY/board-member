import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from 'src/app/fetch.service';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  members$!: Observable<any>;
  toggleMembers: any = {};
  show!: boolean;

  constructor(private fetchService: FetchService) {};


  ngOnInit() {
    this.members$ = this.fetchService.getMembers();
    console.log(this.members$);
  }

  toggleShow(event?: any) {
    this.show = !this.show;
    console.log("show is: " + this.show);
    console.log(this.toggleMembers);
    return this.show;
  }
}

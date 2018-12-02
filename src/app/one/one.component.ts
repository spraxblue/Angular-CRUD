import { Component, OnInit } from '@angular/core';
import { SwapService } from '../shared/swap.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user: string;
  editUser: string;
  constructor(private swapService: SwapService) { }

  ngOnInit() {
    this.swapService.cast.subscribe(user => this.user = user);
  }
  editTheUser() {
              this.swapService.editUser(this.editUser);
  }
}

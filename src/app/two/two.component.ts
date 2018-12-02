import { Component, OnInit } from '@angular/core';
import { SwapService } from '../shared/swap.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user: string;
  editUser: string;
  constructor(private swapService: SwapService) { }

  ngOnInit() {
    this.swapService.cast.subscribe(user => this.user = user);
  }

}

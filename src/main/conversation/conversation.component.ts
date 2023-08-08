import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  standalone:true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
  
})
export class ConversationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
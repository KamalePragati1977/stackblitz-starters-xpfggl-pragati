import { Component, OnInit } from '@angular/core';
import { ConHeaderComponent } from './con-header/con-header.component';
import { FooterComponent } from './footer/footer.component';
import { MsgWindowComponent } from './msg-window/msg-window.component';

@Component({
  standalone:true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports:[ConHeaderComponent,MsgWindowComponent,FooterComponent]
})
export class ConversationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
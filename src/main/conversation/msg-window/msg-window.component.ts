import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  standalone:true,
  selector: 'app-msg-window',
  templateUrl: './msg-window.component.html',
  styleUrls: ['./msg-window.component.css'],
  imports:[MessageComponent]
})
export class MsgWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
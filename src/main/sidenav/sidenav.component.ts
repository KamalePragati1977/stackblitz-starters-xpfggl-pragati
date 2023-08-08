import { Component, OnInit } from '@angular/core';
import { ChatsComponent } from './chats/chats.component';
import { HeaderComponent } from './header/header.component';
import { SerachComponent } from './serach/serach.component';

@Component({
  standalone: true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [ChatsComponent, SerachComponent, HeaderComponent],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

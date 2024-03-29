import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() userProfile: string = '';
  @Input() userName: string = '';
  navList = ['Home', 'Tv Shows', 'News & Popular', 'My List'];

  constructor() {}

  ngOnInit(): void {}
}

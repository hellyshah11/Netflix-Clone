import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  profileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this._authService.signOut();
    sessionStorage.removeItem('loggedInUser');
  }
}

import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavComponent } from "../../shared/nav/nav.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-login',
  imports: [FooterComponent, NavComponent, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

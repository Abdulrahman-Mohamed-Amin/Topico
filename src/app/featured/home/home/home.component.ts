import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { NavComponent } from "../../../shared/nav/nav.component";
import { Section1Component } from '../section1/section1.component';
import { Section2Component } from "../section2/section2.component";
import { SliderComponent } from "../../../shared/slider/slider.component";
import { Banner2Component } from "../banner2/banner2.component";
import { Banner3Component } from '../banner3/banner3.component';
import { SuscribeComponent } from '../suscribe/suscribe.component';
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NavComponent, Section1Component, Section2Component, SliderComponent, Banner2Component, Banner3Component, SuscribeComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule , NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() login:boolean = true
  @Input() singIn:boolean = true
  check:boolean = true

  close(){
    this.check = true
  }
  open(){
    this.check =false
  }
}

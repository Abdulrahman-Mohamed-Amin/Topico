import { RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  recipes:any[] = []
  constructor(){}

  ngOnInit(): void {
    localStorage.setItem("auth" , "admin")
    
  }
  getEvent(e:any){
    console.log(e);
    
  }

}

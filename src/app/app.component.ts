import { 
  Component,
  OnInit,
 } from '@angular/core';

 import {
   MatCardModule
 } from '@angular/material/card';

 import {
   MatIconModule
 } from '@angular/material/icon';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'joshua-paup';

  constructor(){}
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}

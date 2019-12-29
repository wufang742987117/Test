import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-left-meun',
  templateUrl: './left-meun.component.html',
  styleUrls: ['./left-meun.component.css']
})
export class LeftMeunComponent implements OnInit {
  isActive = 4;
  constructor(private router:Router) { }
  
  ngOnInit() {
  }
  goChart () {
    this.router.navigate(['/chart']);
  }

}

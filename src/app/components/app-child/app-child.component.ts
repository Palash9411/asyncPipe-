import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  constructor() { }

  
  ngOnInit(){
    debugger
  }

  ngAfterContentChecked(): void {
    debugger
  }

  ngAfterViewChecked(): void {
    debugger
  }
  ngAfterViewInit(): void {
    debugger
  }
  ngAfterContentInit(): void {
    debugger
  }

}

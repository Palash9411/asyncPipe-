import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  title = 'aysn-pipe';
   

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

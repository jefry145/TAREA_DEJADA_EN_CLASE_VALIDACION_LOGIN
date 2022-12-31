import { NgIf } from '@angular/common';
import { Component, Directive, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  login_user ="angular123";
  login_pass =123;

  Usuario!:string;
  Password!:number;
  show:boolean= false;
analizandodatos(){
  if(this.Usuario === this.login_user && this.Password === this.login_pass){
    this.show= true;
  }else{
    this.show= false;
  }
}
borrardatos(){
  this.show= false;
}
}

import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
nombre="ewww";
esto="ahora";
vamos="como de que no";
hola="que onda";

un_objeto: Animal={

  nombre : 'pollo',
  peso : 6,
  extinto :false,
  
}
otroAnimal :Animal={
  nombre : 'cabra',
  peso : 34,
  extinto :false,
}
otromas :Animal={
nombre : 'rino',
  peso : 300,
  extinto :false,
}
  constructor() { }

  ngOnInit() {
  }

}

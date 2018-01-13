import { Component , OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
  

  heroes:Heroe[] = [];


  //Se dispara el constructor del servicio de heroes
  //se crea una propiedad privada
  constructor( private _heroesService: HeroesService){
    console.log('primero se ejecuta el constructor');
  }
  
  
  ngOnInit(){
    console.log('segundo se ejecuta el ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}

import { Component ,OnInit} from '@angular/core';
import { Hero } from '../common/hero';
import {HEROES} from '../common/hero-mock'

@Component({
    selector:'heros-app',
    templateUrl:'./heros.component.html',
    styleUrls:['./heros.component.scss']
})

export class HeroesComponent implements OnInit{
    public hari:String = "Hi Angular App";
 
      heroes = HEROES;
      selectedHero?: Hero;

    constructor() { 

    }
    
    ngOnInit(){
        
    }

};
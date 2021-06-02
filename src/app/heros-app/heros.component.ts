import { Component ,OnInit} from '@angular/core';

@Component({
    selector:'heros-app',
    templateUrl:'./heros.component.html',
    styleUrls:['./heros.component.scss']
})

export class HeroesComponent implements OnInit{
    public hari:String = "Hi Angular App";

    constructor() { 

    }
    
    ngOnInit(){
        
    }

};
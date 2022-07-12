import { animate, state, style, transition, trigger } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('photo', [
          state('ready', style({opacity: 1})),
          transition('void => ready', [
            style({opacity: 0, transform: 'translateY(-90px)'}),
            animate('1900ms 0s ease-in')
          ])
        ]),

        trigger('developer', [   
        state('ready',  style({opacity: 1})),
        transition('void => ready', [
            style({opacity: 0, transform: 'translateY(90px)'}),
            animate('3000ms 0s ease-in')
          ]),
      ]),

      trigger('socialmidia', [   
        state('ready',  style({opacity: 1})),
        transition('void => ready', [
            style({opacity: 0, transform: 'translateY(1px)'}),
            animate('3000ms 3s ease-in-out')
          ]),
      ]),

      trigger('skills', [   
        state('ready',  style({opacity: 1})),
        transition('void => ready', [
            style({opacity: 0}),
            animate('4000ms 4s ease-in-out')
          ]),
      ]),
    ],
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    photo = 'ready'
    developer = 'ready';
    socialmidia = 'ready';
    skills = 'ready';

    desenvolvedor:string = "Marcos Ribeiro"
    cargo:string = "Desenvolvedor .NET | Mobile | Web"

   
    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
    }
}

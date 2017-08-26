
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
                transition(':enter', [
                    style({  opacity: 0 }),
                    animate('1000ms', style({  opacity: 1 }))
                ]),
                transition(':leave', [
                    style({  opacity: 1 }),
                    animate('1000ms', style({ opacity: 0 }))
                ])
            ]
        )
import { trigger, transition, animate, style, state, keyframes } from '@angular/animations';


export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // :enter is alias for void => *
    // :leave is alias for * => void
    // void => *, * => void can be combined into void <=> *
    transition(':enter, :leave', [
        animate(2000)
    ])
])

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)'}), // define the start style outside of animate()
        animate(500)
    ]),
    transition(':leave', [
        // define the end style inside the animate function
        animate(500, keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]))
    ])
])
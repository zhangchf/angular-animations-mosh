import { trigger, transition, animate, style, state } from '@angular/animations';


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
        animate(500, style({ transform: 'translateX(-100%'})) // define the end style inside the animate function
    ])
])
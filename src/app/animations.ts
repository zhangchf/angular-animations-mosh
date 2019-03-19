
import { trigger, transition, animate, style, state, keyframes, animation, useAnimation } from '@angular/animations';


export let fadeInAnimation = animation([
    style({ opacity: 0}),
    animate('{{duration}} {{easing}}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    animate('{{duration}} {{easing}}', style({ opacity: 0}))
], {
    params: {
        duration: '2s',
        easing: 'ease-in'
    }
});


export let slideInAnimation = animation([
    style({ transform: 'translateX(-20px)'}), // define the start style outside of animate()
    animate('{{duration}}')
], {
    params: {
        duration: '500ms'
    }
});

export let slideOutAnimation = animation([
    // define the end style inside the animate function
    animate('{{duration}}', keyframes([
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
], {
    params: {
        duration: '500ms'
    }
});

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // :enter is alias for void => *
    // :leave is alias for * => void
    // void => *, * => void can be combined into void <=> *
    transition(':enter, :leave', [
        animate(2000)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', useAnimation(slideInAnimation)),
    transition(':leave', useAnimation(slideOutAnimation))
])
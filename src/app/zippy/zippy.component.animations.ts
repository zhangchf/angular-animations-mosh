import { trigger, useAnimation, transition, style, animate, query, animateChild, group, stagger, state } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state('collapsed', style({
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0
  })),

  // This state is not necessary as it is the same as the default state.
  // It will work without this state definition.
  // state('expanded', style({
  //   height: '*',
  //   overflow: 'auto'
  // })),

  transition('collapsed => expanded', [
    animate('200ms ease-in', style({
      height: '*',
      paddingTop: '*',
      paddingBottom: '*'
    })),
    animate(200, style({ opacity: '*' }))
  ]),

  transition('expanded => collapsed', [
    animate('200ms ease-out')
  ])
])
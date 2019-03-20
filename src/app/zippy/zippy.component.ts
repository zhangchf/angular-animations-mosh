import { Component, Input } from '@angular/core';
import { trigger, useAnimation, transition, style, animate, query, animateChild, group, stagger, state } from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
      })),

      // This state is not necessary as it is the same as the default state.
      // It will work without this state definition.
      // state('expanded', style({
      //   height: '*',
      //   overflow: 'auto'
      // })),

      transition('collapsed => expanded', [
        animate('200ms ease-in')
      ]),
      
      transition('expanded => collapsed', [
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean = false;

  animationState() {
    return this.isExpanded ? 'expanded' : 'collapsed';
  } 

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

  onAnimationStart($event) {
    console.log($event);
  }
}

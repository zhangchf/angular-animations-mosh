import { Component, Input } from '@angular/core';
import { expandCollapse } from './zippy.component.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ expandCollapse ]
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

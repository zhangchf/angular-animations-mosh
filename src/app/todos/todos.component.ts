import { Component} from '@angular/core';
import { fade, slide, fadeInAnimation, slideInAnimation, fadeOutAnimation, slideOutAnimation } from 'app/animations';
import { trigger, useAnimation, transition, style, animate, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        // To animate in parallel
        group([
          query('h1', [
            style({ transform: 'translateY(-50px' }),
            animate(1000)
          ]),
          // The parent ':enter' animation will block the child ':enter' animation,
          // Need to invoke the animation mannually on its child.
          query('@todoAnimation', stagger(200, animateChild())) 
        ])
      ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms',
            easing: 'ease-in'
          }
        }),
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red'}),
        animate(1000),
        useAnimation(slideOutAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  onAnimationStart($event) {
    console.log($event);
  }

  onAnimationDone($event) {
    console.log($event);
  }
}

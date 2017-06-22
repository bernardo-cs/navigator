import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <ul class="navigator">
                <li *ngFor="let item of items | order:positionChanges; let i = index ">

                  <div draggable="true"
                       (dragstart)="dragStart($event, item)"
                       class="item">
                    {{item.name}} | {{item.position}}
                  </div>
                  <div class="dropzone"
                       (drop)="drop($event, i)"
                       (dragover)="dragOver($event)"
                       (dragleave)="dragLeave($event)"></div>
                </li>
              </ul>

              <button [disabled]="!positionChanges.length" (click)="goBack()">Go Back</button>
              <button [disabled]="!backPositionChanges.length" (click)="goForward()">Go Forward</button>

              <ul>
                <li *ngFor="let change of positionChanges">{{change | json}}</li>
              </ul>
            `,
  styles:   [
    '.navigator { background-color: brown; width: 100px;}',
    '.item { background-color: beige; height: 30px;}',
    '.dropzone { background-color: brown; height: 10px;}',
  ]
})
export class AppComponent {
  items = [
    {id: 10, position: 0, name: 'Anastacia'},
    {id: 1, position: 1, name: 'Sofia'},
    {id: 2, position: 2, name: 'Mitra'},
    {id: 3, position: 3, name: 'Kima'},
    {id: 4, position: 4, name: 'Noa'},
    {id: 5, position: 5, name: 'Lia'},
    {id: 6, position: 6, name: 'Bia'},
    {id: 7, position: 7, name: 'Joana'},
    {id: 8, position: 8, name: 'Lel'},
    {id: 9, position: 9, name: 'Lol'}
  ];

  positionChanges     = [];
  backPositionChanges = [];

  dragStart(event, item) {
    event.dataTransfer.setData('item', JSON.stringify(item));
  }

  dragOver(event) {
    event.target.style.backgroundColor = 'black';
    event.target.style.height          = '30px';
    event.preventDefault();
  }

  dragLeave(event) {
    event.target.style.backgroundColor = 'brown';
    event.target.style.height          = '10px';
  }

  drop(e, newPosition) {
    e.preventDefault();
    e.target.style.backgroundColor = 'brown';
    e.target.style.height          = '10px';
    const item                     = JSON.parse(e.dataTransfer.getData('item'));

    this.positionChanges = this.positionChanges.concat([{
      oldPosition: item.position,
      newPosition: newPosition
    }]);
    console.log(this.positionChanges);
  }

  goBack() {
    const position       = this.positionChanges.splice(this.positionChanges.length - 1, 1)[0];
    this.positionChanges = this.positionChanges.slice(0);

    this.backPositionChanges = this.backPositionChanges.concat([position]);
  }

  goForward() {
    const position           = this.backPositionChanges.splice(this.backPositionChanges.length - 1, 1)[0];
    this.backPositionChanges = this.backPositionChanges.slice(0);

    this.positionChanges = this.positionChanges.concat([position]);
  }
}

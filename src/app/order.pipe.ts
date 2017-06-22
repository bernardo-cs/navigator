import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, positionChanges: { oldPosition: number, newPosition: number }[]): any {
    const copyValue = JSON.parse(JSON.stringify(value));

    positionChanges
      .filter(posChange => posChange.newPosition !== posChange.oldPosition)
      .forEach(change => {
        const elem = copyValue.splice(change.oldPosition, 1)[0];

        if (change.newPosition > change.oldPosition) { copyValue.splice(change.newPosition, 0, elem); }
        if (change.newPosition < change.oldPosition) { copyValue.splice(change.newPosition + 1, 0, elem); }
      });

    copyValue.forEach((elem, index) => {
      elem.position = index;
    });

    return copyValue;
  }
}

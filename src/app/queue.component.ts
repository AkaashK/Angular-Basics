import { Component } from '@angular/core'

@Component({
    selector: 'simple',
    template: `<h3>Adding element 5 in queue: {{addElement(5)}}</h3>
               <h3>Adding element 6 in queue: {{addElement(6)}}</h3>
               <h3>Adding element 7 in queue: {{addElement(7)}}</h3>
               <h3>Adding element 8 in queue: {{addElement(8)}}</h3>
               <h3>Removing element from queue: {{removeElement()}}</h3>
               <h3>Removing element from queue: {{removeElement()}}</h3>`
})
export class DispaytsfileComponent {
    queueArray: number[] = new Array;
    addElement(addNumber: number) {
        let i: number = this.queueArray.length
        this.queueArray[i] = addNumber;
        return this.queueArray;
    }
    removeElement() {
        this.queueArray.shift()
        return this.queueArray;
    }
}
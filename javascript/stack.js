class Stack {
    constructor(){
        this.stack = [];
        this.front = 0;
    }
    push(element) {
      this.stack[this.front] = element;
      this.front++;
    }
   length() {
      return this.front;
   }

   peek() {
      return this.stack[this.front-1];
   }
   pop() {
    if( this.front === 0 ) {
      return undefined
     }
     this.front = this.front -1;
     return this.stack.pop();
   }
   
}
var Example = new Stack()
Example.push(3);
Example.push(4);
Example.push(5);
console.log(Example);
console.log(Example.length());
console.log(Example.pop());
console.log(Example.peek());
console.log(Example.length());
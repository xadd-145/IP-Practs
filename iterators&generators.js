//ITERATORS
const favourtieMovies = [
    'Harry Potter',
    'Lord of the Rings',
    'Rush Hour', 
    'Interstellar',
    'Evolution',
  ];
  const iterator = favourtieMovies[Symbol.iterator]();
 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//GENERATORS
function * fibonacci(){
    let current = 0;
    let next = 1;
    while(true){
        const reset = yield current;
        [current,next]=[next,next+current];
        if(reset){
            current=0;
            next=1;
        }
    }
}
const sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

//RUN NODE ITERATOR.JS
var x;

console.log('Pre Increment: ');
x = 27;
console.log(`x \t: ${x}`);
console.log(`++x \t: ${++x}`);
console.log(`x \t: ${x}`);

console.group("Post Increment");
x = 27;
console.log(`x \t: ${x}`);
console.log(`x++ \t: ${x++}`);
console.log(`x \t: ${x}`);
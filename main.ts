console.log("Hello world!");
console.log("This is my first Node Project!");

let myVar: number = 3;
myVar += 10;
console.log(myVar);

interface MyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: "Hello World!"
};

console.log(myInterface.myNumber);
console.log(myInterface.myString);
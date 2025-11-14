export class HelloWorld {
    name:string="Vaishali";
    displayMessage():string{
        return `Hello ${this.name}, Welcome to TypeScript!`;
    }
}
 let hello = new HelloWorld(); 
 console.log(hello.displayMessage());
 
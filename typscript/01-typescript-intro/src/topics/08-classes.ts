

export class Person{
    // public name: string;
    // private address: string;

    constructor(
        public name:string,
        public lastName: string,
        private address:string='No Address'
    ){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realname: string,
//     ){
//         super(realname,'New York');
//     }

// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realname: string,
        public person: Person
    ){
        // super(realname,'New York');
    }

}

const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Ironman',45,'Tony',tony);

console.log(ironman);
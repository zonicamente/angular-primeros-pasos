function addNumbers(a: number, b:number){
    return a+b;
}

const addNumbersArrow = (a: number, b: number): string=>{
    return `${a*b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base:number = 3){
    return firstNumber * base;
}

//addNumbers(1,2);
// const resul:string = addNumbers(2,3).toString();
// const resul2:string = addNumbersArrow(2,3);
// const resul3:number = multiply(5);

//console.log({resul,resul2,resul3});

interface character{
    name:string;
    hp: number;
    showHP: () => void;
};

const healCharacter  = ( character: character, amount: number)=>{
    character.hp += amount;
}

const strider: character = {
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
};

strider.showHP();

healCharacter(strider,20);
strider.showHP();

export {}
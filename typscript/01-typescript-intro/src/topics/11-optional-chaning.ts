export interface Passenger {
    name: string;
    childern?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}
const passenger2: Passenger = {
    name: 'Raul',
    childern: ['Natalia','Mateo'],
}

// const printChildren = (passenger:Passenger) => {
//     const hoyManyChiuldren = passenger.childern?.length || 0;

//     console.log(passenger.name, hoyManyChiuldren);
// }

const returnChildrenNumber = (passenger:Passenger) => {
    // if (!passenger1.childern) return 0;
    const hoyManyChiuldren = passenger.childern!.length || 0;

    console.log(passenger.name, hoyManyChiuldren);
}

// printChildren(passenger2);
returnChildrenNumber(passenger2);

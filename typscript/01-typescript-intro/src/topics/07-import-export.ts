import { Product, taxCalculator } from './06-funtion-destructuring';


const shoppingCar: Product[]=[{
    description:'Nokia',
    price: 100
},
{
    description:'iPad',
    price: 150
}]


const [total, tax] = taxCalculator({
    products:shoppingCar,
    tax:0.15
});

console.log('Total 2: ', total);
console.log('Tax 2: ', tax);

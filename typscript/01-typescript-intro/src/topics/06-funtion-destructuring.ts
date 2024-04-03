export interface Product{
    description:string;
    price:number;
}

const phone:Product={
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad',
    price:250.0
};


const shoppingCart = [phone, tablet];
const tax   = 0.15;

interface taxCalculatorOption{
    tax: number;
    products: Product[];
}

export function taxCalculator( options:taxCalculatorOption): [number,number]{

    let total = 0;

    options.products.forEach(({price}) => {
        total += price;
    })

    return [total,total* options.tax];
}

// const result = taxCalculator({
//     products:shoppingCart,
//     tax,
// });

const [total,totalTax] = taxCalculator({
    products:shoppingCart,
    tax,
});

console.log('Total ',total);
console.log('Tax ',totalTax);

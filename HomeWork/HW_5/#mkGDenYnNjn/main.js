let exchange= (sumUAH,currencyValues,exchangeCurrency) =>{
    let s;
    let values = currencyValues.map(item => item.value);
    for (let i=0; i<currencyValues.length; i++) {
        if (currencyValues[i].currency===exchangeCurrency) {
            s=values[i]
            break
        }
    }
    return sumUAH/s;
}

let array = [
    {
        currency: 'USD',
        value: 25
    },
    {
        currency: 'EUR',
        value: 40
    },
];


let usd='USD';
let eur='EUR';
let grn=10000;

document.writeln(`
        <h1>Обмін ${grn} грн. на ${usd} = $${exchange(grn,array,usd)}</h1>

    `);

document.writeln(`
        <h1>Обмін ${grn} грн. на ${eur} = $${exchange(grn,array,eur)}</h1>

    `);









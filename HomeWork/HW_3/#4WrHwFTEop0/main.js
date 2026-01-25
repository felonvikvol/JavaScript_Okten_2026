let users = [

    {name: 'vasya', age: 31, status: false},

    {name: 'petya', age: 30, status: true},

    {name: 'kolya', age: 29, status: true},

    {name: 'olya', age: 28, status: false},

    {name: 'max', age: 30, status: true},

    {name: 'anya', age: 31, status: false},

    {name: 'oleg', age: 28, status: false},

    {name: 'andrey', age: 29, status: true},

    {name: 'masha', age: 30, status: true},

    {name: 'olya', age: 31, status: false},

    {name: 'max', age: 31, status: true}

];

document.writeln(`<h1>Статус True</h1>`);
for (let user of users) {
    if (user.status) document.writeln(`<h2>${user.name}, </h2>`);
}

document.writeln(`<h1>Статус False</h1>`);
for (let user of users) {
    if (!user.status) document.writeln(`<h2>${user.name}, </h2>`);
}

document.writeln(`<h1>Старші 30 років</h1>`);
for (let user of users) {
    if (user.age>30) document.writeln(`<h2>${user.name} - ${user.age}, </h2>`);
}
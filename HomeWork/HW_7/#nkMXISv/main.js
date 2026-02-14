function Client(id, name, surname , email, phone,...order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

}

let Clients=[
    new Client(1,'Viktor','Feloniuk','felonvikvol@gmail.com',
        '+380984423305',['pen','pencil','workbook']),
    new Client(2,'Petro','Petrov','petrov@gmail.com',
        '+380984423306',['pen','pencil']),
    new Client(3,'Semen','Semenov','semenov@gmail.com',
        '+380984423307',['pen','workbook']),
    new Client(4,'Ivan','Ivanov','ivanov@gmail.com',
        '+380984423308',['pencil','workbook']),
    new Client(5,'Viktoria','Feloniuk','felonvikoria@gmail.com',
        '+380984423305',['pen','pencil','workbook','laptop','tv']),
    new Client(6,'Switlana','Feloniuk','vikvol@gmail.com',
        '+380984423305',['pen','pencil','workbook']),
    new Client(7,'Oleg','Petrov','petrov@gmail.com',
        '+380984423306',['pen','pencil']),
    new Client(8,'Mikita','Semenov','semenov@gmail.com',
        '+380984423307',['pen','workbook']),
    new Client(9,'Illia','Ivanov','ivanov@gmail.com',
        '+380984423308',['pencil','workbook']),
    new Client(10,'Olga','Feloniuk','felonvikoria@gmail.com',
        '+380984423305',['pen','pencil','workbook','laptop','tv']),
]

console.log(Clients);
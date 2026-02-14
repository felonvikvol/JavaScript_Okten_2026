function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let Users=[]

for (let i = 0; i < 10; i++) {
    Users.push(new User(i+1,'userName '+((i+1)+''),'userSurname '+((i+1)+''),
        'felonvikvol@gmail.com','+380984433307'));
}

console.log('Маємо масив:')
console.log(Users);

console.log('Відсортований масив по зростанню id:')
let sortUser=Users.sort((a,b)=> a.id-b.id);
console.log(sortUser);
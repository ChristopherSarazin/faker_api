const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');
const { fake } = require("faker/locale/zh_TW");

class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstname = faker.name.firstName()
        this.lastname = faker.name.lastName()
        this.phonenumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.streetAdress = faker.address.streetName()
        this.City = faker.address.city()
        this.state = faker.address.state()
        this.zip = faker.address.zipCode()
        this.country = faker.address.country()
    }
}

app.get("/api/user/new", (req, res)=>{
    let newUser = new User()
    res.json({
        data: newUser
    })
})

app.get("/api/company/new", (req, res)=>{
    let newCompany = new Company()
    res.json({
        data: newCompany
    })
})

app.get("/api/company/user", (req, res)=>{
    let newCompany = new Company()
    let newUser = new User()
    res.json({
        company: newCompany,
        user: newUser
    })
})

app.listen(port, ()=> console.log(`Listening on port: ${port}`));


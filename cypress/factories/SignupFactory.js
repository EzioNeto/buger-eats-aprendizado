
var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        

        var data = {
   
        name : `${firstName} ${lastName}`,
        cpf : cpf.generate(),
        email : faker.internet.email(firstName),
        whatsapp : "11999999999",
        address: {
            postalcode: "88804150",
            street: "Rua Victor Hugo",
            number: "1000",
            details: "ap 44",
            district: "Santa Bárbara",
            city_state: "Criciúma/SC"
        },
        
        delivery_method:"Moto",
        cnh: "cnh-digital.jpg"

    }

    return data

    }

}
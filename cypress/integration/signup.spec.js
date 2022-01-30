import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    // beforeEach(function () {

    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d

    //     }) 


    })


    it('user should be deliver', function () {

        

        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = signupFactory.deliver()


        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)




    })
    it('incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000123abc'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'digind.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })


    context('required fields', function() {
        
        const messages = [
        {field: 'name', output: 'É necessário informar o nome'},
        {field: 'cpf', output: 'É necessário informar o CPF'},
        {field: 'email', output: 'É necessário informar o emaio'},
        {field: 'postalcode', output: 'É necessário informar o CEP'},
        {field: 'number', output: 'É necessário informar o número do endereço'},
        {field: 'number', output: 'Selecione o método de entrega'},
        {field: 'delivery_method', output: 'Adicione uma fotoo da sua CNH'},
        {field: 'cnh', output: 'Adicione uma foto da sua CNH'}

        

        ]

        before(function(){
            signup.go()
            signup.submit()


        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)



            })


        })

    })


    


   

    



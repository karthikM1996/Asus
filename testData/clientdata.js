export function getClientData(){

    const random=Math.floor(Math.random()*10000);

    return{

        username:"sunitha@gmail.com",

        companyName:"TYSS",

        contactNo:`99${random}12345`,

        //username:`client${random}`,

        password:process.env.PASSWORD

    }
            console.log(password)


}
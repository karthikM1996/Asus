export function getClientData(){

    const random=Math.floor(Math.random()*10000);

    return{

        clientName:"Sunitha",

        companyName:"TYSS",

        contactNo:`99${random}12345`,

        username:`client${random}`,

        password:process.env.CLIENT_PASSWORD

    }

}
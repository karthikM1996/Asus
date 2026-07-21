export class JavascriptUtility
{
     static   getCurrentDate()
    {
    const date=new Date().toISOString().split('T')[0]
    return date
    }
   static   getRequiredDate(days)
   {
    const date=new Date()
    date.setDate(date.getDate()+days)
    return date.toISOString().split('T')[0]
   }
   static   getRandomNumber(max=20)
   {
    const random=Math.floor(Math.random()*max)+1
    return random
   }

   static getRandomEmail() {
    return `user${Date.now()}@gmail.com`;
}

  static getRandomString(length = 6) {
    return Math.random().toString(36).substring(2, 2 + length);
}
}
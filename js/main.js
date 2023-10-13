class BankAccount{
    static d=500;
    static w=300;
    constructor(accountNum,balance){
        this.accountNum=accountNum;
        this.balance=balance;
        BankAccount.d
        BankAccount.w
    }
    deposit(){
    //    let d=500;
        let totalAmout=this.balance+BankAccount.d;
        console.log(totalAmout,"deposit");
    }
    widthdraw(){
        // let w=300;
        this.balance=this.balance-BankAccount.w;
        console.log(this.balance,"WidthDraw");
    }
}
let bank=new BankAccount(2023,1000)
bank.widthdraw();
bank.deposit()
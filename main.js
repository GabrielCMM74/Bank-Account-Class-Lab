console.log(`Main JS Good`)

class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;

    }  

        deposit(value) {
           this.balance += value; 
        //    return this.balance
         console.log(`deposit works `)
        }

        withdraw(taken) {
            this.balance -= taken;
        //    
        console.log(` withdraw works `)
        }




}

const acct1 = new BankAccount(`John Freeman`, 1000, 1009234)
acct1.deposit(2000)
acct1.withdraw(30000)

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled;
    }
         
    withdraw(taken) {
         if ( taken >= this.balance)  {

            console.log( ` ${this.balance} overdraft protection we're on your side buddy` )
         }
        }


        

    }

    const acct2 = new CheckingAccount(`Batman`, 1000, 900934, true)
    acct2.deposit(200)
    acct2.withdraw(300)


    class SavingsAccount extends BankAccount {
        constructor(ownerName, balance, acctNum ) {
            super(ownerName, balance, acctNum )
        
        } withdraw(taken) {
            if (taken >= 0)
            console.log(`No Not allowed to withdraw from Savings Account`)
        }
    
    
    
    
    }



    const acct3 = new SavingsAccount(`Robin`, 1000, 1009094)
    acct3.deposit(200)
    acct3.withdraw(90)
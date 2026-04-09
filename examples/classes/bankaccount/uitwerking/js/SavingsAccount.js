import BankAccount from "./BankAccount.js";

class SavingsAccount extends BankAccount {
    constructor(owner, startBalance, interestRate) {
        super(owner, startBalance);
        this.interestRate = interestRate;
    }
    addInterest() {
        const interest = this.getBalance() * this.interestRate;
        this.deposit(interest);
    }   
}

export default SavingsAccount;
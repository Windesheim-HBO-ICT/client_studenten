class BankAccount {
    #balance;

    constructor(owner, startBalance) {
        this.owner = owner;
        this.#balance = startBalance;
    }   
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
}

export default BankAccount;
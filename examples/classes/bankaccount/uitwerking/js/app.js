import BankAccount from './BankAccount.js';
import SavingsAccount from './SavingsAccount.js';

const acc = new BankAccount('John Doe', 100);

console.log(acc.getBalance()); // 100

acc.deposit(50);
console.log(acc.getBalance()); // 150

acc.withdraw(30);
console.log(acc.getBalance()); // 120

const savingsAcc = new SavingsAccount('Jane Doe', 200, 0.05);
console.log(savingsAcc.getBalance()); // 200
savingsAcc.addInterest();
console.log(savingsAcc.getBalance()); // 210
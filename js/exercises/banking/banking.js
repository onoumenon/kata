class Account {
  constructor(balance, amount, date) {
    this.balance = 0;
    this.statement = { date: [], amount: [], balance: [] };
  }

  deposit(int, date) {
    if (int < 0) {
      return "Deposit must be positive";
    }
    this.balance += int;
    this.statement.date.push(date);
    this.statement.amount.push(`+${int}`);
    this.statement.balance.push(this.balance);
    return this.balance;
  }

  withdraw(int, date) {
    if (int < 0) {
      return "Withdrawal must be positive";
    }
    if (int > this.balance) {
      return "Not enough cash";
    }
    this.balance -= int;
    this.statement.date.push(date);
    this.statement.amount.push(`-${int}`);
    this.statement.balance.push(this.balance);
    return this.balance;
  }

  printStatement() {
    return this.statement;
  }
}

module.exports = Account;

const Account = require("./banking");

describe("Banking Kata", () => {
  describe("Deposit", () => {
    it("should return 400 as balance when 400 is deposited", () => {
      const newAcct = new Account();
      expect(newAcct.deposit(400)).toBe(400);
    });

    it("should reject deposit if it is negative int", () => {
      const newAcct = new Account();
      expect(newAcct.deposit(-50)).toBe("Deposit must be positive");
    });
  });

  describe("Withdrawal", () => {
    it("should return balance 350 after withdrawing 50", () => {
      const newAcct = new Account();
      newAcct.deposit(200);
      expect(newAcct.withdraw(50)).toBe(150);
    });

    it("should reject withdrawal if it is more than balance", () => {
      const newAcct = new Account();
      newAcct.deposit(10);
      expect(newAcct.withdraw(50)).toBe("Not enough cash");
    });

    it("should reject withdrawal if it is negative int", () => {
      const newAcct = new Account();
      expect(newAcct.withdraw(-10)).toBe("Withdrawal must be positive");
    });
  });

  describe("Print Statement", () => {
    it("should print a statement with date, amount and balance when printStatement is called", () => {
      const newAcct = new Account();
      const date = new Date().toString().slice(0, 15);
      newAcct.deposit(10, date);
      expect(newAcct.printStatement()).toEqual({
        date: [date],
        amount: ["+10"],
        balance: [10]
      });
    });
    it("should print a statement with multiple dates and balances when printStatement is called", () => {
      const newAcct = new Account();
      const date = new Date().toString().slice(0, 15);
      newAcct.deposit(100, date);
      newAcct.withdraw(10, date);
      expect(newAcct.printStatement()).toEqual({
        date: [date, date],
        amount: ["+100", "-10"],
        balance: [100, 90]
      });
    });
  });
});

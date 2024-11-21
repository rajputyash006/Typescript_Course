class Bank {
  constructor(public bankName: string) {}
}

class BankAccount extends Bank {
  constructor(public accountNumber: string, bankName: string) {
    super(bankName);
  }
}

let bank_account = new BankAccount('123456789', 'HDFC-Bank');
console.log(
  `Bank name is ${bank_account.bankName} and bank account number is ${bank_account.accountNumber}`
);

// access modifiers
// 1. public 2. private 3. protected

class Employee {
  constructor(
    public companyName: string,
    public salary: number,
    public employeeName: string
  ) {}

  public welcomeMessage() {
    return `Welcome to the ${this.companyName}`;
  }

  private calculateBonus(salary: number): number {
    return salary * 0.2;
  }

  protected getEmployeeDetails() {
    return `${this.employeeName} is going to get bonus ${this.calculateBonus(
      this.salary
    )} when he is going to join ${this.companyName}`;
  }

  public printEmployeeData() {
    console.log(this.getEmployeeDetails());
  }
}

let employee = new Employee('ProminetPixel', 28000, 'Amit Jangid');
console.log(employee.welcomeMessage());
employee.printEmployeeData();

class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("DI", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Menu");

//accounting.employees[2] = "anna";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "dummy", describe: accounting.describe };

// accountingCopy.describe();

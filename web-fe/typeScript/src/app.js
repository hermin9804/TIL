var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("DI", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Menu");
//accounting.employees[2] = "anna";
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "dummy", describe: accounting.describe };
// accountingCopy.describe();

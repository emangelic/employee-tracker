const mysql = require("mysql");
const inquirer = require ("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    post: 3001,
    user: "root",
    password: "pw123",
    database: "employee-trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});
function start() {
    console.log("\n")


console.log("              ☆ .‧₊˚                ")
console.log(" ╭◜◝ ͡ ◜◝╮        ╭◜◝ ͡ ◜◝╮.      ")
console.log("( Employee ) ☆   (  Tracker  )☆ ♡  ")
console.log(" ╰◟◞ ͜ ◟◞╭◜◝ ͡ ◜◝╮ ͜ ◟  ◞╯♡       ")
console.log("  . ☆    ( DataBase )☆ ♡           ")
console.log("♡         ╰◟◞ ͜ ◟◞╯ . ☆           ")
console.log("                                    ")
console.log("\n")

inquirer
    .prompt({
        name: "choiceType",
        type: "list",
        message: "Would you like to [VIEW], [ADD], [DELETE], or [UPDATE] an employee, department, or salary?",
        choices: ["VIEW", "ADD", "DELETE", "UPDATE", "EXIT"]
    })
    .then(function (answer) {
        if (answer.choiceType === "VIEW") {
            selectBy_VIEW();
        }
        else if (answer.ChoiceType === "ADD") {
            selectBy_ADD();
        }
        else if (answer.ChoiceType === "UPDATE") {
            selectBy_UPDATE();
        }
        else if (answer-ChoiceType === "DELETE") {
            selectBy_DELETE();
        }
        else {
            connection.end();
        }
    });
} 

function returnStart() {
    inquirer
        .prompt({
            name: "returnStart",
            type: "list",
            message: "Start over?",
            choices: ["YES", "NO"]
        })
        .then(function (answer) {
            if (answer.returnStart === "YES") {
                start();
            }
            else {
                selectBy_VIEW();
            };
        });
};

function selectBy_VIEW() {
    inquirer
        .prompt({
            name: "ChoiceWhoView",
            type: "list",
            message: "Would you like to view an [EMPLOYEE], [DEPARTMENT], or [ROLE] ?",
            choices: ["EMPLOYEE", "DEPARTMENT", "ROLE", "BACK"]
        })
        .then(function (answer) {
            if (answer.ChoiceWhoView === "EMPLOYEE") {
                viewEmployee();
            }
            else if (answer.ChoiceWhoView === "DEPARTMENT") {
                viewDepartment();
            }
            else if (answer.ChoiceWhoView === "ROLE") {
                viewRole();
            }
            else if (answer.ChoiceWhoView === "BACK") {
                returnStart();
            }
        });
}

function selectBy_ADD() {
    inquirer
        .prompt({
            name: "ChoiceWhoAdd",
            type: "list",
            message: "Would you like to add an [EMPLOYEE], [DEPARTMENT], or [ROLE] ?",
            choices: ["EMPLOYEE", "DEPARTMENT", "ROLE", "BACK"]
        })
        .then(function (answer) {
            if (answer.ChoiceWhoAdd === "EMPLOYEE") {
                addEmployee();
            }
            else if (answer.ChoiceWhoAdd === "DEPARTMENT") {
                addDepartment();
            }
            else if (answer.ChoiceWhoAdd === "ROLE") {
                addRole();
            }
            else {
                start();
            }
        });
}

function selectBy_UPDATE() {
    inquirer
        .prompt({
            name: "ChoiceWhoUpdate",
            type: "list",
            message: "Would you like to update an [EMPLOYEE], [DEPARTMENT], or [ROLE] ?",
            choices: ["YES", "NO"]
        })
        .then(function (answer) {
            if (answer.ChoiceWhoUpdate === "YES") {
                updateEmployee();
            }
            else {
                start();
            }
        });
}

function selectBy_DELETE() {
    inquirer
        .prompt({
            name: "ChoiceWhoAdd",
            type: "list",
            message: "Would you like to delete an [EMPLOYEE], [DEPARTMENT], or [ROLE] ?",
            choices: ["EMPLOYEE", "DEPARTMENT", "ROLE", "BACK"]
        })
        .then(function (answer) {
            if (answer.ChoiceWhoAdd === "EMPLOYEE") {
                deleteEmployee();
            }
            else if (answer.ChoiceWhoAdd === "DEPARTMENT") {
                deleteDepartment();
            }
            else if (answer.ChoiceWhoAdd === "ROLE") {
                deleteRole();
            }
            else {
                start();
            }
        });
}

function viewDepartment() {
    console.log("View Departments...\n");
    connection.query("Select department.", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n")
            console.log(
                " ☆ .‧₊˚ Departments ˚₊‧. ☆ " +
                res[i].name);
        }
            console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
        returnStart();
    });
}

function viewDepartmentNoReturn() {
    console.log("View Departments...\n");
    connection.query("Select department.", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n")
            console.log(
                " ☆ .‧₊˚ Departments ˚₊‧. ☆ " +
                res[i].name);
        }
            console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
        return;
    });
}

function viewEmployee() {
    console.log("View Employees...\n");
    console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n")
            console.log(
                " ID: " +
                res[i].id +
                "First name: " +
                res[i].first_name +
                "Last name: " +
                res[i].last_name +
                "Role: " +
                res[i].title +
                "Salary: " +
                res[i].salary);
        }
        console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
        returnStart();
    });
}

function viewEmployeeNoReturn() {
    console.log("View Employees...\n");
    console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary";
    connection.query("Select employee.", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n")
            console.log(
                " ID: " +
                res[i].id +
                "First name: " +
                res[i].first_name +
                "Last name: " +
                res[i].last_name +
                "Role: " +
                res[i].title +
                "Salary: " +
                res[i].salary);
        }
        console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
        return;
    });
}

function viewRole() {
    console.log("View roles.\n");
    connection.query("Select Role", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n)")
            console.log(
                "ID:" +
                res[i].id +
                "Salary:" +
                res[i].salary
            );
        }
        console.log("☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚☆ .‧₊˚");
        returnStart();
    });
}

function viewRoleNoReturn() {
    
}
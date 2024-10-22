const mysql = require("mysql");
const inquierer = require ("inquierer");

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

inquierer
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
        else
    })

} 
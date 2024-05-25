import inquirer from "inquirer";
class student {
    id;
    name;
    coursesEnrolled;
    feesAmount;
    constructor(id, name, coursesEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.coursesEnrolled = coursesEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please select an option:\n",
        choices: ["Enroll a student", "Show student status"]
    });
    if (action.ans === "Enroll a student") {
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "please Enter your name:"
        });
        let trimedStudentName = (studentName.ans).trim().toLowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(trimedStudentName) === false) {
            if (trimedStudentName !== "") {
                baseId++;
                studentId = "STID" + baseId;
                console.log("\n\tYour account has been created");
                console.log(`Welcome, ${trimedStudentName}!`);
                let cource = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "please select a cource",
                    choices: ["IT", "English", "Cooking"]
                });
                let courceFees = 0;
                switch (cource.ans) {
                    case "IT":
                        courceFees = 5000;
                        break;
                    case "English":
                        courceFees = 500;
                        break;
                    case "Cooking":
                        courceFees = 2000;
                        break;
                }
                let courceConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: "Do you want to enroll in this cource"
                });
                if (courceConfirm.ans === true) {
                    let Student = new student(studentId, trimedStudentName, [cource.ans], courceFees);
                    students.push(Student);
                    console.log("You have enrooled in this course");
                }
            }
            else {
                console.log("invalid Name");
            }
        }
        else {
            console.log("this name is already exists");
        }
    }
} while (true);

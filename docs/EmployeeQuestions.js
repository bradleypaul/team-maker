const validateNumber = (input) => {
	return /[A-Za-z0-9]+/.test(input) || "Not a valid number. Please try again";
}

const validateEmail = (input) => {
	return /[\w\.]+@[\w\.]+/.test(input) || "Invalid email address. Please try again.";
}

class EmployeeQuestions {
	constructor(role) {
		this.role = role;
	}

	getQuestions() {
		// take the default array and spread it into another array with the last
		// question added.
		return [...[
			{
				type: "input",
				name: "name",
				message: `Who is your ${this.role}?`
			}, {
				type: "input",
				name: "id",
				// use inquirer's message property as a function to inject 
				// the employee's name into the rest of the questions
				message: (ans) => `What is ${ans.name}'s id?`,
				validate: validateNumber
			},{
				type: "input",
				name: "email",
				message: (ans) => `What is ${ans.name}'s email?`,
				validate: validateEmail
			}
		], this.getLastQuestion()];
	}

	//return role specific questions based on the role property
	getLastQuestion() {
		if(this.role === "manager") {
			return {
				type: "input",
				name: "officeNumber",
				message: (ans) => `What is ${ans.name}'s office number?`
			}
		} else if(this.role === "engineer") {
			return {
				type: "input",
				name: "github",
				message: (ans) => `What is ${ans.name}'s github profile?`
			}
		} else if (this.role === "intern") {
			return {
				type: "input",
				name: "school",
				message: (ans) => `What is ${ans.name}'s school?`
			}
		}
	}
}

module.exports = EmployeeQuestions;
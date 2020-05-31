const generateHtml = require('../src/generateHtml');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

const baseCard = `
    <div class="card">
        <div class="header">
            <h2>
                Creed Bratton
            </h2>
            <h3>
                <i class="fas fa-graduation-cap"></i> Intern
            </h3>
        </div>
        <div class="data">
            <ul>
                <li>
                    ID: 1
                </li>
                <li>
                    Email: <a href="mailto:creed@www.creedthoughts.gov.www">creed@www.creedthoughts.gov.www</a>
                </li>
                <li class="last">
                    School: Scranton U
                </li>
            </ul>
        </div>
    </div>`;

const html =
`<!DOCTYPE html>
<html>

<head>
<script>
function clickHandler(e) {
window.open('https://www.github.com/' + e.target.innerText, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".github").forEach(element => element.addEventListener('click', clickHandler));
});
</script>
<!-- CSS only -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/boots"></script>
<style>
body {
margin: 0;
}
.container {
flex-wrap: wrap;
}
h1 {
text-align: center;
background-color: #eb4554;
color: #f1f2f5;
font-family: Arial, Helvetica, sans-serif;
display: block;
font-size: 2em;
padding: 30px;
font-weight: bold;
}

.card-deck {
display: flexbox;
flex-direction: row;
}

.card {
padding: 0;
margin: 20px;
font-size: .95rem;
width: 300px;
}

.header {
background-color: royalblue;
padding: 10px;
color: #f1f2f5;
}

.data {
background-color: #f1f2f5;
}

h3 {
font-size: 1.5rem;
}

ul {
list-style: none;
padding-left: 10px;
padding-top: 10px;
padding-right: 10px;
}

li {
padding-left: 15px;
padding-right: 15px;
padding-top: 10px;
padding-bottom: 10px;
border-left: 1px solid;
border-right: 1px solid;
border-top: 1px solid;
border-color: rgb(182, 182, 182);
}

li.last {
border-bottom: 1px solid;
border-color: rgb(182, 182, 182);
}

.container {
flex-wrap: wrap;
display: flex;
flex-direction: row;
justify-content: space-around;
}
</style>
</head>

<body>
<h1>
My Team
</h1>

<!--cards-->
<main class="container">
${baseCard}
</main>
</body>

</html>`;

test("Creates an intern card correctly", () => {
    const temp = {
        name: "Creed Bratton",
        id: 1,
        email: "creed@www.creedthoughts.gov.www",
        school: "Scranton U"
    };

    const emp = new Intern(temp);
    const card = generateHtml.makeCard(emp);
    expect(card).toBe(baseCard);
});


test("Return the employee specific property as HTML", () => {
    const manager = new Manager({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        officeNumber: 7
    });
    
    const intern = new Intern({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        school: "Scranton U"
    });
    
    const engineer = new Engineer({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        github: "bradleypaul"
    });

    expect(generateHtml.getSpecialProperty(manager)).toBe("Office Number: 7");
    expect(generateHtml.getSpecialProperty(engineer)).toBe('GitHub: <a href="" class="github">bradleypaul</a>');
    expect(generateHtml.getSpecialProperty(intern)).toBe("School: Scranton U");
});

test("that the FA symbol is correct", () => {
    const manager = new Manager({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        officeNumber: 7
    });
    
    const intern = new Intern({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        school: "Scranton U"
    });
    
    const engineer = new Engineer({
        name: "Paul",
        id: 1,
        email: "paul@office.com",
        github: "bradleypaul"
    });

    expect(generateHtml.getSymbol(manager)).toBe('<i class="fas fa-coffee"></i>');
    expect(generateHtml.getSymbol(engineer)).toBe(`<i class="fas fa-glasses"></i>`);
    expect(generateHtml.getSymbol(intern)).toBe(`<i class="fas fa-graduation-cap"></i>`);
});

test("creates html correctly", () => {
    const employees = [new Intern({
        name: "Creed Bratton",
        id: 1,
        email: "creed@www.creedthoughts.gov.www",
        school: "Scranton U"
    })];
    expect(generateHtml.generateHtml(employees)).toBe(html);
});
function generateHtml(employees) {
    return `<!DOCTYPE html>
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
            ${employees.map(makeCard).join('\n')}
        </main>
    </body>
    
    </html>`
}

function makeCard(emp) {
    const email = emp.getEmail();
    return `
    <div class="card">
        <div class="header">
            <h2>
                ${emp.getName()}
            </h2>
            <h3>
                ${getSymbol(emp)} ${emp.getRole()}
            </h3>
        </div>
        <div class="data">
            <ul>
                <li>
                    ID: ${emp.getId()}
                </li>
                <li>
                    Email: <a href="mailto:${email}">${email}</a>
                </li>
                <li class="last">
                    ${getSpecialProperty(emp)}
                </li>
            </ul>
        </div>
    </div>`;
}

function getSpecialProperty(emp) {
    const role = emp.getRole();
    if (role === "Manager") {
        return `Office Number: ${emp.getOfficeNumber()}`;
    } else if (role == "Engineer") {
        return `GitHub: <a href="" class="github">${emp.getGithub()}</a>`;
    } else if (role == "Intern") {
        return `School: ${emp.getSchool()}`;
    }
}

function getSymbol(emp) {
    const role = emp.getRole();
    if (role === "Manager") {
        return `<i class="fas fa-coffee"></i>`;
    } else if (role == "Engineer") {
        return `<i class="fas fa-glasses"></i>`;
    } else if (role == "Intern") {
        return `<i class="fas fa-graduation-cap"></i>`;
    }
}

module.exports = generateHtml;
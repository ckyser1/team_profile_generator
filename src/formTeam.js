const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')


function makeCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        cards.push(generateManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(generateEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <section class="card">
    <div class='card-header'>
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text"><i></i> ${Manager.getRole()}</h6>
    </div>

    <div class="card-body">
      <ul>
        <li>ID: ${Manager.getId()}</li>
        <li>Office Number: ${Manager.getOfficeNumber()}</li>
        <li><a href = "mailto:${Manager.getEmail()}">Email</li></a>
      </ul>
      
    </div>

  </section>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <section class="card">

    <div class='card-header'>
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text"><i></i> ${Engineer.getRole()}</h6>
    </div>

    <div class="card-body">
      <ul>
        <li>ID: ${Engineer.getId()}</li>
        <li><a href = "mailto:${Engineer.getEmail()}">Email</li></a>
        <li>Github: ${Engineer.getGithub()}</li>
      </ul>
    </div>

  </section>
  `
};

let generateInternCard = (Intern) => {
  return `
  <section class="card">

    <div class='card-header'>
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text"><i></i> ${Intern.getRole()}</h6>
    </div>

    <div class="card-body">
      <ul>
        <li>ID: ${Intern.getId()}</li>
        <li><a href = "mailto:${Intern.getEmail()}">Email</li></a>
        <li>School: ${Intern.getSchool()}</li>
      </ul>
    </div>

  </section>
  `
}

function formTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Team</title>
</head>


<body>
<section class="jumbotron">
  <div class="container">
    <h1>My Team</h1>
  </div>
</section>

<main>
  ${makeCards(team)}
</main>
</body>
</html>
    `
}


module.exports = formTeam;
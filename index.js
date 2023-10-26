// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines for your project.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your application.',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public LIcense v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense',
  ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const { title, description, installation, usage, contribution, test, license, username, email } = data;

  const badgeSect = badge;

  const titleSect = `# ${title}`;

  const descripSect = `## Description\n\n${description}`;
  
  const installSect = `## Installation\n\n${installation}`;
  
  const usageSect = `## Usage\n\n${usage}`;
  
  const contribSect = `## Contributing\n\n${contribution}`;
  
  const testSect = `## Tests\n\n${test}`

  const licenseSect = `## License\n\nThis application is covered under the ${license}.\n\nPlease refer to the LICENSE file in repo.`

  const questionsSect = `## Questions\n\nMy GitHub profile: https://github.com/${username}\n\nIf you have any further questions, contact me through email.\n\n${email}`

  const readme = `${badgeSect}\n\n${titleSect}\n\n${descripSect}\n\n${installSect}\n\n${usageSect}\n\n${contribSect}\n\n${testSect}\n\n${licenseSect}\n\n${questionsSect}`

  fs.appendFile(fileName, readme, (err) => {
    err ? console.error(err) : console.log('Your README file has been generated under the name "Generated_README.md"!')
  })
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    writeToFile('Generated_README.md', answers);
  });
};

// Function call to initialize app
init();

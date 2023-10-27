// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  } else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
  } else if (license === 'MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]';
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  } else if (license === 'GNU Affero General Public License v3.0') {
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  } else if (license === 'GNU General Public License v2.0') {
    licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
  } else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license === 'The Unlicense'){
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === 'Apache License 2.0') {
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT License') {
    licenseLink = '(https://opensource.org/licenses/MIT)';
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseLink = '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'GNU Affero General Public License v3.0') {
    licenseLink = '(https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === 'GNU General Public License v2.0') {
    licenseLink = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (license === 'Mozilla Public License 2.0') {
    licenseLink = '(https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'The Unlicense'){
    licenseLink = '(http://unlicense.org/)';
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license !== 'None') {
    licenseSection = `## License

This application is covered under ${license}.

Please refer to the LICENSE file in repo for more information.`
  }
  return licenseSection;
};

function renderTableOfContents(license) {
  let tableOfContents = `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`

  if (license !== 'None') {
    tableOfContents = `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)`
  }
  return tableOfContents
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

${renderTableOfContents(data.license)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test}

${renderLicenseSection(data.license)}

## Questions

My GitHub profile: https://github.com/${data.username}

If you have any further questions, please contact me through email.

${data.email}
`;
};

module.exports = generateMarkdown;

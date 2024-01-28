// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitBadge = ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"];
  const gnuBadge = ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"];
  const iscBadge = ["[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"];
  const apacheBadge = ["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = (userInput) => {
  const { title, description, installation, usage, collaborators, contribute, test, githubUrl, email } = userInput;
  const outputMarkdown = `# ${title}

  ## Description
  
${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#contribute)
  - [Tests](#test)
  - [Contact](#contact)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}

  ## Credits
  
  ${collaborators}

  ## Contribute

  ${contribute}

  ## Test

  ${test}

  ## Contact

  [${githubUrl}](https://www.github.com/${githubUrl})
  <${email}>
  
  ## License
  

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
`

  return outputMarkdown;
}

module.exports = generateMarkdown;

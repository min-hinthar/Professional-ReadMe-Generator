// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License Badges](https://img.shields.io/badge/LICENSE-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// create a Table of Contents for the Title, Description, Installation, Usage, Contributing, Tests, License and Questions using data from inquirer.prompt(questions)
function generateMarkdown(data) {
  return `

# Project Title [${data.title}]
${renderLicenseBadge(data.license)}
-----

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

-----

### Description 
${data.description} 

-----

### Installation 
${data.installation}

-----

### Usage 
${data.usage} 

-----

### Contributing 
${data.contributing} 

-----

### Tests 
${data.tests} 

-----

### License 
${data.license} 

-----

### Questions 

#### GitHub Username: ${data.gitHubUsername} 

#### GitHub URL: ${data.gitHubProfile}

#### Email: ${data.email}

-----

`;
}
// export module as generateMarkdown 
module.exports = generateMarkdown;

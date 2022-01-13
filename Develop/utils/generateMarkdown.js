// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license = '') {
    return ''
  } else {
    return `[![License](https://img.shields.io/badge/${image}/${url}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
# Your Project Title

## Description

${data.description}

## Table of Contents


## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Further questions about this project may be directed to:
${data.email}
${data.github}

`;
}

module.exports = generateMarkdown;

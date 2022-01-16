
function generateMarkdown(answers) {
  
  const licenseArray = [
    'Apache 2.0',
    'Boost',
    'GNU GPL v3',
    'GNU GPL v2',
    'MIT',
    'Mozilla Public License 2.0',
    'The Unlicense',    
    ''
  ];

  const badgeArray = [
    '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',    
    '[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',     
    ''
  ];

  const linkArray = [
    'https://opensource.org/licenses/Apache-2.0',
    'https://www.boost.org/LICENSE_1_0.txt',
    'https://www.gnu.org/licenses/gpl-3.0',
    'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'https://opensource.org/licenses/MIT',
    'https://opensource.org/licenses/MPL-2.0',
    'http://unlicense.org/',       
    ''
  ];
  
  let licenseBadge = badgeArray[answers.license];
  let licenseName = licenseArray[answers.license];
  let licenseLink = linkArray[answers.license];
  

return `
# ${answers.title} ${licenseBadge}

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation

${answers.install}

## Usage

${answers.usage}

## License

This application is covered by: ${licenseName}. More informaton: ${licenseLink}

## Contributing

${answers.contributing}

## Tests

${answers.test}

## Questions

Further questions about this project may be directed to:
${answers.email}
${answers.github}

`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "* [License](#License)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return "# License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.projectTitle}
  
  # Description
  ${data.description}

  # Table of Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
   ${renderLicenseLink(data.license)}
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  # Installation
  ${data.installation}
  
  # Usage
  ${data.usageInformation}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  # Contributing
  ${data.guidelines}
  
  # Tests
  ${data.testInstruction}
  
  # Questions
  Need to [${data.gitHubName}](https://github.com/${data.gitHubName})
  [You can contact me here - Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

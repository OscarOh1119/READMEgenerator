// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
 
    switch(license) {                     //setting license badge depending on license picked
      case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      return licenseBadge;
  
      case "Apache":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      return licenseBadge;
  
      case "ISC":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  
      case "ODBL":
      licenseBadge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]";
      return licenseBadge;
  
      case "SIL":
      licenseBadge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]";
      return licenseBadge;

      case "Null":
        licenseBadge = "";
        return licenseBadge;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
                                                                    //setting license link based on license picked
  switch(license) {
    case "MIT":
    licenseLink = "https://opensource.org/licenses/MIT"
    break;

    case "Apache":
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
    break;

    case "ISC":
    licenseLink = "https://opensource.org/licenses/ISC"
    break;

    case "ODBL":
    licenseLink = "https://opendatacommons.org/licenses/odbl/"
    break;

    case "SIL":
      licenseLink = "https://opensource.org/licenses/OFL-1.1"
      break;
  
    

  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {                              //renders the license section 
 let licenseSection;

 if(license != "Null") {                        //if the license picked is not null then fill it with corresponding data
  licenseSection = "## License \n"
  licenseSection += `Click on the link to get more information: ${renderLicenseLink(license)}`
 }else {
  licenseSection = "";
 }
 return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {                     //generates markdown language for readme 
  let secTitle;
  let secDescription;
  let secInstallation;
  let secUsage;
  let secContributing;
  let secLicense;
  let secTests;
  let secQuestions;
  let spaces;
  let secToc;                             //initializing different sections that we will then concatenate

  secTitle = `# ${data.title} \n`;
  secTitle += `${renderLicenseBadge(data.license)} \n`;

  spaces ="\n";

  secToc = `## Table of Contents\n`;                          //creating Table of Contents 
  secToc +="\n[`Description`](#description) \n";              //navigating to selected section using markdown language [Label here](#section-to-go-to)
  secToc +="\n[`Installation`](#installation) \n";
  secToc +="\n[`Usage`](#usage) \n";
  secToc +="\n[`Contributions`](#contributions)\n ";
  secToc +="\n[`Tests`](#tests)\n ";
  secToc +="\n[`License`](#license) \n ";
  secToc +="\n[`Questions`](#questions) \n";


  secDescription = `## Description \n`;               //populates each variable with the markdown of the corresponding section
  secDescription += `${data.description} \n`;

  secInstallation = `## Installation \n`;
  secInstallation += `${data.installation} \n`;

  secUsage = `## Usage \n`;
  secUsage += `${data.usage} \n`;

  secContributing = `## Contributions \n`;
  secContributing += `${data.contributions} \n`;

  secTests = `## Tests \n`;
  secTests += `${data.tests} \n`;

  secLicense = `${renderLicenseSection(data.license)} \n`   //generates license section

  secQuestions = `## Questions \n`;
  secQuestions += `Github page: https://github.com/${data.username} \n`;
  secQuestions += `\nEmail me at: ${data.email} for any additional questions.`;

  return secTitle + spaces + secToc + secDescription + secInstallation + secUsage + secContributing + secTests + secLicense + secQuestions;   //concatenate all the sections and return them













}

export default generateMarkdown;

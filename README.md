# Project-UI-Automation-Bootcamp
Final project for Quality Works UI Automation Bootcamp

## Dependencies
NodeJS v12, v14 or above
NPM v6 or above
Chrome browser
Microsoft Edge
Getting Started
Clone the repository & install dependencies

* N.B. The browser must be installed on the device.

$ git clone https://github.com/BriannaJRowe/Project-UI-Automation-Bootcamp.git
$ cd Project-UI-Automation-Bootcamp
$ npm install

### Folder Structure
cypress/e2e/page: Page object files which includting selectors and functions used in tests.
cypress/e2e/test: Test files that include the actual tests.

### Executing tests
To execute the Cypress GUI do:

npx cypress open

### To execute the Cypress using commandline do:

npx cypress run

### To execute all tests in the Chrome browser do:

npm test

### Execute tests in Microsoft Edge
npx cypress run --browser edge


### Execute a specific test file

npx cypress run --spec cypress/e2e/test/auth.cy.js

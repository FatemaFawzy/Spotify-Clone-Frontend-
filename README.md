
# Prerequisite installation:

* Install Node.js from (https://nodejs.org/en/download/)
* Install visual studio code
```sh
# [To create a new react app]
# Type in terminal:
npm install -g create-react-app
```

## Dependencies
* node v 12.16.1   
* npx v 6.13.4

# add to your environment variables
C:\Program Files\nodejs
C:\Users\moham\AppData\Roaming\npm

[To use our app]
# Get the Code (Type in the command in Git Bash):
```
git clone (https://github.com/FatemaFawzy/Frontend-Team.git)
```

# Install Packages:
## to get all the pachages we used in the app:
* you can run these commands:
```sh
npm install														# Install dependencies
```
# to install each package independently:
* you can run these commands:

```sh 
npm install -- save react-router-dom
npm install -- save bootstrap
npm install -- save react-bootstrap 
npm install -- save prop-types
npm install -- save redux react-redux
npm install -- save react-js-snackbar
npm install -- save react-click-away-listener@0.4.0
```

For testing:
* unit
```sh 
npm install -- save enzyme react-test-renderer enzyme-adapter-react-16
```
* E2E
```sh

npm install --save-dev cypress
# [--save] is optional to save it in your packages file.

For deployment:
npm install -g firebase-tools
```

# How to run tests
## Running unit tests

```sh
npm run test
```

# Generating the coverage report
* Open jest.config.json and add the following content:

__Note__ : We have alredy included this part in our repo
``` js
{
 "setupFiles": ["<rootDir>/src/setupTests.js"],
 "testRegex": "/*.test.js$",
 "collectCoverage": true,
 "coverageReporters": ["lcov"],
 "coverageDirectory": "test-coverage",
 "coverageThreshold": {
  "global": {
  "branches": 0,
  "functions": 0,
  "lines": 0,
  "statements": 0
  }
 },
 "moduleDirectories": ["node_modules", "src"]
}
```
* Here we are telling jest to generate coverage reports for all files ending with .test.js as shown in testRegex property.

* Now to generate coverage report, execute following command from terminal:
```sh
npm run test -- --coverage --watchAll=false
```
* Once executed, we will see the total coverage for each test file

## Running E2E tests

```sh
npm run test:cypress
```

__Note :__ our repo doesn't include any unit tests
if you wanna make a unit test follow the following instructions:

create a folder for E2E tests as follow

*[theDefault]*

```sh
mkdir cypress
cd cypress
mkdir integration
cd integration
```
* running Cypress for the first time
npm run test:cypress

* Now, for your new Cypress cypress/integration/ folder, create a end-to-end testing file for your component
touch cypress/integration/componentName.e2e.js
where [componentName] is the component you wanna run the test for

* Next, add your test script to it 
* now you can run cypress to check your test script
```sh
npm run test:cypress
```

# How to run for developers.
## Before running:
  ----
## Production (default)
1.Go to the constants folder and open baseURL.js
2.Make sure the BASEURL is (http://52.14.190.202:8000/)

## Mock server
1.Go to the constants folder and open baseURL.js
2.Change the BASEURL to be (https://b9b31d99-4598-43e6-90a8-893c3988d489.mock.pstmn.io/)

## Development server

Navigate to http://localhost:3000/. The app will automatically reload 

# Running:

```sh
npm start
```


# How to run How to run / build for production.

* build the app
npm run build	
* after running this command a new folder will be created named [build]
* this folder contains all the neccessary files for deployment.
* pick any static host of your choice
The example illustrated is for [firebase] 
If you wanna deploy in any other static host just check out their documentation

* run the following
firebase login [for_your_account]
firebase init [Answer_the_questions_given_after_running_this_command]

* now you will find [firebase], [firebase.json] files created in your root directory
* now run:
firebase deploy
* Now the application is running on the server 
* you can visit the website by the link provided from the last command




# Functional documentation

* To install the jsdoc as a devDependency
```sh
npm i -D jsdoc
```
* Now create a jsdoc.json file as a config file to specify the following
1. where the jsdoc will look for the folders [source]
2. what files will it include [includePattern]
3. what files will it exclude [excludePattern]
4. certain authentications that have to do with recursing into folders, using markdowns, ...etc

* Add the following to the scripts in the package.json file 

```js
"doc" : "jsdoc -C jsdoc.json" 
```

* To run the documentation
```sh
npm run doc
```
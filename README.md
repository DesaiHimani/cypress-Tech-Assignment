# Cypress Technical Assignment

# Introduction
This project is an automated suite created as a Test assignment. Test Scenarios can be found in file BDD Scenario.feature in project root.


## Prerequisite
#### Must have:
    - 'npm' package manager
    - Chrome browser

## Project Setup

1. Clone the repo
```
    git clone https://github.com/DesaiHimani/cypress-Tech-Assignment
```

2. Install project dependecies listed in 'package.json'
```
    npm install package.json
```    


## Test Execution

### Local ::

### Standard Execution tests in a browser headless mode
```
    npm run cypress:execution
```    

### Execution and gneration of Allure Report  
```
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
```    

### Docker ::
Build Image
```
docker build -t <image_name>
```

Run Docker Container:
```
docker run -it <docker_image>
```
If you are running this on windows machines then instead of $PWD use absolute path of project location in below command
```
docker run -t -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:11.2.0 run
```

## CI:
See Github Actions


## Reports
Allur Report

### Report Snapshot 

![Allure Report](https://user-images.githubusercontent.com/79909192/204663224-f89153df-0b73-4860-ab8b-8b4bbd4e6fd0.PNG)


## Improvment Suggestions
- Use of Cucumber/Gherkin
- Improvment in structure of API test Methods 
- Setting up Parallel execution
- Execution on different Device/OS
- Emailable Execution Report post execution
- Visual Testing

**Note :** There is an existing issue with latest version for docker image cypress/included. See here : https://github.com/cypress-io/cypress-docker-images/issues/747 

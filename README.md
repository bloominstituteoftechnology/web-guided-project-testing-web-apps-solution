# Sprint 1 - Module 4 : Integration Testing Lesson Plan

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2001%20-%20Advanced%20React/Module%204%20-%20Testing%20Web%20Applications)

### [Previous Lesson Plan] (https://github.com/LambdaSchool/web-guided-porject-rtl-i-solution)

----

## Objectives

By the end of this module, learners should be able to:
* explain what automated testing is and its importance
* use react-testing-library for testing react components
* use react-testing-library to test user interactions with fireEvent

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-testing-web-apps)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-testing-web-apps-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/React-Testing-Contact-Form)
* 🐙 [Module Project Solution](#)

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-testing-web-apps
> 2. Navigate into the root folder and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> **Unit 3 | Sprint 1 | Module 1: React Lifecycle**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> 
> Slido: *insert slido link*
> 
> Guided Project: https://github.com/LambdaSchool/web-guided-project-testing-web-apps
> 
> Module Project: https://github.com/LambdaSchool/React-Testing-Contact-Form

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### What kind of function is this - toBeInTheDocument?
* Jest function
* **Assertion function**
* Describe function
* Query function

#### What function allows you to mimic browser events in your tests?
* fire
* eventFire
* **fireEvent**
* onClick

#### Which of the following would allow you to mimic a user typing into a text input?
* fireEvent.click(inputButton)
* fireEvent.click(firstNameInput, { target: { value: 'Tony' } })
* fireEvent.type(firstNameInput, { 
target: { value: 'Tony' } })
* **fireEvent.change(firstNameInput, { target: { value: 'Tony' } })**

#### Which query functions allow you to "wait" for state to be updated after an event has been fired off?
* getBy*
* All of the Above
* **findBy***
* queryBy

## Guided Project Outline

### Introduce Module:
* Present that this is the last day of the sprint.
* Remind that this is also a standalone lesson. 
* Present that we will be going into integration testing in React.

### Discuss Automated Testing:
* Helps to find bugs early in the process.
* Helps to document your code.
* Introduce the idea of Test Driven Development.
* Also testing is an important part of project deployment.

### Introduce Deployment Process:
* Testing is a part of a larger deployment pipeline.
* Testing allows for bugs in new code pushed in multi-developer projects does not break production.
* This is a part of the DevOpps engineers job.
* Different types of tests are a part of the deployment project.
* All are needed.

### Types of Testing:
* End to End - covers application wide paths.
* Integration - covers component or small component group paths.
* Unit Tests - covers indivisual functions, components or modules. Digs into implementation of a code.

### What do integration tests test?
* If a user does this, this behavoir happens.
* Sepecific to behavior, not implementation. Styling is not included. How it is coded is not included.
* Think in very specific terms.
* Write in full sentences when making your list of tests.
* Give students a two minutes to create a list of intergration tests for a site.

### How will we be testing?
* Arrange - Setup of the component being tested.
* Act - Execute the behavior we are testing.
* Assert - Extract response element and see if it is what we expect it to be.

### BREAK

### Tour our example application.
* Point out header element.
* Point out form element.
* Test for validation and display.
* Tour App.js
* Tour AnimalForm.js
* Tour package.json
  1. Note that testing library is added by default through create react app
  2. jest-dom holds assertions
  3. react holds virtual dom
  4. user-event holds library for interacting with user events.
  5. Note scripts and point out test script
* Run npm test.
* Show moving panel to the right in vs code.
* Note test runners.

### Creating test suites.
* Note that our test runner automatically find each test suite in our application, finds test files and runs the test inside of them.
* Note that tests fail if they don't have tests inside them.
* Setup App.test.js
  1. import react
  2. import render from /react.
  3. create tests.
* Note how it works.
* Note how describe works.
* Note that test suites can have .test or .spec formating.
* Note that for integration tests EACH COMPONENT SHOULD HAVE IT'S OWN TEST SUITE.

### Testing App.js
* Always test rendering of the component first.
* Note that the first pass of any test is if there is an error anywhere in the test or code.
* Setup test for the existance of the header component.
  1. Arrange - Setup the component
    * render(component)
    * Note that it returns a value
  2. Act - extract the part of the DOM we want to test.
    * We need to query a DOM element.
    * Using screen to query for items.
    * const header = screen.getByText("Add New Animal");
    * Note that not finding an element results in a test failing.
    * Note that there are many ways to query an element. [https://testing-library.com/docs/react-testing-library/cheatsheet/](https://testing-library.com/docs/react-testing-library/cheatsheet/)
    * Note the differences between get / find and query.
    * Note the types of query critria.

  3. Assert - Test the change.
    * expect() is a means to test an element along with a certain conditional.
    * Note that there are many ways to test an expect [https://jestjs.io/docs/en/expect](https://jestjs.io/docs/en/expect)
    * Note .not
  
### Testing with case insensitivity.
* Note that changing case breaks the test.
* Discuss why this might be a problem.
* Use regular expressions to add case insensitivity. /add new animal/i

### BREAK

### Create tests for AnimalForm
* Create new test suite.
* Add in imports.
* Add intro render component.

### Walk through our submission test
* Add a value to our text field
* Submit form.
* Note the output.

### Start to create test
* render component
* Walk through Act steps:
  1. get access to form fields.
  2. add text to fields
    * Query for text field using getByLabelText.
    * Add userEvent for typing in values. userEvent.type();
  3. get access to and click button.
    * Query for button by role.
    * Click button using userEvent.click();
* Walk through Assert step
  1. queryByText(/canine/i);
  2. Note the difference between query, get and find.


### Module Project Review
* [https://github.com/LambdaSchool/React-Testing-Contact-Form](https://github.com/LambdaSchool/React-Testing-Contact-Form)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 2:30 - 3:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
https://github.com/LambdaSchool/React-Testing-Contact-Form

Here is a review of today's material.

Key Terminology
* 📝 *expect* - [description](#)
* 📝 *fireEvent / userEvent* - [description](#)

Key Concepts
* 📝 *end-to-end tests* - [description](#)
* 📝 *integration tests* - [description](#)
* 📝 *unit tests* - [description](#)
* 📝 *react testing library* - [description](#)
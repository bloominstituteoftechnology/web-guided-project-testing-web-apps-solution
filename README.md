# Sprint 1 - Module 4 : Integration Testing Lesson Plan

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2001%20-%20Advanced%20React/Module%204%20-%20Testing%20Web%20Applications)

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
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 1 | **Module 1: React Lifecycle**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-testing-web-apps
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

## Guided Project - Animal Form

1. Introduce React Testing Library

- RTL allows us to run `integration tests` which is different than what we learned with Cypress (`end-to-end testing`)
- RTL philosophy 👉 From [the docs](https://testing-library.com/docs/react-testing-library/intro) The Problem and The Solution sections: "You want to write maintainable tests for your React components. As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down. ... This library encourages your applications to be more accessible and allows you to get your tests closer to using your components the way a user will, which allows your tests to give you more confidence that your application will work when a real user uses it."

2. Show what comes with RTL when you run CRA to start up a new app

- `package.json` - three libraries from `@testing-library/XXXXXXXX`
  - We will use `@testing-library/react` for rendering components and setting up our tests
  - We will use `@testing-library/jest-dom` for making better assertions (more to come on what assertions are)
  - We will NOT use this one today, but we will in the next testing module - `@testing-library/userEvent` for better event handling
- Show `App.test.js` to show what is imported, show how to run a test, and show how to render a component to set up the tests

#### Testing App.js

1. Make a new test
2. Talk about what is in `App.js` that we would want to test (the header)

Write the test 3. render the component 4. using `screen` to query for the element 5. console.log the element to show what you are grabbing from the created "DOM"

```js
test("renders the app header", () => {
  render(<App />);

  const header = screen.getByText("Add New Animal");

  console.log(header); // console logs in tests show up in the terminal
});
```

The test will pass, but it's good to make it fail. Explain that to students and show them how to make this test fail.

6. Show [this table](https://testing-library.com/docs/react-testing-library/cheatsheet#queries) and talk about the different query functions

7. Show students that the actual app has this text: "ADD NEW ANIMAL"

- This is a great place to explain that we want to test what users see, and not "implementation details"
- the header capitalization is different in the HTML than what our users see
- Change the test to query for what the user actually sees - `const header = screen.getByText("ADD NEW ANIMAL")
- The test will fail. That's because we're testing how the capitalization is _implemented_, not how the user sees the header
- Explain that we have "implemented" the capitalization with CSS, but it could be done with JS or HTML. If someone were to come change the "implementation" of the header, the test would fail, even if the user experience hasn't changed
- The philosophy of RTL is to be able to build resilient tests that won't break if UX stays the same, even if the implementation is different

7. Introduce the regex string pattern that will ignore casing (that pesky implementation details)

```js
test("renders the app header", () => {
  render(<App />);

  const header = screen.getByText(/add new animal/i); // regex string - i means case insensitive
});
```

8. Write the assertion

- define assertions // TODO find assertion definition
- show what (jest assertions)[https://jestjs.io/docs/en/expect] are available
- show (jest-dom extra assertions)[https://github.com/testing-library/jest-dom#table-of-contents]

```js
test("renders the app header", () => {
  render(<App />);

  const header = screen.getByText(/add new animal/i); // regex string - i means case insensitive

  expect(header).toBeInTheDocument();

  // other possible assertions
  expect(header).toBeTruthy();
  expect(header).toHaveContent(/add new animal/i);

  // negative assertions
  expect(header).not.toBeFalsy();
  expect(header).not.toHaveContent(/add new bird/i);
});
```

_note: not all these assertions are necessary, but it's good for students to see that there are many ways to write the assertion statements_

#### Testing AnimalForm.js

1. Create a new file - `AnimalForm.test.js` (This is a good place to talk about naming test files with `.test` or `.spec`)

2. Add the same imports, and create the basic `renders without errors` test

3. Open the app at this point and ask students what the user flow is that we want to test?

```
❓What is the user flow in this app that we want to test?
```

Possible answer:
_Fill in the inputs, push `Submit!` button, see animal added to the list_

4. Start a new test that will be for this user flow (name it how you'd like). I like to use comments to show the game plan as below:

```js
test("user can fill out and submit form", () => {
  // render component
  // query for each input
  // fill out the form
  // assert that the form inputs have values (if you want)
  // Submit the form (Careful here... state changes can happen asynchronously)
  // assert that the animal has been added to the list
});
```

5. Let students help with the start of this test:

- Render `AnimalForm`
- query for inputs (Talk about why `screen.getByLabelText()` is the preferred method here)

```js
test("user can fill out and submit form", () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form

  // assert that the form inputs have values (if you want)

  // Submit the form (Careful here... state changes can happen asynchronously)

  // assert that the animal has been added to the list
});
```

6. Now explain the `fireEvent` function. (It will need to be imported)

7. Run events to fill in the form

```js
test("user can fill out and submit form", () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form
  fireEvent.change(speciesInput, { target: { value: "Grizzly Bear" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, {
    target: { value: "just a giant teddy bear" },
  });

  // assert that the form inputs have values (if you want)

  // Submit the form (Careful here... state changes can happen asynchronously)

  // assert that the animal has been added to the list
});
```

8. Mention here that, if they want, they can write an assertion for checking the form values. This would be more important for a situation like a form being filled out automatically from props, or from an API call, etc, not necessarily this situation.

```js
test("user can fill out and submit form", () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form
  fireEvent.change(speciesInput, { target: { value: "Grizzly Bear" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, {
    target: { value: "just a giant teddy bear" },
  });

  // assert that the form inputs have values (if you want)
  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ... etc

  // Submit the form (Careful here... state changes can happen asynchronously)

  // assert that the animal has been added to the list
});
```

9. Now let's submit the form using the button. Have students try this out on their own, then demonstrate it yourself.

```js
test("user can fill out and submit form", () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form
  fireEvent.change(speciesInput, { target: { value: "Grizzly Bear" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, {
    target: { value: "just a giant teddy bear" },
  });

  // assert that the form inputs have values (if you want)
  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ... etc

  // Submit the form (Careful here... state changes can happen asynchronously)
  const button = screen.getByRole("button", { name: /submit!/i });
  fireEvent.click(button);

  // assert that the animal has been added to the list
});
```

10. Final step is to add the assertions. Students will want to use `screen.getByText()` to query for the animal that has been added to the list. However, since clicking the submit button will update state, it's safer to use `screen.findByText()`. Note that we use async/await for this. Students have not seen that before, so you can explain

```js
test("user can fill out and submit form", async () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form
  fireEvent.change(speciesInput, { target: { value: "Grizzly Bear" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, {
    target: { value: "just a giant teddy bear" },
  });

  // assert that the form inputs have values (if you want)
  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ... etc

  // Submit the form (Careful here... state changes can happen asynchronously)
  const button = screen.getByRole("button", { name: /submit!/i });
  fireEvent.click(button);

  // assert that the animal has been added to the list
  const newAnimal = await screen.findByText(/grizzly bear/i);
});
```


### Module Project Review
* [https://github.com/LambdaSchool/React-Testing-Contact-Form](https://github.com/LambdaSchool/React-Testing-Contact-Form)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 3:30 - 4:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
https://github.com/LambdaSchool/React-Testing-Contact-Form

Here is a review of today's material.

Key Terminology
* 📝 *term* - [description](#)

Key Concepts
* 📝 *concept* - [description](#)
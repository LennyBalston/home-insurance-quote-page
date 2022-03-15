# Home Insurance Quote Summary Page

* This Quote Summary Page displays quote details.
* Users can toggle between monthly and annual payment terms.
* Users can also select and remove add-ons to customise their quote.

## Coding
* A **Redux** store is used for the user selection data.
* **localStorage** was also used to persist user selections.
* **.env** variables are used for all the static text on the page and the API endpoints.
* A custom **useFetch** hook was created to fetch data from the 2 APIs.
* **styled-components** is used for UI components.
* cypress tests:
  * check the rendering of the quote reference number
  * check the rendering of the quote price
  * ensure correct prices are displayed at both quote and add-on level when toggling between monthly and annual payment terms
  * check that the quote price is accurately updated when add-ons are selected or removed


## Tech Stack
* [Create React App](https://github.com/facebook/create-react-app)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Styled-components](https://styled-components.com/)
* [JSON server](https://github.com/typicode/json-server)
* [cypress](https://www.cypress.io/)


## Getting Started
First, install your dependencies.
```
npm install
```

Next, start the mock API server.
```
npm run json-server
```

Finally, start the app server.
```
npm start
```

The Quote Summary Page will be available on port 3000:
* http://localhost:3000

The APIs will be available on port 4000:
* http://localhost:4000/quote
* http://localhost:4000/addons

## Running tests
The app server will need to be running when you run the tests.
```
npm test
```

This starts the cypress test runner. Select your test to execute it and see the rendered output.
See cypress for more information about [running tests](https://docs.cypress.io/guides/component-testing/framework-configuration#React-Create-React-App).


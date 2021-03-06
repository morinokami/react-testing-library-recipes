import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import User from './user'

test('renders user data', async () => {
  const fakeUser = {
    name: 'Joni Baez',
    age: '32',
    address: '123, Charming Avenue',
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    }),
  )

  const { container } = render(<User id="123" />)

  await waitForElementToBeRemoved(() => screen.getByText('loading...'))
  expect(container.querySelector('summary')).toHaveTextContent(fakeUser.name)
  expect(container.querySelector('strong')).toHaveTextContent(fakeUser.age)
  expect(container).toHaveTextContent(fakeUser.address)
})

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import User from "./user";

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders user data", async () => {
//   const fakeUser = {
//     name: "Joni Baez",
//     age: "32",
//     address: "123, Charming Avenue"
//   };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeUser)
//     })
//   );

//   // Use the asynchronous version of act to apply resolved promises
//   await act(async () => {
//     render(<User id="123" />, container);
//   });

//   expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//   expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//   expect(container.textContent).toContain(fakeUser.address);

//   // remove the mock to ensure tests are completely isolated
//   global.fetch.mockRestore();
// });

import React from 'react'
import { render } from '@testing-library/react'
import pretty from 'pretty'

import Hello from './hello'

test('should render a greeting', () => {
  const { container, rerender } = render(<Hello />)
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span>Hey, stranger</span>"`,
  )

  rerender(<Hello name="Jenny" />)
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Jenny!</h1>"`,
  )

  rerender(<Hello name="Margaret" />)
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Margaret!</h1>"`,
  )
})

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import pretty from "pretty";

// import Hello from "./hello";

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

// it("should render a greeting", () => {
//   act(() => {
//     render(<Hello />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });

//   expect(
//     pretty(container.innerHTML)
//   ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
// });

import React from 'react'
import { render } from '@testing-library/react'

import Hello from './hello'

test('renders with or without a name', () => {
  const { getByText, rerender } = render(<Hello />)
  expect(getByText('Hey, stranger')).toBeInTheDocument()

  rerender(<Hello name="Jenny" />)
  expect(getByText('Hello, Jenny!')).toBeInTheDocument()

  rerender(<Hello name="Margaret" />)
  expect(getByText('Hello, Margaret!')).toBeInTheDocument()
})

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

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

// it("renders with or without a name", () => {
//   act(() => {
//     render(<Hello />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Margaret!");
// });

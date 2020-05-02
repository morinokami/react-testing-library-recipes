import React from 'react'
import { render } from '@testing-library/react'

import Hello from './hello'

test('renders with or without a name', () => {
  const { container, rerender } = render(<Hello />)
  expect(container).toHaveTextContent('Hey, stranger')

  rerender(<Hello name="Jenny" />)
  expect(container).toHaveTextContent('Hello, Jenny!')

  rerender(<Hello name="Margaret" />)
  expect(container).toHaveTextContent('Hello, Margaret!')
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

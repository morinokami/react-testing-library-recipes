import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Card from './card'

jest.useFakeTimers()

test('should select null after timing out', () => {
  const onSelect = jest.fn()
  render(<Card onSelect={onSelect} />)

  jest.advanceTimersByTime(100)
  expect(onSelect).not.toHaveBeenCalled()

  jest.advanceTimersByTime(5000)
  expect(onSelect).toHaveBeenCalledWith(null)
})

test('should cleanup on being removed', () => {
  const onSelect = jest.fn()
  const { unmount } = render(<Card onSelect={onSelect} />)

  jest.advanceTimersByTime(100)
  expect(onSelect).not.toHaveBeenCalled()

  unmount()
  jest.advanceTimersByTime(5000)
  expect(onSelect).not.toHaveBeenCalled()
})

test('should accept selections', () => {
  const onSelect = jest.fn()
  const { getByTestId } = render(<Card onSelect={onSelect} />)

  fireEvent.click(getByTestId('2'))

  expect(onSelect).toHaveBeenCalledWith(2)
})

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Card from "./card";

// jest.useFakeTimers();

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

// it("should select null after timing out", () => {
//   const onSelect = jest.fn();
//   act(() => {
//     render(<Card onSelect={onSelect} />, container);
//   });

//   // move ahead in time by 100ms
//   act(() => {
//     jest.advanceTimersByTime(100);
//   });
//   expect(onSelect).not.toHaveBeenCalled();

//   // and then move ahead by 5 seconds
//   act(() => {
//     jest.advanceTimersByTime(5000);
//   });
//   expect(onSelect).toHaveBeenCalledWith(null);
// });

// it("should cleanup on being removed", () => {
//   const onSelect = jest.fn();
//   act(() => {
//     render(<Card onSelect={onSelect} />, container);
//   });
//   act(() => {
//     jest.advanceTimersByTime(100);
//   });
//   expect(onSelect).not.toHaveBeenCalled();

//   // unmount the app
//   act(() => {
//     render(null, container);
//   });
//   act(() => {
//     jest.advanceTimersByTime(5000);
//   });
//   expect(onSelect).not.toHaveBeenCalled();
// });

// it("should accept selections", () => {
//   const onSelect = jest.fn();
//   act(() => {
//     render(<Card onSelect={onSelect} />, container);
//   });

//   act(() => {
//     container
//       .querySelector("[data-testid='2']")
//       .dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(onSelect).toHaveBeenCalledWith(2);
// });

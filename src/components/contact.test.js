import React from 'react'
import { render } from '@testing-library/react'

import Contact from './contact'
import MockedMap from './map'

jest.mock('./map', () => {
  return function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    )
  }
})

test('should render contact information', () => {
  const center = { lat: 0, long: 0 }
  const { getByTestId } = render(
    <Contact
      name="Joni Baez"
      email="test@example.com"
      site="http://test.com"
      center={center}
    />,
  )

  expect(getByTestId('email')).toHaveAttribute(
    'href',
    'mailto:test@example.com',
  )
  expect(getByTestId('site')).toHaveAttribute('href', 'http://test.com')
  expect(getByTestId('map')).toHaveTextContent('0:0')
})

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import Contact from "./contact";
// import MockedMap from "./map";

// jest.mock("./map", () => {
//   return function DummyMap(props) {
//     return (
//       <div data-testid="map">
//         {props.center.lat}:{props.center.long}
//       </div>
//     );
//   };
// });

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

// it("should render contact information", () => {
//   const center = { lat: 0, long: 0 };
//   act(() => {
//     render(
//       <Contact
//         name="Joni Baez"
//         email="test@example.com"
//         site="http://test.com"
//         center={center}
//       />,
//       container
//     );
//   });

//   expect(
//     container.querySelector("[data-testid='email']").getAttribute("href")
//   ).toEqual("mailto:test@example.com");

//   expect(
//     container.querySelector('[data-testid="site"]').getAttribute("href")
//   ).toEqual("http://test.com");

//   expect(container.querySelector('[data-testid="map"]').textContent).toEqual(
//     "0:0"
//   );
// });

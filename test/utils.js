import { render } from '@testing-library/react';

const customRender = (ui, options) => {
  const {
    container,
    ...others
  } = render(ui, { ...options });
  return {
    node: container.firstChild,
    container,
    ...others,
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

import { FormContext } from './FormContext';

const withForm = (Component) => function Wrapped(props) {
  return (
    <FormContext.Consumer>
      {
        ({
          formData,
          onFormChange,
          onFormSubmit,
        }) => (
          <Component
            formData={formData}
            onFormChange={onFormChange}
            onFormSubmit={onFormSubmit}
            {...props}
          />
        )

      }
    </FormContext.Consumer>
  );
};

export default withForm;

import { FormContext } from './FormContext';

const withForm = (Component) => function wrapped(props) {
  return (
    <FormContext.Consumer>
      {
        ({
          formData,
          formErrors,
          onFormChange,
          onFormSubmit,
        }) => (
          <Component
            formData={formData}
            formErrors={formErrors}
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

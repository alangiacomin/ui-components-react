import { createContext, useContext } from 'react';

const FormContext = createContext({
  formData: {},
  formErrors: {},
  onFormChange: () => {},
  onFormSubmit: () => {},
});

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext can\'t be used outside FormContext.Provider');
  }
  return context;
};

export {
  FormContext,
  useFormContext,
};

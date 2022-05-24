import PropTypes from 'prop-types';
import { forwardRef, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import { FormContext } from './FormContext';
import CustomPropTypes from '../../common/CustomPropTypes';

const Form = forwardRef(({
  className, data, errors, onChange, onSubmit, children,
}, ref) => {
  const cns = useMemo(() => classnames(className), [className]);

  const providerValue = useMemo(() => ({
    formData: data,
    formErrors: errors,
    onFormChange: onChange,
    onFormSubmit: onSubmit,
  }), [data, errors, onChange, onSubmit]);

  const submitForm = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    onSubmit && onSubmit();
  }, [onSubmit]);

  return (
    <FormContext.Provider value={providerValue}>
      <form className={cns} onSubmit={submitForm} ref={ref}>
        {children}
      </form>
    </FormContext.Provider>
  );
});

Form.propTypes = {
  data: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: CustomPropTypes.children,
};

Form.defaultProps = {
  data: {},
  errors: {},
  className: null,
  onSubmit: null,
  children: null,
};

Form.displayName = 'Form';

export default Form;

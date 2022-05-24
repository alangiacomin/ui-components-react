import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import classnames from 'classnames';
import { useFormContext } from '../Form/FormContext';
import CustomPropTypes from '../../common/CustomPropTypes';

const Input = ({
  className, id, name, type, autoFocus, onBlur: extendedOnBlur,
}) => {
  const { formData, onFormChange } = useFormContext();
  const defaultValue = '';
  const [value, setValue] = useState(defaultValue);
  const cns = useMemo(() => classnames(className), [className]);
  const inputRef = useRef();

  /**
   * Set autofocus on first render
   */
  useEffect(() => {
    if (autoFocus) {
      // trucco per eslint che non riconosce focus() metodo di current
      const element = inputRef.current || { focus: null };
      element.focus && element.focus();
    }
  }, [autoFocus]);

  /**
   * Update current field value
   */
  useEffect(() => {
    setValue(formData[name] ?? defaultValue);
  }, [name, formData]);

  const onBlur = useCallback((event) => {
    onFormChange({ [name]: value });
    extendedOnBlur && extendedOnBlur(event);
  }, [name, extendedOnBlur, onFormChange, value]);

  const onChange = useCallback((event) => {
    setValue(event.target.value ?? defaultValue);
  }, []);

  return (
    <input
      id={id}
      className={cns}
      ref={inputRef}
      onBlur={onBlur}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  className: CustomPropTypes.className,
  id: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  autoFocus: false,
  onBlur: null,
  className: null,
  id: null,
  type: null,
};

export default Input;

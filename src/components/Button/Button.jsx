import PropTypes from 'prop-types';
import { useMemo } from 'react';
import classnames from 'classnames';
import CustomPropTypes from '../../common/CustomPropTypes';

const Button = ({
  className, isSubmit, loading, onClick, children,
}) => {
  const buttonProps = useMemo(() => ({
    className: classnames(className),
    onClick: isSubmit ? null : onClick,
  }), [className, isSubmit, onClick]);

  return isSubmit
    ? (
      <button type="submit" {...buttonProps} disabled={loading}>
        {children}
      </button>
    )
    : (
      <button type="button" {...buttonProps}>
        {children}
      </button>
    );
};

Button.propTypes = {
  isSubmit: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: CustomPropTypes.children,
};

Button.defaultProps = {
  isSubmit: false,
  loading: false,
  onClick: null,
  children: null,
  className: null,
};

export default Button;

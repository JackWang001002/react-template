import React from 'react';
interface IProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label?: string;
}

export const Button: React.FC<IProps> = ({
  primary,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;

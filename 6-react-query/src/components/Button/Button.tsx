import type { PropsWithChildren, ReactElement } from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

type ButtonProps = {
  type?: ButtonType;
  onClick?: () => void;
};

function Button({
  children,
  type,
  onClick
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <button
      className="bg-orange-500 border border-black border-solid font-semibold px-4 py-2 rounded hover:bg-orange-400"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

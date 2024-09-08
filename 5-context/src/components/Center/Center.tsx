import type { PropsWithChildren, ReactElement } from 'react';

type CenterProps = {
  maxInlineSize: string;
};

const Center = ({
  children,
  maxInlineSize
}: PropsWithChildren<CenterProps>): ReactElement => {
  return (
    <div className="box-content me-auto ms-auto" style={{ maxInlineSize }}>
      {children}
    </div>
  );
};

export default Center;

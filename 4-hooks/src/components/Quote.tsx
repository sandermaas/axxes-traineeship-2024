import type { PropsWithChildren } from 'react';

function Quote({ children }: PropsWithChildren) {
  return <p style={{ fontStyle: 'italic' }}>{children}</p>;
}

export default Quote;

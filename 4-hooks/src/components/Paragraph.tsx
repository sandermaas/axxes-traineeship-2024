import type { PropsWithChildren } from 'react';

function Paragraph({ children }: PropsWithChildren) {
  return <p>{children}</p>;
}

export default Paragraph;

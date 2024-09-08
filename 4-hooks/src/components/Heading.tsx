import type { PropsWithChildren } from 'react';

type HeadingElement = Extract<
  keyof JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingElements: Record<HeadingLevel, HeadingElement> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

type HeadingProps = {
  level: HeadingLevel;
};

function Heading({ children, level }: PropsWithChildren<HeadingProps>) {
  const Element = headingElements[level];

  return <Element>{children}</Element>;
}

export default Heading;

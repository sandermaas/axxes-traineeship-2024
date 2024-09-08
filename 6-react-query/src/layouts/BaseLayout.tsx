import type { PropsWithChildren, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { Center } from '../components';

function BaseLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <>
      <header className="bg-axxes-dark">
        <Center maxInlineSize="90%">
          <Link to="/">
            <img className="max-h-20" src="/axxes.jpg" />
          </Link>
        </Center>
      </header>

      <main className="py-10">
        <Center maxInlineSize="90%">{children}</Center>
      </main>
    </>
  );
}

export default BaseLayout;

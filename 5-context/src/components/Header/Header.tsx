import type { ReactElement } from 'react';

import { Center } from '../Center';

const Header = (): ReactElement => {
  return (
    <header className="bg-axxes-dark">
      <Center maxInlineSize="90%">
        <img className="max-h-20" src="/axxes.jpg" />
      </Center>
    </header>
  );
};

export default Header;

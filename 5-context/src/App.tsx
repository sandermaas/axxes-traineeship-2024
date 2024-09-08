import type { ReactElement } from 'react';

import { Center } from './components/Center';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';

const App = (): ReactElement => {
  return (
    <>
      <Header />

      <main className="p-10">
        <Center maxInlineSize="20rem">
          <LoginForm onSubmit={(formValues) => console.log(formValues)} />
        </Center>
      </main>
    </>
  );
};

export default App;

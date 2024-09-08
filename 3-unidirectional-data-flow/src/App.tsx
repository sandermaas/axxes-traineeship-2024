import Table from './components/Table';

function App() {
  return (
    <div>
      <Table
        columns={[
          { key: 'firstName', name: 'First name' },
          { key: 'lastName', name: 'Last name' }
        ]}
        items={[{ id: 1, firstName: 'John', lastName: 'Doe' }]}
      />
    </div>
  );
}

export default App;

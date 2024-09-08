import type { ReactElement } from 'react';

import type { CarFormValues } from '../components';
import type { Car } from '../types';

import { useEffect, useState } from 'react';

import { CarForm, Table } from '../components';
import { BaseLayout } from '../layouts';

function Admin(): ReactElement {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetch('/api/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <BaseLayout>
      {isError && (
        <p>
          Something has gone wrong, please try refreshing the page at a later
          time
        </p>
      )}

      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <div className="flex gap-10">
          <div className="basis-1/2">
            <AdminTable cars={cars} />
          </div>

          <div className="basis-1/2 border border-black border-solid p-6">
            <AdminForm onSubmit={(car) => setCars([...cars, car])} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
}

type AdminTableProps = {
  cars: Car[];
};

function AdminTable({ cars }: AdminTableProps): ReactElement {
  return (
    <Table
      columns={[
        { key: 'category', name: 'Category' },
        { key: 'brand', name: 'Brand' },
        { key: 'model', name: 'Model' }
      ]}
      items={cars}
    />
  );
}

type AdminFormProps = {
  onSubmit: (car: Car) => void;
};

function AdminForm({ onSubmit }: AdminFormProps): ReactElement {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function submitCarForm(formValues: CarFormValues) {
    setIsError(false);
    setIsLoading(true);

    fetch('/api/cars', {
      body: JSON.stringify(formValues),
      method: 'POST'
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (isError) {
    return <p>Something has gone wrong, please try again</p>;
  }

  if (isLoading) {
    return <p>Submitting..</p>;
  }

  return <CarForm onSubmit={submitCarForm} />;
}

export default Admin;

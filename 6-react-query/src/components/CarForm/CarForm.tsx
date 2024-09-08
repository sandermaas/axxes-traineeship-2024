import type { ReactElement } from 'react';

import { useState } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';

export type CarFormValues = {
  brand: string;
  category: string;
  model: string;
};

type CarFormProps = {
  onSubmit: (formValues: CarFormValues) => void;
};

function CarForm({ onSubmit }: CarFormProps): ReactElement {
  const [formValues, setFormValues] = useState<CarFormValues>({
    brand: '',
    category: '',
    model: ''
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formValues);
      }}
    >
      <Input
        label="Category"
        name="category"
        type="text"
        value={formValues.category}
        onChange={(value) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            category: value
          }))
        }
      />
      <Input
        label="Brand"
        name="brand"
        type="text"
        value={formValues.brand}
        onChange={(value) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            brand: value
          }))
        }
      />
      <Input
        label="Model"
        name="model"
        type="text"
        value={formValues.model}
        onChange={(value) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            model: value
          }))
        }
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default CarForm;

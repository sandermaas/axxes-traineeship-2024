import type { Car } from '../types';

import { delay, http, HttpResponse } from 'msw';

import { CarCategory } from '../types';
import { isCarCategory, generateRandomNumber } from '../utils';

const carsCollection: Car[] = [
  {
    brand: 'BMW',
    category: CarCategory.A,
    id: 829328,
    model: 'X5'
  },
  {
    brand: 'Audi',
    category: CarCategory.A,
    id: 417949,
    model: 'A7'
  },
  {
    brand: 'BMW',
    category: CarCategory.B,
    id: 373547,
    model: 'X3'
  },
  {
    brand: 'Audi',
    category: CarCategory.B,
    id: 961715,
    model: 'A5'
  },
  {
    brand: 'BMW',
    category: CarCategory.C,
    id: 594322,
    model: 'X1'
  },
  {
    brand: 'Audi',
    category: CarCategory.C,
    id: 782505,
    model: 'A3'
  }
];

export const handlers = [
  http.delete('/api/cars/:id', async ({ params }) => {
    const id = parseInt(params.id.toString());

    await delay();

    if (isNaN(id)) {
      return new HttpResponse(null, { status: 400 });
    }

    const deletedCarIndex = carsCollection.findIndex((c) => c.id === id);
    if (deletedCarIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    const deletedCar = carsCollection[deletedCarIndex];

    carsCollection.splice(deletedCarIndex, 1);

    return HttpResponse.json(deletedCar);
  }),
  http.get('/api/categories', async () => {
    await delay();

    return HttpResponse.json(Object.values(CarCategory));
  }),
  http.get('/api/cars', async () => {
    await delay();

    return HttpResponse.json(carsCollection);
  }),
  http.get('/api/cars/:category', async ({ params }) => {
    const { category } = params;

    await delay();

    if (!isCarCategory(category)) {
      return new HttpResponse(null, { status: 400 });
    }

    const cars = carsCollection.filter((c) => c.category === category);

    return HttpResponse.json(cars);
  }),
  http.post('/api/cars', async ({ request }) => {
    await delay();

    const data = await request.json();
    const newCar = {
      ...(data as Car),
      id: generateRandomNumber(111111, 999999)
    };

    carsCollection.push(newCar);

    return HttpResponse.json(newCar, { status: 201 });
  }),
  http.put('/api/cars/:id', async ({ params, request }) => {
    const id = parseInt(params.id.toString());

    await delay();

    const carIndex = carsCollection.findIndex((c) => c.id === id);
    if (carIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    const data = await request.json();
    const updatedCar = {
      ...carsCollection[carIndex],
      ...(data as Car)
    };

    carsCollection[carIndex] = updatedCar;

    return HttpResponse.json(updatedCar);
  })
];

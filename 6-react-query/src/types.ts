export enum CarCategory {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type Car = {
  brand: string;
  category: CarCategory;
  id: number;
  model: string;
};

import { CarCategory } from './types';

export function generateRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isCarCategory(
  value: string | readonly string[]
): value is CarCategory {
  if (
    value === CarCategory.A ||
    value === CarCategory.B ||
    value === CarCategory.C
  ) {
    return true;
  }

  return false;
}

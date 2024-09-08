# Axxes Traineeship 2024 - React

### Exercise 1 (JSX)

1. Create a `Table` component which accepts the following props:

   - columns: `Column[]`
   - items: `Record<string, ReactNode>[]`

   The `Column` type should have a `key` property to match the right value in each of the items. An item represents a row and should have values for all the column keys.

2. Add the `Table` component to `App` and use the data from `MOCK_DATA` to fill it

3. Alternate the background color of the rows between 2 colors

4. Clicking on a row should display an alert showing the data of the row item

##### Useful links

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

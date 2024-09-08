# Axxes Traineeship 2024 - React

### Exercise 6 (React Query)

##### Integrate the react-query library in the project

At the moment, all the data fetching is resolved in `useEffect` hooks. We want to get rid of this pattern and use `react-query` instead.

1. Add a `QueryClientProvider` to `main.tsx`.

2. Create a new `useCars` hook which wraps `useQuery` specifically for the GET `/api/cars` endpoint.

3. Replace the `useEffect` hook with the `/api/cars` fetch in the `Admin` route with the `useCars` hook.

4. Create a new `useCreateCar` hook which wraps `useMutation` for the POST `/api/cars` endpoint. Add an `onSuccess` option event which will update the cache of the `useCars` query.

5. Replace the `submitCarForm` function in `AdminForm` with the `useCreateCar` hook.

##### Fetching strategy for the home route

1. Create an `Accordion` component.

2. Create a `useCategories` hook which wraps `useQuery` for the GET `/api/categories` endpoint.

3. Add the `Accordion` component and the `useCategories` hook to the `Home` route. Use the data from `useCategories` to create a panel for each category. All panels should be closed by default.

4. Implement a prefetch strategy for the `Accordion`:

   - When the categories are fetched all the cars from the first category should be fetched as well and added to the cache.
   - When the first panel opens the items from the next one should be added to the cache. This logic needs to be repeated for all panels.

5. Display the cars in the panels. You can choose how you want to do this.

##### Extend the Table functionality

1. Extend the `Table` component with a sort feature: when you click the column title it should sort.

2. Make rows selectable. Only one row can be selected.

##### Add more CRUD to the admin route

1. Add a delete `Button` on the `Admin` route. It should only be active if a row is selected.

2. Add an edit `Button` on the `Admin` route. It should only be active if a row is selected and use the `CarForm` to update an item.

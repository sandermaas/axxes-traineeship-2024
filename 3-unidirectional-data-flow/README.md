# Axxes Traineeship 2024 - React

### Exercise 3 (Unidirectional data flow)

1. Create an `Input` component which should be a combination of a `<label>` and an `<input>`. It should accept the following props:

   - label: `string`
   - type: `HTMLInputTypeAttribute`
   - value: `string`
   - onChange: `(value: string) => void`

2. Create a `UserForm` component with 3 fields: first name, last name and email (each field is an `Input` component).

3. The `UserForm` should have default values for the fields and an `onSubmit` event as props.

4. Add the `UserForm` to the `App`.

5. Use the `Table` component to display users.

6. When the `onSubmit` event triggers the new user should become visible in the table.

##### Useful links

[https://maxschmitt.me/posts/react-components-controlled-uncontrolled](https://maxschmitt.me/posts/react-components-controlled-uncontrolled)

[https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

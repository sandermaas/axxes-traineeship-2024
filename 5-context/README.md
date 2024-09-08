# Axxes Traineeship 2024 - React

### Exercise 5 (Context)

1. Create a context which contains the authentication state and exposes the following:

   - An `AuthProvider` component which sets the boundary of the context and holds the state
   - A `useAuthentication` hook for all components that want to access the authentication state

2. Create an `Authenticated` component which **only** renders its children when a user is authenticated

3. Create an `Unauthenticated` component which **only** renders its children when a user is **NOT** authenticated

4. The `App` should switch content depending on wheter there is a user authenticated. If not, the `LoginForm` should be displayed. If there is an authenticated user, show a welcome message and a logout button.

5. Extend the `Header` component so it shows the name of the user when authenticated

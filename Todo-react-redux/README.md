# To do list
A simple to do list app built with react hooks, and redux

## redux state management
Redux store
  - src/app/store.js - configureStore

Initialize store in react components
  - src/index.js - provider / store

Redux state slice
  - src/features/counter/counterSlice.js - createSlice
    - name: string, value: number

Add slice reducers to the store
  - src/app/store.js

Use redux state and actions in react components
  - scr/todo.jsx

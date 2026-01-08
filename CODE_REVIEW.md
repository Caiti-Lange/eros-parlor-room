# Code Review: Eros' Parlor Room

## BACKEND ISSUES

### HIGH PRIORITY

1. **SQL syntax error in schema.sql**

   - **Location**: `Back-End/db/schema.sql:8`
   - **Issue**: Missing a comma after `username text NOT NULL UNIQUE`. The schema will fail to execute.

2. **SQL syntax error in schema.sql**

   - **Location**: `Back-End/db/schema.sql:19`
   - **Issue**: Has a trailing comma after the foreign key constraint, which will cause a syntax error.

3. **Incorrect import path in auth.js**

   - **Location**: `Back-End/api/auth.js:10`
   - **Issue**: Imports from `#db/queries/users` but the actual file is at `Back-End/db/queries.js/user.js`. The import path does not match the file structure.

### MEDIUM PRIORITY

4. **Package.json script issues**

   - **Location**: `Back-End/package.json:11,28`
   - **Issue**: The `db:schema` and `db:seed` scripts are in the wrong location (should be in "scripts" object, not at root level).

5. **Seeds.js uses deprecated faker method**
   - **Location**: `Back-End/db/seeds.js:38`
   - **Issue**: Uses `faker.title.title()` which may not exist. Should use appropriate faker method for origin/title.

## FRONTEND ISSUES

### HIGH PRIORITY

1. **App.jsx imports Express server code**

   - **Location**: `Front-End/src/App.jsx:6-8`
   - **Issue**: Imports and creates an Express app in a React component file. This is incorrect - Express should only be in the backend.

2. **App.jsx uses undefined router variable**

   - **Location**: `Front-End/src/App.jsx:17`
   - **Issue**: References `router` which is never defined or imported. `RouterProvider` requires a router object created with `createBrowserRouter`.

3. **App.jsx incorrect component structure**

   - **Location**: `Front-End/src/App.jsx:18`
   - **Issue**: Uses `Navbar` as a wrapper component but it's not designed to accept children. The `Routes` should be direct children of `BrowserRouter`.

4. **Incorrect import in App.jsx**

   - **Location**: `Front-End/src/App.jsx:4`
   - **Issue**: Imports `Register` from `"./auth/Register.js"` but the actual file is `Registration.jsx`.

5. **AuthContext incorrect API endpoints**

   - **Location**: `Front-End/src/auth/AuthContext.jsx:14,27`
   - **Issue**: Calls `/users/register` and `/users/login`, but these don't match the backend route structure (which should be `/auth/register` and `/auth/login`).

6. **Login.jsx incorrect form handler**

   - **Location**: `Front-End/src/auth/Login.jsx:27`
   - **Issue**: Uses `action={tryLogin}` but `action` expects a string URL. Should use `onSubmit` with event.preventDefault().

7. **Registration.jsx incorrect form handler**

   - **Location**: `Front-End/src/auth/Registration.jsx:28`
   - **Issue**: Uses `action={tryRegister}` but should use `onSubmit` with proper event handling.

8. **Navbar.jsx imports non-existent PageContext**

   - **Location**: `Front-End/src/layout/Navbar.jsx:3,7`
   - **Issue**: References `PageContext` which doesn't exist. Should use `ParlorContext` instead.

9. **ParlorRoom.jsx exports wrong component name**

   - **Location**: `Front-End/src/components/ParlorRoom.jsx:5`, `Front-End/src/App.jsx:1`
   - **Issue**: Exports `Muses` but the file is imported as `ParlorRoom`. Component name mismatch.

10. **ParlorRoom component JSX syntax error**

    - **Location**: `Front-End/src/components/ParlorRoom.jsx:22`
    - **Issue**: Has a space in `< div` which is invalid JSX syntax.

11. **ParlorRoom component incorrect property names**

    - **Location**: `Front-End/src/components/ParlorRoom.jsx:26,31`
    - **Issue**: Uses `muse.portrait` and `muse.details` but the schema defines `img_url` and no `details` field.

12. **Missing loading states**

    - **Location**: Frontend API calls
    - **Issue**: No loading indicators while API requests are in progress.

13. **Incorrect import in main.jsx**
    - **Location**: `Front-End/src/main.jsx:5`
    - **Issue**: Imports `BrowserRouter` from `"react-router"` but should be from `"react-router-dom"`.

### MEDIUM PRIORITY

14. **Login/Registration navigation uses onClick on anchor**

    - **Location**: `Front-End/src/auth/Login.jsx:39`, `Front-End/src/auth/Registration.jsx:40-42`
    - **Issue**: Uses `onClick` on anchor tags instead of proper React Router `Link` or `NavLink` components.

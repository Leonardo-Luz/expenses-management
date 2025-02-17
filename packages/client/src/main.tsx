import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CategoriesList, CategoriesRegister, Error, Home, TransactionsList, TransactionsRegister, UsersList, UsersRegister } from './routes'
import { TransactionsUpdate } from './routes/TransactionsUpdate.route.tsx'
import { CategoriesUpdate } from './routes/CategoriesUpdate.route.tsx'
import { UsersUpdate } from './routes/UsersUpdate.route.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < App />,
    errorElement: < Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/transactions',
        element: <TransactionsList />
      },
      {
        path: '/categories',
        element: <CategoriesList />
      },
      {
        path: '/users',
        element: <UsersList />
      },
      {
        path: '/register/transactions',
        element: <TransactionsRegister />
      },
      {
        path: '/register/categories',
        element: <CategoriesRegister />
      },
      {
        path: '/register/users',
        element: <UsersRegister />
      },
      {
        path: '/update/transactions/:id',
        element: <TransactionsUpdate />
      },
      {
        path: '/update/categories/:id',
        element: <CategoriesUpdate />
      },
      {
        path: '/update/users/:id',
        element: <UsersUpdate />
      }
    ]
  }
])

const root = createRoot(document.getElementById('root')!)
root.render(< RouterProvider router={router} />)

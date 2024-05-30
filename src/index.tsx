import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import HomePage from './components/pages/Homepage'
import CategoryPage from './components/pages/CategoryPage'
import ProductPage from './components/pages/ProductPage'
import NotFound from './components/pages/NotFound'
import ProductDataContext from './contexts/AppData'
import App from './App'

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomePage />} />
        <Route path='categories/:category' element={<CategoryPage />} />
        <Route path='categories/*' element={<HomePage />} />
        <Route path='products/:product' element={<ProductPage />} />
        <Route path='products/*' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ProductDataContext>
      <RouterProvider router={router} />
    </ProductDataContext>
  </React.StrictMode>
)

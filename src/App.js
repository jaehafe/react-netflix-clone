import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import './App.css';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: ':movieId',
        element: <DetailPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider basename="react-netflix-clone" router={router} />
    </div>
  );
}

export default App;

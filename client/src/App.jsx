import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';


function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <ShowCreators /> },
        { path: "/creators", element: <ShowCreators /> },
        { path: "/creator/:id", element: <ViewCreator /> },
        { path: "/edit/:id", element: <EditCreator /> },
        { path: "/add", element: <AddCreator /> },
      ],
    },
  ]);

  return routes;
}

export default App


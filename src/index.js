import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import Error from './components/Error';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import App from './App';

const AppWrapper = () => {
    return (
     <Provider store={appStore}>
        <App />
      </Provider>
    );
  }

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppWrapper />,
        children: [
          {
            path: '/',
            element: <Login />
          },
          {
            path: '/browse',
            element: <Browse />
          }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();

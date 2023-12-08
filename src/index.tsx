import ReactDOM from 'react-dom/client';
import './assets/2.2/App/resources/css/app.min.css';
import './assets/2.2/App/resources/vendors/zwicon/zwicon.min.css'
import './index.css';
import { store } from './store';
import AppRouter  from './router/AppRouter';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
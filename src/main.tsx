import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // импорт стилей нормализации из библиотеки  modern-normalize
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import AuthProvider from './contexts/AuthProvider.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

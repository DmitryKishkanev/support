import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from 'components/App/App';
import AuthProvider from '@/contexts/AuthProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);

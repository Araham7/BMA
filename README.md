<!-- react-router-dom -->
# 1. Install `react-router-dom`:
```bash
npm install react-router-dom
```

ii. Go to the `main.jsx` file and add the `<Toaster />` component to enable react-hot-toast in the entire app :
```jsx
import './index.css';
import App from './App.jsx';

// Library import
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
import { ReactNode } from 'react';
import App from './App';
import { hydrateRoot } from 'react-dom/client';
const domNode = document.getElementById('root') as HTMLElement;
const root = hydrateRoot(domNode, document.getElementById('root') as ReactNode);

if (domNode?.hasChildNodes()) {
  hydrateRoot(domNode, <App />);
} else {
  root.render(<App />);
}

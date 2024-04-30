import App from './App';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
	ReactDOM.hydrateRoot(
		container,
		<HelmetProvider>
			<App />
		</HelmetProvider>,
	);
} else {
	root.render(
		<HelmetProvider>
			<App />
		</HelmetProvider>,
	);
}

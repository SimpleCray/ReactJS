import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<HelmetProvider>
		<BrowserRouter>
			<Suspense>
				{/* <GoogleOAuthProvider
				clientId="425849844901-a9f48o1cpt3qh7quk6cba3scr8dihjhc.apps.googleusercontent.com"
				> */}
					<App />
				{/* </GoogleOAuthProvider> */}
			</Suspense>
		</BrowserRouter>
	</HelmetProvider>
)

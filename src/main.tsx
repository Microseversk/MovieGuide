import '@fortawesome/fontawesome-free/css/all.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './global.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</BrowserRouter>
)

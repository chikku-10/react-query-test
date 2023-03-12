import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './views/home';

function App() {

  //set the client
  const client = new QueryClient();

  //pass the provider
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home/>
      </QueryClientProvider>
    </div>
  )
}

export default App

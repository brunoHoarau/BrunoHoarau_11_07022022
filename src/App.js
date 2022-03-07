import './styles/App.css';
import './styles/normalize.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import RouteCreated from './routes/Routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <RouteCreated />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

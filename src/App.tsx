import { Navbar } from './components/Navbar';
import { CatalogPage } from './pages/CatalogPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <CatalogPage />
      </main>
    </div>
  );
}

export default App;
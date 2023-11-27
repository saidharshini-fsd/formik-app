import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBooks';
import EditBook from './components/EditBook';
import { AppProvider } from './components/Context/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/add" element={<AddBook />} />
          <Route path="/book" element={<BookDetails />} />
        </Routes>
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;

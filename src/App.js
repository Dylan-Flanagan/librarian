import BookList from './components/book/BookList';
import './App.css';
import Home from './components/home/Home.js';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </>
  );
}

export default App;

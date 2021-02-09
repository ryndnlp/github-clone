import NavigationBar from './components/NavigationBar';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from './components/SearchPage';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import QueryContextProvider from './contexts/QueryContext';
import LandingPage from './components/LandingPage';
import DataContextProvider from './contexts/DataContext';
import RepoDetails from './components/RepoDetails';
import PageContextProvider from './contexts/PageContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <QueryContextProvider>
        <DataContextProvider>
         <PageContextProvider>
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/search' component={SearchPage} />
            <Route path="/:name" render={(props) => <RepoDetails {...props} /> } />
          </Switch>
          </PageContextProvider>
        </DataContextProvider>
      </QueryContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

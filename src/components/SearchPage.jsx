import Container from 'react-bootstrap/Container';
import './SearchPage.css';
import Sidenav from './Sidenav';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return(
  <Container className="search-page">
    <Sidenav />
    <SearchResult />
  </Container>
  );
}

export default SearchPage;
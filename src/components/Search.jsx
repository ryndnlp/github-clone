import { QueryContext } from '../contexts/QueryContext';
import './Search.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../contexts/DataContext';
import { PageContext } from '../contexts/PageContext';

const Search = ({renderButton}) => {
  const {data, setData} = useContext(DataContext);
  const {query, setQuery, queryString} = useContext(QueryContext);
  const {page, setPage} = useContext(PageContext);
  const handleSearchChange = (e) => {
    setQuery({...query, q: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/search/repositories?q=${query.q}&per_page=10&page=${page}`).then((resp) => resp.data)
    .then(data => {
      console.log(data);
      setData({
        items: data.items,
        total_count: data.total_count
      })
    })
    .catch((e) => {
      console.log(e);
    });
  }
  
  return(
    <Form className="search-page__form" onSubmit={handleSubmit}>
      <Form.Control type="text" placeholder="Search GitHub" onChange={handleSearchChange} id="search-input" />
      {
        renderButton?
        <Button variant="light" type="submit" className="search-page__button">
          <Link
            to={{
              pathname: "/search",
              search: `?q=${query}&ref=simplesearch`,
            }}
          >
          Search
          </Link>
        </Button>:
        null
      }
      
    </Form>
  )
}

export default Search;
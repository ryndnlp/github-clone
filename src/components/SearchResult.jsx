import { useContext, useEffect, useState } from 'react';
import Pagination from './Pagination';
import { DataContext } from '../contexts/DataContext';
import { QueryContext } from '../contexts/QueryContext';
import './SearchResult.css';
import SingleResult from './SingleResult';
import { PageContext } from '../contexts/PageContext';

const formatNumber = (num) =>{
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SearchResult = () => {
  const {data, setData} = useContext(DataContext);
  const {currPage, setCurrPage} = useContext(PageContext);
  
  console.log(data);
  return(
    data.items?
    <div className="search-result">
      <h3 className="search-result__count">{formatNumber(data.total_count)} repository results</h3>
      <div className="search-result__group">
        {
          data.items.map(item => 
            <SingleResult item={item} key={item.id} />
          )
        }
      </div>
      <Pagination currPage={currPage} lastPage={100} setCurrPage={setCurrPage} />
    </div>:
    <h3>Please fill the search bar</h3>
  );
}
export default SearchResult;
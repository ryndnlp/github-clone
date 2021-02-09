import React, { useContext } from 'react';
import './Pagination.css';
import axios from 'axios'
import { QueryContext } from '../contexts/QueryContext';
import { DataContext } from '../contexts/DataContext';

const Pagination = ({ setCurrPage, currPage, lastPage }) => {
  const {query, setQuery} = useContext(QueryContext);
  const {data, setData} = useContext(DataContext);
  console.log(currPage)

  const fetchData = (page) => {
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
  const nextPage = () => {
    if (currPage < lastPage) {
      const nextPage = currPage + 1;
      setCurrPage(nextPage);

      const currentFocused = document.getElementById('pn__button--focused');;

      currentFocused.classList.remove('pn__button--focused');
      currentFocused.classList.add('pn__button--default');
      currentFocused.removeAttribute('id');
      const buttons = document.querySelectorAll('.pn__button');
      let newFocused;
      for (let button of buttons) {
        if (button.innerText == nextPage) {
          newFocused = button;
        }
      }
      newFocused.id = 'pn__button--focused';
      newFocused.classList.add('pn__button--focused');
      newFocused.classList.remove('pn__button--default');
      fetchData(nextPage);
    }
    // e.preventDefault();
    
  }
  const prevPage = () => {
    if (currPage > 1) {
      const prevPage = currPage - 1;
      setCurrPage(currPage - 1);

      const currentFocused = document.getElementById('pn__button--focused');
      currentFocused.removeAttribute('id');
      currentFocused.classList.remove('pn__button--focused');
      currentFocused.classList.add('pn__button--default');
      const buttons = document.querySelectorAll('.pn__button');
      let newFocused;
      for (let button of buttons) {
        if (button.innerText == prevPage) {
          newFocused = button;
        }
      }
      newFocused.classList.add('pn__button--focused');
      newFocused.classList.remove('pn__button--default');
      newFocused.id = 'pn__button--focused';
      fetchData(prevPage);
    }
  }

  const leapPage = (e) => {
    const currentFocused = document.getElementById('pn__button--focused').closest('.pn__button');
    currentFocused.removeAttribute('id');
    currentFocused.classList.remove('pn__button--focused');
    currentFocused.classList.add('pn__button--default');
    const newFocused = e.target.closest('.pn__button');
    newFocused.classList.add('pn__button--focused');
    newFocused.classList.remove('pn__button--default');
    newFocused.id = 'pn__button--focused';
    setCurrPage(parseInt(e.target.innerText));
    fetchData(parseInt(e.target.innerText));
  }

  const renderNumberButtons = () => {
    let result = [];
    let isFirstPageButtonRendered = false;
    let isLastPageButtonRendered = false;
    for (let i = currPage - 2; i <= currPage + 2; i++) {
      if (i > 0 && i < lastPage) {
        if (i === currPage) {
          result.push(
            <div className="pn__button pn__button--focused" id="pn__button--focused" onClick={(e) => leapPage(e)} key={i}>
              <span className="pn__button-number">{i}</span>
            </div>
          );
        } else {
          result.push(
            <div className="pn__button pn__button--default" onClick={(e) => leapPage(e)} key={i}>
              <span className="pn__button-number">{i}</span>
            </div>
          );
        }
        if (i === 1) {
          isFirstPageButtonRendered = true;
        }
        if (i === lastPage) {
          isLastPageButtonRendered = true;
        }
      }
    }
    if (currPage - 3 > 1) {
      result.unshift(
        <div className="pn__button" key="firstDot">
          <span className="pn__button-number">...</span>
        </div>
      );
    }
    if (!isFirstPageButtonRendered) {
      if (currPage === 1) {
        result.unshift(
          <div className="pn__button pn__button--focused" id="pn__button--focused" key="1" onClick={(e) => leapPage(e)}>
            <span className="pn__button-number">1</span>
          </div>
        );
      } else {
        result.unshift(
          <div className="pn__button pn__button--default" key="1" onClick={(e) => leapPage(e)}>
            <span className="pn__button-number">1</span>
          </div>
        );
      }
    }
    if (currPage + 3 < lastPage) {
      result.push(
        <div className="pn__button" key="lastDot">
          <span className="pn__button-number">...</span>
        </div>
      );
    }

    if (!isLastPageButtonRendered && lastPage !== 1) {
      result.push(
        <div className="pn__button pn__button--default" key={lastPage} onClick={(e) => leapPage(e)}>
          <span className="pn__button-number">{lastPage}</span>
        </div>
      );
    }
    return result;
  }
  return (
    <div className="pn">
      <div className="pn__button" onClick={prevPage} >
        Previous
      </div>
      <div className="pn__number-container">
        {renderNumberButtons()}
      </div>
      <div className="pn__button" onClick={nextPage} >
        Next
      </div>
    </div>
  );
}

export default Pagination;
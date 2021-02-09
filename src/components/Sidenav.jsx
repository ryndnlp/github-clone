import './Sidenav.css';
import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { QueryContext } from '../contexts/QueryContext';

const listTypes = ["Repositories", "Code", "Commits", "Issues", "Discussions", "Packages", "MarketPlace", "Topics", "Wikis", "Users"];
const listLangs = ["Javascript", "Java", "HTML", "C++", "Python", "Shell", "CSS", "PHP", "C#", "C"];

const Sidenav = () => {
  const {query, setQuery} = useContext(QueryContext);
  const queryString =  'q=' + query.q + '&l=' + query.l; 
  
  return(
    <div className="sidenav">
      <div className="sidenav__type">
      {
        listTypes.map(type => {
          return(
            <Link to={'/search?' + queryString + '&type=repositories'} className="menu-item" key={type} onClick={() => {
            setQuery({...query, 'type': type.toLowerCase()})
            }}>
              {type}
              <span className="sidenav__count">31K</span>
            </Link>
          )
        }
        )
      }
      </div>
      <div className="sidenav__language">
        <h2 className="sidenav__language-title">Languages</h2>
      <div className="sidenav__language-group">
        {
          listLangs.map(lang => 
            <Link to={'/search?' + '&type=repositories' + queryString} className="menu-item" key={lang} onClick={() => {
              console.log(query)
              setQuery({...query, 'l': lang.toLowerCase()})
            }}> 
              {lang}
              <span className="sidenav__count">200</span>
            </Link>
          )
        }
      </div>
      </div>
    </div>
  );
}

export default Sidenav;
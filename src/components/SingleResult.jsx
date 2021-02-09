import { Link } from 'react-router-dom';
import './SingleResult.css';
import moment from 'moment';

const formatStar = (num) => {
  if (num.length > 6) {
    return `${(num / 1000000).toString().slice(0, 3)}m`;
  } else if(num.length > 3){
    return `${(num / 1000).toString().slice(0, 3)}k`;
  } return num;
}

const colorEntry = new Map();

colorEntry.set('Shell', '#89e051');
colorEntry.set('R', '#198CE7');
colorEntry.set('Javascript', '#f1e05a');
colorEntry.set('Java', '#b07219');
colorEntry.set('HTML', '#e34c26');
colorEntry.set('C++', '#f34b7d');
colorEntry.set('Python', '#3572A5');
colorEntry.set('CSS', '#563d7c');
colorEntry.set('PHP', '#4F5D95');
colorEntry.set('C#', '#178600');
colorEntry.set('Processing', '#0096D8');
colorEntry.set('Objective-C', '#438eff');

const formatTime = (time) => {
  const x = moment(time, 'YYYY-MM-DD');
  const newTime = x.fromNow();
  return newTime;
}

const SingleResult = (props) => {
  const {item} = props;
  const {full_name, description, stargazers_count, language, license, pushed_at, id} = item;

  const renderName = (full_name, id) => {
    const title = full_name.split('/');
    const ret = [];
    ret.push(<span className="single-result__text" key={title[0]+id}>{title[0] + '/'}</span>);
    ret.push(<span className="single-result__text single-result__text--em" key={title[1]+id}>{title[1]}</span>);
    return ret;
  }
  return(
    <div className="single-result">
      <img src="assets/book.png" alt="book" className="book-img"/>
      <div className="single-result__summary">
        <Link to={`/${full_name}`}>
        {
          renderName(full_name, id)        
        }
        </Link>
        <p className="single-result__desc">{description}</p>
        <div className="single-result__details">
          <div className="single-result__single-details single-result__single-details--blue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="single-result__star-count">{formatStar(stargazers_count.toString())}</span>
          </div>
          <div className="single-result__single-details">
            <span className="single-result__colored-circle" style={{backgroundColor: colorEntry.get(language)}}></span>
            <span className="single-result__language">{language}</span>
          </div>
          {
            license?
            <div className="single-result__single-details">
              {license.name}
            </div>:null
          }
          
          <div className="single-result__single-details">
            {
              
              formatTime(pushed_at)
            }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SingleResult;
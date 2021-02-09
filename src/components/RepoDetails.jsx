import { useEffect, useState } from 'react'; 
import axios from 'axios';
import './RepoDetails.css';

// /repos/{owner}/{repo}/readme
const RepoDetails = (props) => {
  const [readMe, setReadMe] = useState('');
  useEffect(() => {
    const fetchDetails = () => {
      axios.get(`https://raw.githubusercontent.com${props.location.pathname}/master/README.md`).then((resp) => resp.data)
      .then(data => {
        setReadMe(data)
      })
      .catch((e) => {
        console.log(e);
      });
      }
    fetchDetails();
  })
  return(
    <>
      <div className="repo-header">

      </div>
      <div className="repo-details">
        <div className="repo-details__readme">
          <h2 className="repo-details__readme-title">README.MD</h2>
          <p className="repo-details__readme-content">{readMe}</p>    
        </div>
        <div className="repo-details__stats">
          About
        </div>
      </div>
    </>
  );
}

export default RepoDetails;
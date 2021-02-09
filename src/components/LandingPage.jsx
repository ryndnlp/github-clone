import Container from 'react-bootstrap/Container';
import './LandingPage.css';
import Search from './Search';

const LandingPage = () => {
  
  return(
    <Container className="landing-page">
      <h2 className="landing-page__header">
      <img src="/assets/search.png" className="landing-page__search-icon"/>
        Search more than 
        <span className="span--strong">66M</span> users
      </h2> 
      <Search />
      <p className="landing-page__tip">
        <span className="span--strong">ProTip!&nbsp;</span>
        For an&nbsp;
        <a href="#">advanced search</a>, use some of our&nbsp;
        <a href="#">prefixes.</a>
      </p>
    </Container>
  );

}

export default LandingPage;
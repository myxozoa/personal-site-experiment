import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Info from './components/Info/Info.js';
import Ribbons from './components/Ribbons/Ribbons.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.prevArrow = new React.createRef();
  }
  state = {
    page: 1,
    direction: 1,
    previousPage: 1,
  }

  nextPage = () => {
    this.setState(prevState => {
      return {
        direction: 1,
        page: prevState.page <= 2 ? prevState.page + 1 : 3, // increments but stops at 3
        previousPage: prevState.page,
      }
    });
  }

  prevPage = () => {
    this.setState(prevState => {
      return {
        direction: -1,
        page: (prevState.page > 1 ? prevState.page - 1 : 1), // decrements but stops at 1
        previousPage: prevState.page,
      }
    });
  }

  invertColors = () => { // Inverts colors of elements for page 3
    if(this.state.page === 3 && this.prevArrow.current) {
      // Prev arrow
      this.prevArrow.current.style.borderBottom = '2px solid white';
      this.prevArrow.current.style.borderLeft = '2px solid white';

      // "Logo"
      // this.

    } else if(this.state.page === 2 && this.prevArrow.current) {  // Resets colors when going back a page (possibly some way to eliminate the need for this)
      // Prev arrow
      this.prevArrow.current.style.borderBottom = '2px solid #2a2a2a';
      this.prevArrow.current.style.borderLeft = '2px solid #2a2a2a';
    }
  }

  render() {
    this.invertColors();
    console.log('STATE: ', this.state);
    return (
      <div className="App">
        <Header/>
        <div className="Page">
          <Info/>
          {this.state.page === 1 ? null : <div className="prevButton" onClick={this.prevPage}><div className="prev-arrow arrow" ref={this.prevArrow}/></div>}
          <Ribbons page={this.state.page} direction={this.state.direction}/>
          {this.state.page === 3 ? null : <div className="nextButton" onClick={this.nextPage}><div className="next-arrow arrow"/></div>}
        </div>
      </div>
    );
  }
}

export default App;

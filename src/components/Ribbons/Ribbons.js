import React from 'react';
import Lottie from '../Lottie-React/Lottie';
import * as animationData from '../../data.json';
import './Ribbons.css';

class Ribbons extends React.Component {
  state = {
    currentSeg: 'start',
    direction: 1,
    page: 1,
  };

  defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    segments: {
      start: [0, 1],
      1: [1, 66],
      2: [66, 162],
      end: [162, 163],
    },
  };

  prevSeg = () => {
    let prevPage = {
      1: 'start',
      2: 1,
      3: 2,
    };
    this.setState(prev => {
      return {
        currentSeg: prevPage[prev.page],
        direction: -1,
        page: prev.page > 1 ? prev.page - 1 : 1, // decrements but stops at 1
      };
    });
  };

  nextSeg = () => {
    let nextPage = {
      1: 1,
      2: 2,
      3: 'end',
    };
    this.setState(prev => {
      return {
        currentSeg: nextPage[prev.page],
        direction: 1,
        page: prev.page <= 2 ? prev.page + 1 : 3, // increments but stops at 3
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.page === 1 ? null : <div className="prevButton" onClick={this.prevSeg} />}
        <div className="Lottie">
          <Lottie
            options={this.defaultOptions}
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
            currentSeg={this.state.currentSeg}
            direction={this.state.direction}
            speed={1}
            eventListeners={[]}
          />
        </div>
        {this.state.page === 3 ? null : <div className="nextButton" onClick={this.nextSeg} />}
      </React.Fragment>
    );
  }
}

export default Ribbons;

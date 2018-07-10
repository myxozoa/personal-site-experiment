import React from 'react';
import Lottie from '../Lottie-React/Lottie';
import * as animationData from '../../data.json';
import './Ribbons.css';

class Ribbons extends React.Component {
  constructor(props) {
    super(props);

    this.segments = {
      start: [0, 1],
      1: [0, 66],
      2: [66, 162],
      end: [162, 163],
    };

    this.defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMid slice',
        progressiveLoad: false,
      },
      segments: true,
    };

    this.prevSegMap = {
      1: 1,
      2: 1,
      3: 2,
    };

    this.nextSegMap = {
      1: 1,
      2: 2,
      3: 3,
    };
  }

  state = {
    currentSeg: 'start',
  };

  chooseSegment = (newProps) => {
    const prevOrNextSeg = newProps.direction > 0 ? this.segments[this.nextSegMap[this.props.page]] : this.segments[this.prevSegMap[this.props.page]];

    this.setState({ currentSeg: prevOrNextSeg });
  }

  componentWillReceiveProps(newProps) {
    this.chooseSegment(newProps);
  }

  render() {
    return (
      <React.Fragment>
        <div className="Lottie">
          <Lottie
            options={this.defaultOptions}
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
            currentSeg={this.state.currentSeg}
            direction={this.props.direction}
            speed={1}
            eventListeners={[
              // {
              //   eventName: 'enterFrame',
              //   callback: (e) => console.log('frame: ', e),
              // },
            ]}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Ribbons;

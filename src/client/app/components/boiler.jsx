import 'aframe';
import 'aframe-text-geometry-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Boiler extends React.Component {
  render () {
    return (
      <div>
        <Scene>
          <a-assets>
            <video id="video" src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/" autoPlay loop crossOrigin></video>
          </a-assets>
          <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
          <Entity text-geometry="value: 360 Rocks" material="color: red" position={[0, 0, -15]}></Entity>
          <Entity geometry={{primitive: 'box'}} material="color: blue" position={[0, 0, -5]} />
        </Scene>
      </div>
    );
  }
}

export default Boiler;

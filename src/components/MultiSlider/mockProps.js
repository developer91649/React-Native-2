'use strict'

import { View } from 'react-native'
import React, {Component, PropTypes} from 'react'

const BasicMarker = React.createClass({

  propTypes: {
    pressed: PropTypes.bool,
    pressedMarkerStyle: View.propTypes.style,
    markerStyle: View.propTypes.style
  },

  render: function () {
    return (
      <View
        style={[this.props.markerStyle, this.props.pressed && this.props.pressedMarkerStyle]}
      />
    )
  }
})

const mockProps = {
  values: [0],
  onValuesChangeStart: function () {
    // console.log('press started');
  },
  onValuesChange: function (values) {
    // console.log('changing', values);
  },
  onValuesChangeFinish: function (values) {
    // console.log('changed', values);
  },
  step: 1,
  min: 0,
  max: 10,
  selectedStyle: {
    backgroundColor: 'blue'
  },
  unselectedStyle: {
    backgroundColor: 'grey'
  },
  containerStyle: {
    height: 30
  },
  trackStyle: {
    height: 7,
    borderRadius: 3.5
  },
  touchDimensions: {
    height: 30,
    width: 30,
    borderRadius: 15,
    slipDisplacement: 30
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#E8E8E8',
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  customMarker: BasicMarker,
  pressedMarkerStyle: {
    backgroundColor: '#D3D3D3'
  },
  sliderLength: 280
}

module.exports = mockProps

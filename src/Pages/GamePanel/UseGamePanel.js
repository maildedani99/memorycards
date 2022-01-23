import React from 'react';
import leon from './../../assets/leon.jpg'
import buo from './../../assets/buo.jpg'
import jaguar from './../../assets/jaguar.jpg'
import koala from './../../assets/koala.jpg'
import lobo from './../../assets/lobo.jpg'
import tigre from './../../assets/tigre.jpg'
import suricat from './../../assets/suricat.jpg'
import zorro from './../../assets/zorro.jpg'
import panda from './../../assets/panda.jpg'
import PropTypes from 'prop-types';

const UseGamePanel = (props) => {

    const imgArray = [leon, buo, suricat, tigre, panda, zorro, lobo, koala, jaguar]

  return {
      imgArray
    }
  
};
    
UseGamePanel.propTypes = {};

export default UseGamePanel;

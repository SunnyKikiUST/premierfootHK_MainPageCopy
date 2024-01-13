import React from 'react';
import Swiper from 'react-id-swiper';
const Scrollbar = () => {
  const params = {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }
  return (
    <Swiper {...params}>
      <div>Slide #1</div>
      <div>Slide #2</div>
      <div>Slide #3</div>
      <div>Slide #4</div>
      <div>Slide #5</div>
    </Swiper>
  )
};
export default Scrollbar;
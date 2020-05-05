import React from 'react';
import './Star.css';

function initStars(starAmount) {
  let stars = [];
  for (let i = 0; i < starAmount; i++) {
    let rBgColor = getRandomBackgroundColor();
    let rPos = getRandomPosition();
    let star = (
      <div
        className='star'
        style={{
          top: rPos[0] + 'px',
          left: rPos[1] + 'px',
          backgroundColor: rBgColor,
        }}
      ></div>
    );
    stars.push(star);
  }
  return stars;
}

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function getRandomBackgroundColor() {
  var rnd = Math.floor(Math.random() * 5);

  switch (rnd) {
    case 0:
      return 'white';
    case 1:
      return '#a7a7a7';
    case 2:
      return '#777777';
    case 3:
      return '#4a4a4a';
    case 4:
      return '#2c2c2c';
  }
}

const Star = () => {
  const stars = initStars(300);
  console.log(stars);
  return (
    <>
      {stars.map((star) => {
        return star;
      })}
    </>
  );
};

export default React.memo(Star);

import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
  <div>
    <h2> I like {name} </h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodIlike = [
  {
    id : 1,
    name : 'kimchi',
    image : 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating : 3,
  },
  {
    id : 2,
    name : 'samgyopsal',
    image : 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg',
    rating : 5,
  }
];

// function renderFood(dish) {
//   return 
//   <Food name={dish.name} picture={dish.image} />;
// }


function App() {
  return (
  <div>
    {foodIlike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
    ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number     // props 입력값 검사
}

export default App;
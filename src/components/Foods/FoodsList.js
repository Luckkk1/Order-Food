import { useEffect, useState } from 'react';

import FoodsItem from './FoodsItem/FoodsItem';
import classes from './FoodsList.module.css';

const FoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchFoods = async () => {
      const res = await fetch(
        'https://react-demo-5a12a-default-rtdb.firebaseio.com/foods.json'
      );

      if (!res.ok) {
        throw new Error('문제가 생겼습니다.');
      }

      const foodData = await res.json();

      let foodList = [];

      for (let key in foodData) {
        foodList.push({
          key: key,
          name: foodData[key].name,
          description: foodData[key].description,
          price: foodData[key].price,
        });
      }
      setFoods(foodList);
      setIsLoading(false);
    };

    fetchFoods().catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
  }, []);

  const foodItem = foods.map((food) => (
    <FoodsItem
      name={food.name}
      key={food.key}
      id={food.key}
      description={food.description}
      price={food.price}
    />
  ));

  if (isLoading) {
    return <p className={classes.loading}>로딩중...</p>;
  }

  if (error) {
    return <p className={classes.error}>{error}</p>;
  }

  return <ul className={classes.ul}>{foodItem}</ul>;
};

export default FoodList;

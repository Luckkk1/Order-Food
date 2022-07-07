import Card from '../UI/Card';
import classes from './FoodsSummary.module.css';

const FoodsSummary = () => {
  return (
    <section className={classes.section}>
      <Card className={classes.summary}>
        <h2>딜리버리 서비스</h2>
        <p>식당에서만 먹을 수 있던 음식을 집에서 즐겨보세요.</p>
        <p>주문 즉시 조리가 시작되어 신선한 음식을 배달해드립니다.</p>
        <p>최고의 재료로 최고의 셰프가 조리합니다.</p>
      </Card>
    </section>
  );
};

export default FoodsSummary;

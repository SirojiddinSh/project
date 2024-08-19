import { Card } from 'antd';
import { Car } from '../../types/dataTypes';
import parse from 'html-react-parser';

const { Meta } = Card;

const CardComponent = ({car} : {car: Car}) => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img style={{width: 200}} alt={car.description} src={car.thumbnail} />}
  >
    <Meta title={car.name} description={parse(car.description)} />
  </Card>
  )
}

export default CardComponent
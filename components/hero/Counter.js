import Button from '../Button';
import Timer from '../Timer/Timer';

const Counter = (props) => (
  <div>
    <h2>El Próximo evento será en</h2>
    <Timer time={props.timer}/>
    <Button href='#' className='mt3'>Quiero Asistir</Button>
  </div>
);

export default Counter;

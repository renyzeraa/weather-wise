import './styles.css';

// evitar que seja duplicado ou inserido novas propriedades igual acontece no interface
export type NextDaysItemProps = {
  day: string;
  icon: string;
  min: number;
  max: number;
  weather: string;
}

type Props = {
  data: NextDaysItemProps;
}

export function NextDaysItem({ data }: Props) {
  return (
    <div className='next-day-item'>
      <h2>{data.day}</h2>

      <img src={data.icon} alt={data.weather} />

      <h3>{data.weather}</h3>

      <p>
        {data.min}ºc <span>{data.max}ºc</span>
      </p>
    </div>
  )
}
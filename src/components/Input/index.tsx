import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

// podemos estender de uma interface ja criada
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean; // com a ? ela é definida como opcional
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}
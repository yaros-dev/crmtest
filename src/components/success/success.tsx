import { useNavigate } from 'react-router-dom';
import './success.css';

export const Success = () => {
  const navigate = useNavigate()
  return (
    <div className='container' onClick={()=>navigate('/')}>
      <div className='thank'>
        <div className='thank__title'>
          <span>Thank</span> you! 👍
        </div>
        <div className='thank__sub'>We will contact you shortly! 😉</div>
      </div>
    </div>
  );
};

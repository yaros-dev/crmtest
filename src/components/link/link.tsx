import arrow from '../../images/arrow-link.svg';
import './link.css';

type LinkProps = {
  title: string;
  onClick?: ()=>void;
};

export function Link({ title, onClick }: LinkProps) {
  return (
    <div className='link_box' onClick={onClick}>
      <span className='link__text'>{title}</span>
      <img className='link__img' src={arrow} alt='' />
    </div>
  );
}

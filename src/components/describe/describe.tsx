import { Link } from '../link/link';
import { applyStylesToWords } from '../../utilites/apply-styles-to-words';
import './describe.css';
import { useNavigate } from 'react-router-dom';

export interface IDescribeDataOnScreen {
  title: string;
  titleButton: string;
  link: string;
}

export function DescribeSection({
  titleButton,
  link,
  title,
}: IDescribeDataOnScreen) {
  const navigate = useNavigate()

  const clickLink = () => {
    navigate(link)
  }

  const styles = [
    {
      position: 5,
      style: {},
    },
  ];

  const formattedWords = applyStylesToWords(styles, title);
  return (
    <section className='describe__section'>
      <div className='container'>
        <div className='describe__section__wrapper'>
          <div className='describe__section__title'>{formattedWords}</div>
          <Link title={titleButton} onClick={clickLink} />
        </div>
      </div>
    </section>
  );
}

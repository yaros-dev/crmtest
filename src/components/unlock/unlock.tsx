import { useNavigate } from 'react-router-dom';
import { Link } from '../link/link';
import {
  IOutlineTitleAndTextItem,
  OutlineTitleAndTextItem,
} from '../outline-title-and-text-item/outline-title-and-text-item';
import { Title } from '../title/title';
import './unlock.css';

export interface IUnlockScreenDataOnScreen {
  unlockDescriptions: IOutlineTitleAndTextItem[];
  titleButton: string;
  link: string;
  title: string;
}

export function UnlockSection({
  unlockDescriptions,
  titleButton,
  link,
  title,
}: IUnlockScreenDataOnScreen) {
  const navigate = useNavigate();
  const firstWord = title.split(' ')[0];

  const clickLink = () => {
    localStorage.setItem('interested', 'crm');
    navigate(link);
  };

  return (
    <section className='unlock__section'>
      <div className='container'>
        <Link title={titleButton} onClick={clickLink} />
        <Title>
          <span>{firstWord}</span> {title.replace(firstWord, '')}
        </Title>
        <div className='unlock__section__items'>
          {unlockDescriptions?.map((item, i) => {
            return <OutlineTitleAndTextItem key={i} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

import { Link } from '../link/link';
import {
  MarketingItem,
  IMarketingDescriptions,
} from '../marketing-item/marketing-item';
import { Title } from '../title/title';
import { applyStylesToWords } from '../../utilites/apply-styles-to-words';
import './marketing.css';
import { useNavigate } from 'react-router-dom';

export interface IMarketingDataOnScreen {
  title: string;
  titleButton: string;
  link: string;
  marketingDescriptions: IMarketingDescriptions[];
}

export function MarketingSection({
  marketingDescriptions,
  titleButton,
  link,
  title,
}: IMarketingDataOnScreen) {
  const navigate = useNavigate();

  const clickLink = () => {
    localStorage.setItem('interested', 'marketing');
    navigate(link);
  };

  const styles = [
    {
      position: 1,
      style: {
        fontFamily: 'UltraSolar, sans-serif',
        fontSize: '130px',
      },
    },
    { position: 4, style: { fontStyle: 'italic' } },
    { position: 7, style: { fontFamily: 'UltraSolar, sans-serif' } },
  ];

  return (
    <section className='marketing__section'>
      <div className='container'>
        <Link title={titleButton} onClick={clickLink} />
        <Title className='marketing__section__title'>
          {applyStylesToWords(styles, title)}
        </Title>
        <div className='marketing__section__items'>
          {marketingDescriptions?.map((item, i) => {
            return <MarketingItem key={12 + i} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

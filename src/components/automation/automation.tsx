import { useNavigate } from 'react-router-dom';
import { applyStylesToWords } from '../../utilites/apply-styles-to-words';
import { Link } from '../link/link';
import { OutlineTitleAndTextItem } from '../outline-title-and-text-item/outline-title-and-text-item';
import { Title } from '../title/title';
import './automation.css';

export interface IAutomationDescriptions {
  title: string;
  descriptions: string;
}

export interface IAutomationDataOnScreen {
  title: string;
  titleButton: string;
  link: string;
  automationDescriptions: IAutomationDescriptions[];
}

export function AutomationSection({
  automationDescriptions,
  titleButton,
  link,
  title,
}: IAutomationDataOnScreen) {
  const styles = [
    {
      position: 5,
      style: {},
    },
  ];

  const navigate = useNavigate();

  const clickLink = () => {
    localStorage.setItem('interested', 'marketingAutomation');
    navigate(link);
  };

  const formattedWords = applyStylesToWords(styles, title);

  return (
    <section className='automation__section'>
      <div className='container'>
        <Link title={titleButton} onClick={clickLink} />
        <Title>{formattedWords}</Title>
        <div className='automation__section__items'>
          {automationDescriptions?.map((item, i) => {
            return <OutlineTitleAndTextItem key={'12D' + i} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

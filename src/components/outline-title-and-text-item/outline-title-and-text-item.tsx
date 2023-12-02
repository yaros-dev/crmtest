import './outline-title-and-text-item.css';

export interface IOutlineTitleAndTextItem {
  title: string;
  descriptions: string;
}

export function OutlineTitleAndTextItem({
  title,
  descriptions,
}: IOutlineTitleAndTextItem) {
  return (
    <div className='unlock__section__item'>
      <div className='unlock__section__item_title'>{title}</div>
      <div className='unlock__section__item_descriptions'>{descriptions}</div>
    </div>
  );
}

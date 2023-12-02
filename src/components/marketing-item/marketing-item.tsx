import "./marketing-item.css";

export interface IMarketingDescriptions {
  title: string;
  descriptions: string;
}

export function MarketingItem({ title, descriptions }: IMarketingDescriptions) {
  const firstLetter: string = title.charAt(0);
  return (
    <div className="marketing__section__item">
      <div className="marketing__section__item_title">{title}</div>
      <div className="marketing__section__item_box">
        <div className="marketing__section__item_marker_wrapper">
          <div className="marketing__section__item_marker">{firstLetter}</div>
        </div>
        <div className="marketing__section__item_descriptions">
          {descriptions}
        </div>
      </div>
    </div>
  );
}

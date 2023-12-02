import { Link } from "../link/link";
import { IPlatformsItem } from "../platforms/platforms";

export const PlatformsItem = ({
  title,
  link,
  about,
  awards,
}: IPlatformsItem) => {
  return (
    <div className="platforms__item">
      <Link title={title} />
      <hr />
      <div className="platforms-crm__boxs">
        <div className="platforms-crm__box">
          <div className="platforms-crm__box__title">About</div>
          <div className="platforms-crm__box__text">{about}</div>
        </div>
        <div className="platforms-crm__box">
          <div className="platforms-crm__box__title">Awards</div>
          <div className="platforms-crm__box__text">
            <ul className="platforms-crm__box__list">
              {awards.map((item, index) => {
                return <li key={"324234" + index}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformsItem;

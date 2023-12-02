import "./main-crm.css";

export interface IMainCRMWordsOnScreen {
  title: string;
  subtitle: string;
  about: string;
}

export function MainCRMSection({
  title,
  subtitle,
  about,
}: IMainCRMWordsOnScreen) {
  return (
    <section className="main-crm__section">
      <div className="container">
        <div className="main-crm__section__wrapper">
          <div className="main-crm__section__title--wrapper">
            <div className="main-crm__section__title">{title}</div>
            <div className="main-crm__section__subtitle">{subtitle}</div>
          </div>

          <div className="main-crm__section__about">{about}</div>
        </div>
      </div>
    </section>
  );
}

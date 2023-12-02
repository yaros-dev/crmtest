import googlepartner from "../../images/google-partner.png";
import metalogo from "../../images/meta-logo.png";
import "./footer.css";

export interface IFooterDataOnScreen {
  email: string;
  tel: string;
}

export function FooterSection({ email, tel }: IFooterDataOnScreen) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__contact">
            <a className="footer__email" href={`mailto:${email}`}>
              {email}
            </a>
            <a className="footer__phone" href={`tel:${tel}`}>
              {tel}
            </a>
          </div>
          <div className="footer__partner">
            <div className="footer__image">
              <img className="footer__img" src={metalogo} alt="" />
            </div>
            <div className="footer__image">
              <img className="footer__img" src={googlepartner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

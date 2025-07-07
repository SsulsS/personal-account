import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="footer__inn-container">
        <p className="footer__description">© 2024</p>
        <p className="footer__description-inn">ООО «ЛК» ИНН 1231234567</p>
      </div>
      <div className="footer__contacts-container">
        <p className="footer__txt">8 (800) 555-35-35</p>
        <p className="footer__txt">support@lk.ru</p>
      </div>
      <div className="footer__links-container">
        <p className="footer__txt">Политика конфиденциальности</p>
        <p className="footer__txt">Пользовательское соглашение</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

import { ContactInfo } from "./ContactInfo/ContactInfo";
import { SubscriptionBlock } from "./SubscriptionBlock/SubscriptionBlock";
import { LogoLine } from "./LogoLine/LogoLine";
import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__info-wrp"]}>
        <ContactInfo />
        <SubscriptionBlock />
      </div>
      <LogoLine />
    </footer>
  );
};

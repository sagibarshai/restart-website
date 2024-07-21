import { IconCar, IconPhone, IconWhatsapp } from "../../icons";
import IconText from "../icons-text";
import {
  StyleContactUsTitle,
  StyledContactUsContentWrapper,
  StyledContactUsPersonalPhone,
  StyledContactUsRow,
  StyledContactUsText,
  StyledContactUsWrapper,
} from "./styled";

const ContactUs = () => {
  return (
    <StyledContactUsWrapper>
      <StyledContactUsContentWrapper>
        <StyleContactUsTitle>דברו איתנו!</StyleContactUsTitle>
        <StyledContactUsRow>
          <StyledContactUsPersonalPhone target="_blank" href="https://wa.me/972547771858?text=היי, הגעתי דרך האתר, אשמח לפרטים על שירותי הניקיון">
            <IconWhatsapp size={28} />
            <StyledContactUsText>דברו איתנו ב-Whatsapp.</StyledContactUsText>
          </StyledContactUsPersonalPhone>
          <StyledContactUsPersonalPhone target="_blank" href="tel:+972547771858">
            <IconPhone size={28} />
            <StyledContactUsText>התקשרו אלינו - 0547771858 </StyledContactUsText>
          </StyledContactUsPersonalPhone>
        </StyledContactUsRow>
      </StyledContactUsContentWrapper>
    </StyledContactUsWrapper>
  );
};
export default ContactUs;

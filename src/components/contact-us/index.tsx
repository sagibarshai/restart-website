import { IconCar, IconPhone, IconWhatsapp } from "../../icons";
import IconText from "../icons-text";
import {
  StyleContactUsTitle,
  StyledContactUsContentWrapper,
  StyledContactUsPersonalPhone,
  StyledContactUsRow,
  StyledContactUsWrapper,
} from "./styled";

const ContactUs = () => {
  return (
    <StyledContactUsWrapper>
      <StyledContactUsContentWrapper>
        <StyleContactUsTitle>דברו איתנו!</StyleContactUsTitle>
        <StyledContactUsRow>
          <StyledContactUsPersonalPhone target="_blank" href="https://wa.me/972547771858?text=היי, הגעתי דרך האתר, אשמח לפרטים על שירותי הניקיון">
            <IconText icon={<IconWhatsapp size={28} />} title="דברו איתנו ב-Whatsapp." />
          </StyledContactUsPersonalPhone>
          <StyledContactUsPersonalPhone target="_blank" href="tel:+972547771858">
            <IconText icon={<IconPhone size={28} />} title="התקשרו אלינו - 0547771858" />
          </StyledContactUsPersonalPhone>
        </StyledContactUsRow>
      </StyledContactUsContentWrapper>
    </StyledContactUsWrapper>
  );
};
export default ContactUs;

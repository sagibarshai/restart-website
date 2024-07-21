import { IconClean, IconClock, IconFast, IconHandShake, IconOk, IconSaveMoney } from "../../icons";
import InfoCard from "../info-card";
import {
  StyledInfoCardsWrapper,
  StyledWhyChooseUsContentWrapper,
  StyledWhyChooseUsText,
  StyledWhyChooseUsTitle,
  StyledWhyChooseUsWrapper,
} from "./styled";

const WhyChooseUs = () => {
  return (
    <StyledWhyChooseUsWrapper>
      <StyledWhyChooseUsContentWrapper>
        <StyledWhyChooseUsTitle>למה לבחור בנו?</StyledWhyChooseUsTitle>
        {/* <StyledWhyChooseUsText>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט לורם איפסום דולור סיט אמט,
          קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט{" "}
        </StyledWhyChooseUsText> */}
        <StyledInfoCardsWrapper>
          {/* <InfoCard
            icon={<IconSaveMoney size={48} />}
            title="שירות זול"
            content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט "
          /> */}
          <InfoCard
            icon={<IconClean size={48} />}
            title="ציוד וחומרים מתקדמים"
            content="
             אנו משתמשים בציוד ובחומרים הטובים והחדישים  ביותר"
          />
          <InfoCard icon={<IconClock size={48} />} title="שירות בזמינות גבוהה " content="לוח הזמנים שלנו הוא גמיש ונגיש למען הלקוח" />
          <InfoCard
            icon={<IconHandShake size={48} />}
            title="חיטוי וניקוי מעמיק"
            content="בעזרת הציוד והחומרים המתקדמים שלנו אנו מגיעים למקסימום חיטוי וניקוי האפשרי"
          />
          {/* <InfoCard
            icon={<IconFast size={48} />}
            title="הגעה מהירה"
            content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט "
          /> */}
          {/* <InfoCard
            icon={<IconOk size={48} />}
            title="אחריות על העבודה"
            content="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט "
          /> */}
        </StyledInfoCardsWrapper>
      </StyledWhyChooseUsContentWrapper>
    </StyledWhyChooseUsWrapper>
  );
};

export default WhyChooseUs;

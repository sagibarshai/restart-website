import { useEffect, useState } from "react";
import ArrowButton from "../arrows";
import {
  StyledCarouselArrowsWrapper,
  StyledCarouselContentWrapper,
  StyledCarouselTitle,
  StyledCarouselWrapper,
  StyledQuotes,
  StyledTextQuotesWrapper,
  StyledTextWrapper,
} from "./styled";
import { Props } from "./types";
import { ArrowType } from "../arrows/types";

const Carousel = ({ title }: Props) => {
  const elements = [
    `
      ט מיחוצים. קלאצי לורם איפסום דולור סי מנכם
      למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק
      הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
    `,
    `
      לורם איפסום לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן
      איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
      וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו
      בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי לורם איפסום דולור סיט אמט, מוסן מנת. להאמית קרהשק סכעיט
      דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
      ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט
      ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף להאמית
      קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק
      ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
      בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש.
    `,
    `
      איף, ברומץ כלרשט מיחוצים. קלאצי קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
      אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. נולום ארווס סאפיאן
      - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי לורם
      איפסום דולור סיט אמט, מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן הועניב היושבב
      שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם
    `,
  ];

  const [currentElementIndex, setCurrentElementIndex] = useState<number>(-1);

  useEffect(() => {
    if (currentElementIndex === -1) {
      setCurrentElementIndex(0);
    }
  }, []);

  const onSlide = (type: ArrowType) =>
    type === "next" ? setCurrentElementIndex((state) => state + 1) : setCurrentElementIndex((state) => state - 1);

  console.log("currentElementIndex ", currentElementIndex);

  return (
    <StyledCarouselWrapper>
      <StyledCarouselContentWrapper>
        <StyledCarouselTitle>{title}</StyledCarouselTitle>
        <StyledCarouselArrowsWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex + 1])} onClick={onSlide} type="next" />
          <StyledTextQuotesWrapper>
            <StyledQuotes location={"top"}>"</StyledQuotes>
            <StyledTextWrapper>{elements[currentElementIndex]}</StyledTextWrapper>
            <StyledQuotes location={"bottom"}>"</StyledQuotes>
          </StyledTextQuotesWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex - 1])} onClick={onSlide} type="previous" />
        </StyledCarouselArrowsWrapper>
      </StyledCarouselContentWrapper>
    </StyledCarouselWrapper>
  );
};
export default Carousel;

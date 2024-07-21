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
import { ArrowType } from "../arrows/types";

const Carousel = () => {
  const title = "לקוחות מספרים:";
  const elements = [
    `
    הצליחו להחזיר לחיים את הספות הישנות שלנו שהיו במצב נוראי. השירות היה מקצועי ומדויק, וכל כתם נעלם כלא היה. הצוות הגיע בזמן, עבד ביסודיות והשאיר את הבית נקי ומסודר. - דנה.
    `,
    `
    Restart ניקו את המזרונים שלנו בצורה מושלמת. והמזרונים נראים ומרגישים חדשים לגמרי. השירות היה מקצועי ואדיב. תודה רבה! - מיכל.
    `,
    `
    שירות מדהים! הצוות היה מקצועי והספות נראות מעולות. הצוות היה מאוד נחמד וענה על כל השאלות שלי. תודה רבה ל-Restart! - רועי.
    `,
    `
    החלטתי למכור את הרכב שלי ו-Restart עשו עבודה מצוינת עם ניקוי הריפודים.
    הרכב נראה כמו חדש, ממליץ בחום - אבי.    
    `,
    `
    הספות שלנו נראות כחדשות בזכות הצוות המקצועי! השירות היה מהיר ואדיב, והעבודה בוצעה בצורה יסודית. בהחלט מומלץ בחום לכל מי שמחפש ניקוי ספות איכותי. - שרון.
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

  return (
    <StyledCarouselWrapper>
      <StyledCarouselContentWrapper>
        <StyledCarouselTitle>{title}</StyledCarouselTitle>
        <StyledCarouselArrowsWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex + 1])} onClick={onSlide} type="next" />
          <StyledTextQuotesWrapper>
            <StyledQuotes location={"top"}>"</StyledQuotes>
            <StyledTextWrapper key={currentElementIndex}>{elements[currentElementIndex]}</StyledTextWrapper>
            <StyledQuotes location={"bottom"}>"</StyledQuotes>
          </StyledTextQuotesWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex - 1])} onClick={onSlide} type="previous" />
        </StyledCarouselArrowsWrapper>
      </StyledCarouselContentWrapper>
    </StyledCarouselWrapper>
  );
};
export default Carousel;

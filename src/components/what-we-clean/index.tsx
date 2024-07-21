import { IconBed, IconCar, IconCarpet, IconPillow, IconSofa } from "../../icons";
import IconText from "../icons-text";
import { StyledWhatWeCleanContentWrapper, StyledWhatWeCleanIconsTextRow, StyledWhatWeCleanTitle, StyledWhatWeCleanWrapper } from "./styled";

const WhatWeClean = () => {
  return (
    <StyledWhatWeCleanWrapper>
      <StyledWhatWeCleanContentWrapper>
        <StyledWhatWeCleanTitle>מה אנחנו מנקים?</StyledWhatWeCleanTitle>
        <StyledWhatWeCleanIconsTextRow>
          {/* <IconText icon={<IconCar size={48} />} title="נקיון לפני מכירה" />
          <IconText icon={<IconPillow size={48} />} title="ריפודים" />
          <IconText icon={<IconBed size={48} />} title="מזרונים" />
          <IconText icon={<IconCarpet size={48} />} title="שטיחים" />
          <IconText icon={<IconSofa size={48} />} title="ספות" /> */}
          <IconText icon={<img src="./images/car.jpg" width={"100%"} />} title="נקיון לפני מכירה" />
          <IconText icon={<img src="./images/upholstery.jpg" width={"100%"} />} title="ריפודים" />
          <IconText icon={<img src="./images/bed.jpeg" width={"100%"} />} title="מזרונים" />
          <IconText icon={<img src="./images/carpet.jpg" width={"100%"} />} title="שטיחים" />
          <IconText icon={<img src="./images/sofa.jpg" width={"100%"} />} title="ספות" />
        </StyledWhatWeCleanIconsTextRow>
      </StyledWhatWeCleanContentWrapper>
    </StyledWhatWeCleanWrapper>
  );
};
export default WhatWeClean;

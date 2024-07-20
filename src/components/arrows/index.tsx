import { IconArrowLeft, IconArrowRight } from "../../icons";
import { StyledArrowButton } from "./styled";
import { Props } from "./types";

export const ArrowButton = ({ type, disabled, onClick }: Props) => {
  return (
    <StyledArrowButton disabled={disabled} onClick={() => onClick(type)}>
      {type === "next" ? <IconArrowRight size={48} /> : <IconArrowLeft size={48} />}
    </StyledArrowButton>
  );
};
export default ArrowButton;

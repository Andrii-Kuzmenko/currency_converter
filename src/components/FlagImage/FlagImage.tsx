import BGN from "../../images/bulgaria.png";
import CNY from "../../images/china.png";
import CZK from "../../images/czech-republic.png";
import JPY from "../../images/japan.png";
import PLN from "../../images/poland.png";
import GBP from "../../images/united-kingdom.png";
import USD from "../../images/united-states.png";

interface Props {
  currency: string;
  className?: string;
}

interface FlagImages {
  [key: string]: string;
}

const flagImages: FlagImages = {
  BGN,
  CNY,
  CZK,
  JPY,
  PLN,
  GBP,
  USD,
};

export const FlagImage: React.FC<Props> = ({ currency, ...props }) => {
  const image: string = flagImages[currency];

  return <img src={image} alt={currency} {...props} />;
};

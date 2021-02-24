import { AddressInputType } from "../../constants/inputType";
import AddressDefault from "../../components/address/addressDefault";
import AddressUps from "../../components/address/addressUps";
import AddressFedex from "../../components/address/addressFedex";

export default ({ inputType, title, labels, validator }) => {
  const comp = {
    title,
    labels,
  };
  switch (inputType) {
    case AddressInputType.default:
      comp.render = AddressDefault(validator);
      break;
    case AddressInputType.ups:
      comp.render = AddressUps(validator);
      break;
    case AddressInputType.fedex:
      comp.render = AddressFedex(validator);
      break;
    default:
      console.warn(`inputType ${inputType} is not defined`);
      comp.render = "unknown";
      break;
  }
  return comp;
};

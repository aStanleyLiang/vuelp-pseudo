import { ProductInputType } from "../../constants/inputType";
import ProductDefault from "../../components/product/productDefault";

export default ({ inputType, title, labels, validator }) => {
  const comp = {
    title,
    labels,
  };
  switch (inputType) {
    case ProductInputType.default:
      comp.render = ProductDefault(validator);
      break;
    default:
      console.warn(`inputType ${inputType} is not defined`);
      comp.render = "unknown";
      break;
  }
  return comp;
};

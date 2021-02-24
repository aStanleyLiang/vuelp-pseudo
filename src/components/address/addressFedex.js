import { getAddressRules } from "./utils";

const delivery = "fedex";

export default (validator) => {
  return {
    name: "AddressFedex",
    validator: getAddressRules({ validator, delivery }),
  };
};

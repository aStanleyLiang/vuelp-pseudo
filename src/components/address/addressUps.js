import { getAddressRules } from "./utils";

const delivery = "ups";

export default (validator) => {
  return {
    name: "AddressUps",
    validator: getAddressRules({ validator, delivery }),
  };
};

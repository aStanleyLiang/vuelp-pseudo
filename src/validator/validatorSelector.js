import validatorDefault from "../validator/definition/validator.json";
import validatorCountries from "../validator/definition/validator.countries.json";
import validatorPackageDelivery from "../validator/definition/validator.package-delivery.json";
import printObject from "../helper/printObject";

export default (country) => {
  const validator = Object.assign(
    {},
    validatorDefault,
    country in validatorCountries ? validatorCountries[country] : {},
    country in validatorPackageDelivery ? validatorPackageDelivery[country] : {}
  );
  return {
    print: () => {
      printObject("validator", validator);
    },
    rules: () => validator,
  };
};

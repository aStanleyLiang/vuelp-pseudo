import validatorDefault from "../validator/definition/validator.json";
import validatorCountries from "../validator/definition/validator.countries.json";
import validatorPackageDelivery from "../validator/definition/validator.package-delivery.json";
import printObject from "../helper/printObject";
import fs from "fs";
import path from "path";

export default ({ country, language, customer }) => {
  let validatorCustomer;
  try {
    const validatorCustomerPath = path.resolve(
      `./src/validator/definition/validator.customer.${customer}.json`
    );
    if (fs.existsSync(validatorCustomerPath)) {
      validatorCustomer = require(validatorCustomerPath);
    } else {
      console.warn("file not exist");
    }
  } catch (error) {
    console.error(error);
  }
  const validator = Object.assign(
    {},
    validatorDefault,
    country in validatorCountries ? validatorCountries[country] : {},
    country in validatorPackageDelivery
      ? validatorPackageDelivery[country]
      : {},
    !!validatorCustomer &&
      country in validatorCustomer &&
      !!validatorCustomer[country].languages &&
      language in validatorCustomer[country].languages
      ? validatorCustomer[country].languages[language]
      : {}
  );
  return {
    print: () => {
      printObject("validator", validator);
    },
    rules: () => validator,
  };
};

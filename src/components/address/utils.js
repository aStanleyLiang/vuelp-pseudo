export const getAddressRules = ({ validator, delivery }) => {
  const { address, city, state, zipcode, tel } = validator.rules();
  let rules = { address, city, state, zipcode, tel };
  if (
    !!validator.rules().packageDelivery &&
    !!validator.rules().packageDelivery[delivery]
  ) {
    rules = Object.assign(
      {},
      rules,
      validator.rules().packageDelivery[delivery]
    );
  }
  return rules;
};

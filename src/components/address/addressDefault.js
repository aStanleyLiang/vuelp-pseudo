export default (validator) => {
  const { address, city, state, zipcode, tel } = validator.rules();
  return {
    name: "AddressDefault",
    validator: { address, city, state, zipcode, tel },
  };
};

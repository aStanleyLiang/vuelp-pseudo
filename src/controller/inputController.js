import printObject from "../helper/printObject";
import DispatcherType from "../constants/dispatcherType";
import productDispatcher from "../components/product/productDispatcher";
import addressDispatcher from "../components/address/addressDispatcher";

export default ({ country, validator, customer }) => {
  const setting = require(`./definition/setting.${customer}.json`);
  const inputComps = setting.inputController.dispatchers.reduce(
    (accumulator, dispatcher) => {
      const { type, ...rest } = dispatcher;
      const propsToDispatcher = { ...rest, validator };

      switch (type) {
        case DispatcherType.product:
          accumulator.push(productDispatcher(propsToDispatcher));
          break;
        case DispatcherType.address:
          accumulator.push(addressDispatcher(propsToDispatcher));
          break;
        default:
          console.warn(`type ${type} is not defined.`);
          break;
      }
      return accumulator;
    },
    []
  );
  return {
    print: () => printObject("inputController", inputComps),
    inputComps: () => inputComps,
  };
};

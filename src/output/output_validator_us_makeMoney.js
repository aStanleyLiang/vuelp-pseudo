import validatorSelector from "../validator/validatorSelector";
import inputController from "../controller/inputController";

const country = "us";
const customer = "makeMoney";
const validator = validatorSelector(country);
validator.print();

const inputs = inputController({ country, validator, customer });
inputs.print();

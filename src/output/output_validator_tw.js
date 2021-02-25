import validatorSelector from "../validator/validatorSelector";
import inputController from "../controller/inputController";

const country = "tw";
const customer = "beRich";
const validator = validatorSelector({ country });
validator.print();

const inputs = inputController({ country, validator, customer });
inputs.print();

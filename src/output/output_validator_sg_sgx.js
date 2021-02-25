import validatorSelector from "../validator/validatorSelector";
import inputController from "../controller/inputController";

const country = "sg";
const language = "en_us";
const customer = "sgx";
console.log("\x1b[35m%s\x1b[0m", customer, country, language);
const validator = validatorSelector({ country, language, customer });
validator.print();

const inputs = inputController({ country, validator, customer });
inputs.print();

import { shareSchemaJoi } from "../../joi/share_joi";
import { loginSchemaJoi } from "../../joi/login_joi";
import { registerSchemaJoi } from "../../joi/user_joi";
import { validateSchema } from "./validate-schema";
import { editSchemaJoi } from "../../joi/userEdit_joi";

const validataUserRegister = validateSchema(registerSchemaJoi);
const validataUserEdit = validateSchema(editSchemaJoi);
const validataUserLogin = validateSchema(loginSchemaJoi);
const validataShareAdd = validateSchema(shareSchemaJoi);

export {
  validataUserRegister,
  validataUserLogin,
  validataShareAdd,
  validataUserEdit,
};

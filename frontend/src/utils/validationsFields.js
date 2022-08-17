import { fields, validations } from "./ObjFields";

function validationsFields(user) {
  let error = {};

  for (let u in fields) {
    if (user[fields[u]] === "" || user[fields[u]] === undefined) {
      error[fields[u]] = fields[u];
    }
    if (validations[fields[u]]) {
      if (validations[fields[u]](user[fields[u]])?.error) {
        error[fields[u]] = validations[fields[u]](user[fields[u]]).error;
      }
    }
  }

  return error;
}

export default validationsFields;

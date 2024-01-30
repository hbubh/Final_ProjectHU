const validation = (schema, userInput) => {
  const { error } = schema.validate(userInput, { abortEarly: false });
  if (!error) {
    return null;
  }
  let errorObj = {};
  const { details } = error;
  for (let item of details) {
    let key = item.path[0];
    let { message } = item;
    errorObj[key] = message;
  }
  return errorObj;
};
export default validation;

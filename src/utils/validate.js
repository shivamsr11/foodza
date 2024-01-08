export const checkValidData = (values) =>{

  const errors = {}

  const email_pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const password_pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ ;

  if(values.email === ""){
    errors.email = "Email is Required"
  }
  else if(!email_pattern.test(values.email)){
    errors.email = "Email is invalid"
  }
  if(values.password === ""){
    errors.password = "Password is Required"
  }
  else if(!password_pattern.test(values.password)){
    errors.password = "Password is invalid"
  }
  return errors;
}
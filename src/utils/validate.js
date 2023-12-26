// export const checkValidData = (email,password) =>{
//   // const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName)

//     const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
//   const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

//   // if(!isFullNameValid) return "Full Name is not valid";

//    if(!isEmailValid) return "Email is not valid";
//    if(!isPasswordValid) return "Password is not valid";

//    return null;
// }

export const checkValidData = (values) =>{

  const errors = {}

  // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

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
export const checkValidData = (name, email, password) => {
  const nameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!nameValid) return "name is not valid";
  if (!emailValid) return "email is not valid";
  if (!passwordValid) return "password is not valid";

  return null;
};

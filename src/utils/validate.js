export const checkValidateData = (email, password) => {
    // const isNameValid = /^[A-Za-z]{5,}$/.test(name);
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    // if (!isNameValid) return "Name is not valid.";
    if (!isEmailValid) return "Email is not valid.";
    if (!isPasswordValid) return "Password is not valid"

    return null;
}
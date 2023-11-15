export const validateName = (name) => {
    const nameRegex =
      /^(?=.*[a-zA-Zа-яА-ЯіІїЇєЄґҐ].*[a-zA-Zа-яА-ЯіІїЇєЄґҐ])[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]{2,}$/;
    return nameRegex.test(name);
  };
  
  export const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
  };
  
  export const validatePhone = (phoneNumber) => {
    const phoneNumberRegex =
      /^[\d]{3}-[\d]{3}-[\d]{4}$|^[\d]{2}-[\d]{3}-[\d]{3}$|^[\d]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  export const validateMessage = (message) => {
    return message.length <= 200;
  };
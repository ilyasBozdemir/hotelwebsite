function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.substring(2, phoneNumber.length);
    phoneNumber = phoneNumber.replace(
      /(\d{4})(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3 $4"
    );
    return phoneNumber;
  }

  export default formatPhoneNumber
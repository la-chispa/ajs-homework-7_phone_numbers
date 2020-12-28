export default class Validator {
  constructor(phone) {
    this.phone = phone;
  }

  validateFormatPhone() {
    const numberWithoutExcess = (this.phone.replace(/\D/g, ''));

    const checkingFirstSymbol = /^\+/.test(this.phone);

    function addPlus(data) {
      return data.replace(/^(\d)/, '+$1');
    }

    return (checkingFirstSymbol) ? addPlus(numberWithoutExcess) : addPlus(numberWithoutExcess.replace(/^\d/, '7'));
  }
}

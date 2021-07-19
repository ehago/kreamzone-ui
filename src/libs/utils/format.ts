export const toPriceFormat = (price: number | string) => {
  let _price;

  if (typeof price === 'string') {
    try {
      _price = parseInt(price);
    } catch (error) {
      console.error('invalid number string');
      return price;
    }
    return _price.toLocaleString();
  } else {
    return price.toLocaleString();
  }
};

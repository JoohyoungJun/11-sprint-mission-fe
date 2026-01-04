export const priceFormat = (price) => {
    const intl = new Intl.NumberFormat('ko-KR', {
      maximumSignificantDigits: 3,
    });

    return intl.format(price);
  };
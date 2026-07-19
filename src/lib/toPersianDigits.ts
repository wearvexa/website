const toPersianDigits = (value: string | number): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  return String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)]);
};

export { toPersianDigits };
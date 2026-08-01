// @ts-ignore
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const toJalali = (input: any) => {
  const m = moment(input);
  if (!m || !m.isValid()) return null;
  return m.format( "jYYYY/jMM/jDD");
};

export { toJalali };

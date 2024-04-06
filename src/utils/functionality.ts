export const getFirstLetter = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const first = Array.from(firstName)[0];
  const second = Array.from(lastName)[0];
  return first + second;
};

export const isImageHttpOrBase64 = (params: string) => {
  const httpRegex = /^(http:\/\/|https:\/\/)/i;
  const base64regex = params?.includes('base64');
  return httpRegex.test(params) || base64regex;
};

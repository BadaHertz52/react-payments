/**
 * 숫자가 한자리인 경우 앞에 0을 붙이는 함수
 */
export const convertToTwoDigits = (numberString: string) =>
  numberString.length < 2 ? `0${numberString}` : numberString.toString();
/**
 * text 타입외의 숫자,배열도 maxLength을 적용할 수 있도록 해주는 기능
 * @param text
 * @returns maxLength 값에 맞추어서 input의 value를 자른 값
 */
export const sliceText = (text: string, maxLength: number) =>
  text.slice(0, maxLength);

export type FieldValidatorType = (value: string) => string | undefined;
export const required = (value: any) => {
    if (value) {
        return undefined;
    } else {
        return "error message";
    }
};
export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

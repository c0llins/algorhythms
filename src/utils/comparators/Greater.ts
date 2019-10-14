import less from "./Less";

const greater = <T>(a: T, b: T): boolean => !less(a, b);

export default greater;

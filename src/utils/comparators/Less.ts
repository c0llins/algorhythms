import Comparator from "../../typings/Comparator";

const less: Comparator = <T>(a: T, b: T): boolean => a < b;

export default less;

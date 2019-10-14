import Comparator from "../../typings/Comparator";
import less from "./Less";

const greater: Comparator = <T>(a: T, b: T): boolean => !less(a, b);

export default greater;

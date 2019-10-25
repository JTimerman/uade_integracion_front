import fetchAPI from "../api/fetchAPI";
import { BASE_URL, PAYROLL } from "../constants/endpoints.json";

const getMonthly = () => {
  return fetchAPI(BASE_URL + PAYROLL, "GET").then(res => {
    const { result } = res;
    return result;
    // return result.reduce((prevPayroll, salary) => {
    //   const { fecha, total, facturada } = salary;
    //   const date = new Date(fecha);
    //   const monthNumber = date.getMonth() + 1;
    //   if (!prevPayroll[monthNumber]) prevPayroll[monthNumber] = defaultValues;
    //   if (facturada) prevPayroll[monthNumber].billed++;
    //   else prevPayroll[monthNumber].pending++;
    //   prevPayroll[monthNumber].total += total;
    //   return prevPayroll;
    // }, {});
  });
};

const PayrollService = { getMonthly };
export default PayrollService;

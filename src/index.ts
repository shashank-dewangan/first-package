interface Employee {
  id: number;
  name: string;
  deptId: number;
}

const emp: Employee = {
  id: 1234,
  name: 'emp',
  deptId: 22,
};
//comment
console.log(emp);

const add = (a: number, b: number): number => a + b;
export default add;

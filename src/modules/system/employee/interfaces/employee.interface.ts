import { EmployeeEntity } from "../repository/entities/employee.entity";


export interface IEmployeeEntity extends Omit<EmployeeEntity, ''> {

}
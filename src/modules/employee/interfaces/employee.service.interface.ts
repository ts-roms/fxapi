import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { EmployeeDto } from "../dtos/employee.dto";
import { EmployeeEntity } from "../repository/entities/employee.entity";


export interface IEmployeeService {

  create(
    data: EmployeeDto,
    options?: IDatabaseCreateOptions
  ): Promise<EmployeeEntity>;

  findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]>;

  getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number>
}
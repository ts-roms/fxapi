import { Injectable } from "@nestjs/common/decorators";
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { EmployeeDto } from "../dtos/employee.dto";
import { IEmployeeService } from "../interfaces/employee.service.interface";
import { EmployeeEntity } from "../repository/entities/employee.entity";
import { EmployeeRepository } from "../repository/repositories/employee.repository";


@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository
  ) {

  }

  async create(
    { ...dto }: EmployeeDto,
    options?: IDatabaseCreateOptions
  ): Promise<EmployeeEntity> {
    const create: EmployeeEntity = new EmployeeEntity();
    create.salutation = dto.salutation;
    create.firstName = dto.firstName;
    create.lastName = dto.lastName;
    create.middleName = dto.middleName;
    create.gender = dto.gender;
    create.dob = new Date();
    create.photo = dto.photo;
    create.active = true;
    create.blocked = false;
    return this.employeeRepository.create<EmployeeEntity>(create, options);
  }

  async findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]> {
    const result = this.employeeRepository.findAll<T>(find, options);
    return result;
  }

  async getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number> {
    return this.employeeRepository.getTotal(find, options);
  }
}
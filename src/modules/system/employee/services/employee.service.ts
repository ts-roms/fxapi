import { Injectable } from "@nestjs/common/decorators";
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { EmployeeDto } from "../dtos/employee.dto";
import { IEmployeeService } from "../interfaces/employee.service.interface";
import { ContactDetailsEntity } from "../repository/entities/contact-details.entity";
import { EmployeeEntity } from "../repository/entities/employee.entity";
import { EmploymentEntity } from "../repository/entities/employment.entity";
import { ContactDetailsRepository } from "../repository/repositories/contact-details.repository";
import { EmployeeRepository } from "../repository/repositories/employee.repository";
import { EmploymentRepository } from "../repository/repositories/employment.repository";


@Injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    private readonly employmentRepository: EmploymentRepository,
    private readonly employeeRepository: EmployeeRepository,
    private readonly contactDetailsRepository: ContactDetailsRepository
  ) {

  }

  async create(
    { ...dto }: EmployeeDto,
    options?: IDatabaseCreateOptions
  ): Promise<EmployeeEntity> {
    const create: EmployeeEntity = new EmployeeEntity();
    create.salutation = dto.salutation;
    create.firstName = dto.firstName;
    create.middleName = dto.middleName;
    create.lastName = dto.lastName;
    create.gender = dto.gender;
    create.dob = dto.dob;
    create.photo = dto.photo;
    create.active = true;
    create.blocked = false;
    const newEmployee = await this.employeeRepository.create<EmployeeEntity>(create, options);

    const contactDetails: ContactDetailsEntity = new ContactDetailsEntity();
    contactDetails.userId = newEmployee._id;
    contactDetails.contactNumber = dto.contactNumber;
    contactDetails.emailAddress = dto.emailAddress;
    contactDetails.street = dto.street;
    contactDetails.city = dto.city;
    contactDetails.province = dto.province;
    contactDetails.state = dto.state;
    contactDetails.country = dto.country;
    contactDetails.postalCode = dto.postalCode;

    this.contactDetailsRepository.create<ContactDetailsEntity>(contactDetails, options)

    const employment: EmploymentEntity = new EmploymentEntity();
    employment.userId = newEmployee._id;
    employment.joiningDate = dto.joiningDate;
    employment.branch = dto.branch;
    employment.loanOfficer = dto.loanOfficer;
    employment.salaryRange = dto.salaryRange;
    employment.description = dto.description;

    this.employmentRepository.create<EmploymentEntity>(employment, options);

    return newEmployee;
  }

  async findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]> {
    return this.employeeRepository.findAll<T>(find, options);
  }

  async getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number> {
    return this.employeeRepository.getTotal(find, options);
  }
}
/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.19.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateDepartmentResponse,
  CreateDepartmentResponseFromJSON,
  CreateEmployeeResponse,
  CreateEmployeeResponseFromJSON,
  CreateHrisCompanyResponse,
  CreateHrisCompanyResponseFromJSON,
  DeleteDepartmentResponse,
  DeleteDepartmentResponseFromJSON,
  DeleteEmployeeResponse,
  DeleteEmployeeResponseFromJSON,
  DeleteHrisCompanyResponse,
  DeleteHrisCompanyResponseFromJSON,
  Department,
  DepartmentToJSON,
  Employee,
  EmployeesFilter,
  EmployeeToJSON,
  GetDepartmentResponse,
  GetDepartmentResponseFromJSON,
  GetDepartmentsResponse,
  GetDepartmentsResponseFromJSON,
  GetEmployeeResponse,
  GetEmployeeResponseFromJSON,
  GetEmployeesResponse,
  GetEmployeesResponseFromJSON,
  GetHrisCompaniesResponse,
  GetHrisCompaniesResponseFromJSON,
  GetHrisCompanyResponse,
  GetHrisCompanyResponseFromJSON,
  HrisCompany,
  HrisCompanyToJSON,
  UpdateDepartmentResponse,
  UpdateDepartmentResponseFromJSON,
  UpdateEmployeeResponse,
  UpdateEmployeeResponseFromJSON,
  UpdateHrisCompanyResponse,
  UpdateHrisCompanyResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface HrisApiCompaniesAddRequest {
  company: HrisCompany
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface HrisApiCompaniesAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
}

export interface HrisApiCompaniesDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiCompaniesOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiCompaniesUpdateRequest {
  id: string
  company: HrisCompany
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiDepartmentsAddRequest {
  department: Department
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface HrisApiDepartmentsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
}

export interface HrisApiDepartmentsDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiDepartmentsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiDepartmentsUpdateRequest {
  id: string
  department: Department
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiEmployeesAddRequest {
  employee: Employee
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface HrisApiEmployeesAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: EmployeesFilter
}

export interface HrisApiEmployeesDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiEmployeesOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface HrisApiEmployeesUpdateRequest {
  id: string
  employee: Employee
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class HrisApi extends runtime.BaseAPI {
  /**
   * Create Company
   * Create Company
   */
  async companiesAddRaw(
    requestParameters: HrisApiCompaniesAddRequest
  ): Promise<runtime.ApiResponse<CreateHrisCompanyResponse>> {
    if (requestParameters.company === null || requestParameters.company === undefined) {
      throw new runtime.RequiredError(
        'company',
        'Required parameter requestParameters.company was null or undefined when calling companiesAdd.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/companies`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: HrisCompanyToJSON(requestParameters.company)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateHrisCompanyResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Company
   * Create Company
   */
  async companiesAdd(
    requestParameters: HrisApiCompaniesAddRequest
  ): Promise<CreateHrisCompanyResponse> {
    const response = await this.companiesAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List Companies
   * List Companies
   */
  async companiesAllRaw(
    requestParameters: HrisApiCompaniesAllRequest
  ): Promise<runtime.ApiResponse<GetHrisCompaniesResponse>> {
    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/companies`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetHrisCompaniesResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Companies
   * List Companies
   */
  async companiesAll(
    requestParameters: HrisApiCompaniesAllRequest
  ): Promise<GetHrisCompaniesResponse> {
    const response = await this.companiesAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete Company
   * Delete Company
   */
  async companiesDeleteRaw(
    requestParameters: HrisApiCompaniesDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteHrisCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesDelete.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteHrisCompanyResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Company
   * Delete Company
   */
  async companiesDelete(
    requestParameters: HrisApiCompaniesDeleteRequest
  ): Promise<DeleteHrisCompanyResponse> {
    const response = await this.companiesDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Company
   * Get Company
   */
  async companiesOneRaw(
    requestParameters: HrisApiCompaniesOneRequest
  ): Promise<runtime.ApiResponse<GetHrisCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesOne.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetHrisCompanyResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Company
   * Get Company
   */
  async companiesOne(
    requestParameters: HrisApiCompaniesOneRequest
  ): Promise<GetHrisCompanyResponse> {
    const response = await this.companiesOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Update Company
   * Update Company
   */
  async companiesUpdateRaw(
    requestParameters: HrisApiCompaniesUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateHrisCompanyResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling companiesUpdate.'
      )
    }

    if (requestParameters.company === null || requestParameters.company === undefined) {
      throw new runtime.RequiredError(
        'company',
        'Required parameter requestParameters.company was null or undefined when calling companiesUpdate.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/companies/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: HrisCompanyToJSON(requestParameters.company)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateHrisCompanyResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Company
   * Update Company
   */
  async companiesUpdate(
    requestParameters: HrisApiCompaniesUpdateRequest
  ): Promise<UpdateHrisCompanyResponse> {
    const response = await this.companiesUpdateRaw(requestParameters)
    return await response.value()
  }

  /**
   * Create Department
   * Create Department
   */
  async departmentsAddRaw(
    requestParameters: HrisApiDepartmentsAddRequest
  ): Promise<runtime.ApiResponse<CreateDepartmentResponse>> {
    if (requestParameters.department === null || requestParameters.department === undefined) {
      throw new runtime.RequiredError(
        'department',
        'Required parameter requestParameters.department was null or undefined when calling departmentsAdd.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/departments`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: DepartmentToJSON(requestParameters.department)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateDepartmentResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Department
   * Create Department
   */
  async departmentsAdd(
    requestParameters: HrisApiDepartmentsAddRequest
  ): Promise<CreateDepartmentResponse> {
    const response = await this.departmentsAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List Departments
   * List Departments
   */
  async departmentsAllRaw(
    requestParameters: HrisApiDepartmentsAllRequest
  ): Promise<runtime.ApiResponse<GetDepartmentsResponse>> {
    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/departments`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetDepartmentsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Departments
   * List Departments
   */
  async departmentsAll(
    requestParameters: HrisApiDepartmentsAllRequest
  ): Promise<GetDepartmentsResponse> {
    const response = await this.departmentsAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete Department
   * Delete Department
   */
  async departmentsDeleteRaw(
    requestParameters: HrisApiDepartmentsDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteDepartmentResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling departmentsDelete.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/departments/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteDepartmentResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Department
   * Delete Department
   */
  async departmentsDelete(
    requestParameters: HrisApiDepartmentsDeleteRequest
  ): Promise<DeleteDepartmentResponse> {
    const response = await this.departmentsDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Department
   * Get Department
   */
  async departmentsOneRaw(
    requestParameters: HrisApiDepartmentsOneRequest
  ): Promise<runtime.ApiResponse<GetDepartmentResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling departmentsOne.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/departments/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetDepartmentResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Department
   * Get Department
   */
  async departmentsOne(
    requestParameters: HrisApiDepartmentsOneRequest
  ): Promise<GetDepartmentResponse> {
    const response = await this.departmentsOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Update Department
   * Update Department
   */
  async departmentsUpdateRaw(
    requestParameters: HrisApiDepartmentsUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateDepartmentResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling departmentsUpdate.'
      )
    }

    if (requestParameters.department === null || requestParameters.department === undefined) {
      throw new runtime.RequiredError(
        'department',
        'Required parameter requestParameters.department was null or undefined when calling departmentsUpdate.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/departments/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: DepartmentToJSON(requestParameters.department)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateDepartmentResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Department
   * Update Department
   */
  async departmentsUpdate(
    requestParameters: HrisApiDepartmentsUpdateRequest
  ): Promise<UpdateDepartmentResponse> {
    const response = await this.departmentsUpdateRaw(requestParameters)
    return await response.value()
  }

  /**
   * Create Employee
   * Create Employee
   */
  async employeesAddRaw(
    requestParameters: HrisApiEmployeesAddRequest
  ): Promise<runtime.ApiResponse<CreateEmployeeResponse>> {
    if (requestParameters.employee === null || requestParameters.employee === undefined) {
      throw new runtime.RequiredError(
        'employee',
        'Required parameter requestParameters.employee was null or undefined when calling employeesAdd.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/employees`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: EmployeeToJSON(requestParameters.employee)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateEmployeeResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Employee
   * Create Employee
   */
  async employeesAdd(
    requestParameters: HrisApiEmployeesAddRequest
  ): Promise<CreateEmployeeResponse> {
    const response = await this.employeesAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List Employees
   * List Employees
   */
  async employeesAllRaw(
    requestParameters: HrisApiEmployeesAllRequest
  ): Promise<runtime.ApiResponse<GetEmployeesResponse>> {
    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.filter !== undefined) {
      queryParameters['filter'] = requestParameters.filter
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/employees`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetEmployeesResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Employees
   * List Employees
   */
  async employeesAll(requestParameters: HrisApiEmployeesAllRequest): Promise<GetEmployeesResponse> {
    const response = await this.employeesAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete Employee
   * Delete Employee
   */
  async employeesDeleteRaw(
    requestParameters: HrisApiEmployeesDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteEmployeeResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling employeesDelete.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/employees/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteEmployeeResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Employee
   * Delete Employee
   */
  async employeesDelete(
    requestParameters: HrisApiEmployeesDeleteRequest
  ): Promise<DeleteEmployeeResponse> {
    const response = await this.employeesDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Employee
   * Get Employee
   */
  async employeesOneRaw(
    requestParameters: HrisApiEmployeesOneRequest
  ): Promise<runtime.ApiResponse<GetEmployeeResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling employeesOne.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/employees/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetEmployeeResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Employee
   * Get Employee
   */
  async employeesOne(requestParameters: HrisApiEmployeesOneRequest): Promise<GetEmployeeResponse> {
    const response = await this.employeesOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Update Employee
   * Update Employee
   */
  async employeesUpdateRaw(
    requestParameters: HrisApiEmployeesUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateEmployeeResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling employeesUpdate.'
      )
    }

    if (requestParameters.employee === null || requestParameters.employee === undefined) {
      throw new runtime.RequiredError(
        'employee',
        'Required parameter requestParameters.employee was null or undefined when calling employeesUpdate.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/hris/employees/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: EmployeeToJSON(requestParameters.employee)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateEmployeeResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Employee
   * Update Employee
   */
  async employeesUpdate(
    requestParameters: HrisApiEmployeesUpdateRequest
  ): Promise<UpdateEmployeeResponse> {
    const response = await this.employeesUpdateRaw(requestParameters)
    return await response.value()
  }
}

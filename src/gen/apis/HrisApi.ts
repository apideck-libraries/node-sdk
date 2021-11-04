/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateEmployeeResponse,
  CreateEmployeeResponseFromJSON,
  DeleteEmployeeResponse,
  DeleteEmployeeResponseFromJSON,
  Employee,
  EmployeeToJSON,
  GetEmployeeResponse,
  GetEmployeeResponseFromJSON,
  GetEmployeesResponse,
  GetEmployeesResponseFromJSON,
  UpdateEmployeeResponse,
  UpdateEmployeeResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

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

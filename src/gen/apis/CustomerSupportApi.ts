/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.54.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateCustomerSupportCustomerResponse,
  CreateCustomerSupportCustomerResponseFromJSON,
  CustomerSupportCustomer,
  CustomerSupportCustomerToJSON,
  DeleteCustomerSupportCustomerResponse,
  DeleteCustomerSupportCustomerResponseFromJSON,
  GetCustomerSupportCustomerResponse,
  GetCustomerSupportCustomerResponseFromJSON,
  GetCustomerSupportCustomersResponse,
  GetCustomerSupportCustomersResponseFromJSON,
  UpdateCustomerSupportCustomerResponse,
  UpdateCustomerSupportCustomerResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface CustomerSupportApiCustomersAddRequest {
  customer: CustomerSupportCustomer
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface CustomerSupportApiCustomersAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
}

export interface CustomerSupportApiCustomersDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface CustomerSupportApiCustomersOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface CustomerSupportApiCustomersUpdateRequest {
  id: string
  customer: CustomerSupportCustomer
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class CustomerSupportApi extends runtime.BaseAPI {
  /**
   * Create Customer Support Customer
   * Create Customer Support Customer
   */
  async customersAddRaw(
    requestParameters: CustomerSupportApiCustomersAddRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateCustomerSupportCustomerResponse>> {
    if (requestParameters.customer === null || requestParameters.customer === undefined) {
      throw new runtime.RequiredError(
        'customer',
        'Required parameter requestParameters.customer was null or undefined when calling customersAdd.'
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

    const response = await this.request(
      {
        path: `/customer-support/customers`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CustomerSupportCustomerToJSON(requestParameters.customer)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateCustomerSupportCustomerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Customer Support Customer
   * Create Customer Support Customer
   */
  async customersAdd(
    requestParameters: CustomerSupportApiCustomersAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateCustomerSupportCustomerResponse> {
    const response = await this.customersAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Customer Support Customers
   * List Customer Support Customers
   */
  async customersAllRaw(
    requestParameters: CustomerSupportApiCustomersAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetCustomerSupportCustomersResponse>> {
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

    const response = await this.request(
      {
        path: `/customer-support/customers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetCustomerSupportCustomersResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Customer Support Customers
   * List Customer Support Customers
   */
  async customersAll(
    requestParameters: CustomerSupportApiCustomersAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetCustomerSupportCustomersResponse> {
    const response = await this.customersAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Delete Customer Support Customer
   * Delete Customer Support Customer
   */
  async customersDeleteRaw(
    requestParameters: CustomerSupportApiCustomersDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DeleteCustomerSupportCustomerResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling customersDelete.'
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

    const response = await this.request(
      {
        path: `/customer-support/customers/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteCustomerSupportCustomerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Customer Support Customer
   * Delete Customer Support Customer
   */
  async customersDelete(
    requestParameters: CustomerSupportApiCustomersDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<DeleteCustomerSupportCustomerResponse> {
    const response = await this.customersDeleteRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Customer Support Customer
   * Get Customer Support Customer
   */
  async customersOneRaw(
    requestParameters: CustomerSupportApiCustomersOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetCustomerSupportCustomerResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling customersOne.'
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

    const response = await this.request(
      {
        path: `/customer-support/customers/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetCustomerSupportCustomerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Customer Support Customer
   * Get Customer Support Customer
   */
  async customersOne(
    requestParameters: CustomerSupportApiCustomersOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetCustomerSupportCustomerResponse> {
    const response = await this.customersOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update Customer Support Customer
   * Update Customer Support Customer
   */
  async customersUpdateRaw(
    requestParameters: CustomerSupportApiCustomersUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateCustomerSupportCustomerResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling customersUpdate.'
      )
    }

    if (requestParameters.customer === null || requestParameters.customer === undefined) {
      throw new runtime.RequiredError(
        'customer',
        'Required parameter requestParameters.customer was null or undefined when calling customersUpdate.'
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

    const response = await this.request(
      {
        path: `/customer-support/customers/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: CustomerSupportCustomerToJSON(requestParameters.customer)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateCustomerSupportCustomerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Customer Support Customer
   * Update Customer Support Customer
   */
  async customersUpdate(
    requestParameters: CustomerSupportApiCustomersUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateCustomerSupportCustomerResponse> {
    const response = await this.customersUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }
}

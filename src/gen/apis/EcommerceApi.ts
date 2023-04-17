/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  EcommerceCustomersFilter,
  EcommerceOrdersFilter,
  GetEcommerceCustomerResponse,
  GetEcommerceCustomerResponseFromJSON,
  GetEcommerceCustomersResponse,
  GetEcommerceCustomersResponseFromJSON,
  GetEcommerceOrderResponse,
  GetEcommerceOrderResponseFromJSON,
  GetEcommerceOrdersResponse,
  GetEcommerceOrdersResponseFromJSON,
  GetProductResponse,
  GetProductResponseFromJSON,
  GetProductsResponse,
  GetProductsResponseFromJSON,
  GetStoreResponse,
  GetStoreResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface EcommerceApiCustomersAll2Request {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: EcommerceCustomersFilter
  fields?: string | null
}

export interface EcommerceApiCustomersOne2Request {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

export interface EcommerceApiOrdersAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: EcommerceOrdersFilter
  fields?: string | null
}

export interface EcommerceApiOrdersOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

export interface EcommerceApiProductsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  fields?: string | null
}

export interface EcommerceApiProductsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

export interface EcommerceApiStoresOneRequest {
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

/**
 *
 */
export class EcommerceApi extends runtime.BaseAPI {
  /**
   * List Customers
   * List Customers
   */
  async customersAll2Raw(
    requestParameters: EcommerceApiCustomersAll2Request,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetEcommerceCustomersResponse>> {
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

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/customers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetEcommerceCustomersResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Customers
   * List Customers
   */
  async customersAll2(
    requestParameters: EcommerceApiCustomersAll2Request = {},
    initOverrides?: RequestInit
  ): Promise<GetEcommerceCustomersResponse> {
    const response = await this.customersAll2Raw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Customer
   * Get Customer
   */
  async customersOne2Raw(
    requestParameters: EcommerceApiCustomersOne2Request,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetEcommerceCustomerResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling customersOne2.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/customers/{id}`.replace(
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
      GetEcommerceCustomerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Customer
   * Get Customer
   */
  async customersOne2(
    requestParameters: EcommerceApiCustomersOne2Request,
    initOverrides?: RequestInit
  ): Promise<GetEcommerceCustomerResponse> {
    const response = await this.customersOne2Raw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Orders
   * List Orders
   */
  async ordersAllRaw(
    requestParameters: EcommerceApiOrdersAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetEcommerceOrdersResponse>> {
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

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/orders`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetEcommerceOrdersResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Orders
   * List Orders
   */
  async ordersAll(
    requestParameters: EcommerceApiOrdersAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetEcommerceOrdersResponse> {
    const response = await this.ordersAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Order
   * Get Order
   */
  async ordersOneRaw(
    requestParameters: EcommerceApiOrdersOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetEcommerceOrderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling ordersOne.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/orders/{id}`.replace(
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
      GetEcommerceOrderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Order
   * Get Order
   */
  async ordersOne(
    requestParameters: EcommerceApiOrdersOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetEcommerceOrderResponse> {
    const response = await this.ordersOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Products
   * List Products
   */
  async productsAllRaw(
    requestParameters: EcommerceApiProductsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetProductsResponse>> {
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

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/products`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetProductsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Products
   * List Products
   */
  async productsAll(
    requestParameters: EcommerceApiProductsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetProductsResponse> {
    const response = await this.productsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Product
   * Get Product
   */
  async productsOneRaw(
    requestParameters: EcommerceApiProductsOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetProductResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling productsOne.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/products/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetProductResponseFromJSON(jsonValue))
  }

  /**
   * Get Product
   * Get Product
   */
  async productsOne(
    requestParameters: EcommerceApiProductsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetProductResponse> {
    const response = await this.productsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Store
   * Get Store
   */
  async storesOneRaw(
    requestParameters: EcommerceApiStoresOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetStoreResponse>> {
    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.fields !== undefined) {
      queryParameters['fields'] = requestParameters.fields
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
        path: `/ecommerce/store`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetStoreResponseFromJSON(jsonValue))
  }

  /**
   * Get Store
   * Get Store
   */
  async storesOne(
    requestParameters: EcommerceApiStoresOneRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetStoreResponse> {
    const response = await this.storesOneRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
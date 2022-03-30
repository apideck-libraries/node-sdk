/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.10.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateOrderResponse,
  CreateOrderResponseFromJSON,
  DeleteOrderResponse,
  DeleteOrderResponseFromJSON,
  GetOrderResponse,
  GetOrderResponseFromJSON,
  GetOrdersResponse,
  GetOrdersResponseFromJSON,
  Order,
  OrderToJSON,
  UpdateOrderResponse,
  UpdateOrderResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface PosApiOrdersAddRequest {
  order: Order
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface PosApiOrdersAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
}

export interface PosApiOrdersDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface PosApiOrdersOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface PosApiOrdersUpdateRequest {
  id: string
  order: Order
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class PosApi extends runtime.BaseAPI {
  /**
   * Create Order
   * Create Order
   */
  async ordersAddRaw(
    requestParameters: PosApiOrdersAddRequest
  ): Promise<runtime.ApiResponse<CreateOrderResponse>> {
    if (requestParameters.order === null || requestParameters.order === undefined) {
      throw new runtime.RequiredError(
        'order',
        'Required parameter requestParameters.order was null or undefined when calling ordersAdd.'
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
      path: `/pos/orders`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: OrderToJSON(requestParameters.order)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateOrderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Order
   * Create Order
   */
  async ordersAdd(requestParameters: PosApiOrdersAddRequest): Promise<CreateOrderResponse> {
    const response = await this.ordersAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List Orders
   * List Orders
   */
  async ordersAllRaw(
    requestParameters: PosApiOrdersAllRequest
  ): Promise<runtime.ApiResponse<GetOrdersResponse>> {
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
      path: `/pos/orders`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetOrdersResponseFromJSON(jsonValue))
  }

  /**
   * List Orders
   * List Orders
   */
  async ordersAll(requestParameters: PosApiOrdersAllRequest): Promise<GetOrdersResponse> {
    const response = await this.ordersAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete Order
   * Delete Order
   */
  async ordersDeleteRaw(
    requestParameters: PosApiOrdersDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteOrderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling ordersDelete.'
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
      path: `/pos/orders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteOrderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Order
   * Delete Order
   */
  async ordersDelete(requestParameters: PosApiOrdersDeleteRequest): Promise<DeleteOrderResponse> {
    const response = await this.ordersDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Order
   * Get Order
   */
  async ordersOneRaw(
    requestParameters: PosApiOrdersOneRequest
  ): Promise<runtime.ApiResponse<GetOrderResponse>> {
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
      path: `/pos/orders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetOrderResponseFromJSON(jsonValue))
  }

  /**
   * Get Order
   * Get Order
   */
  async ordersOne(requestParameters: PosApiOrdersOneRequest): Promise<GetOrderResponse> {
    const response = await this.ordersOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Update Order
   * Update Order
   */
  async ordersUpdateRaw(
    requestParameters: PosApiOrdersUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateOrderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling ordersUpdate.'
      )
    }

    if (requestParameters.order === null || requestParameters.order === undefined) {
      throw new runtime.RequiredError(
        'order',
        'Required parameter requestParameters.order was null or undefined when calling ordersUpdate.'
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
      path: `/pos/orders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: OrderToJSON(requestParameters.order)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateOrderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Order
   * Update Order
   */
  async ordersUpdate(requestParameters: PosApiOrdersUpdateRequest): Promise<UpdateOrderResponse> {
    const response = await this.ordersUpdateRaw(requestParameters)
    return await response.value()
  }
}
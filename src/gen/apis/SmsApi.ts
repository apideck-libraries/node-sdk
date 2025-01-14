/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.9.1
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateMessageResponse,
  CreateMessageResponseFromJSON,
  DeleteMessageResponse,
  DeleteMessageResponseFromJSON,
  GetMessageResponse,
  GetMessageResponseFromJSON,
  GetMessagesResponse,
  GetMessagesResponseFromJSON,
  Message,
  MessageToJSON,
  UpdateMessageResponse,
  UpdateMessageResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface SmsApiMessagesAddRequest {
  message: Message
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface SmsApiMessagesAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  fields?: string | null
}

export interface SmsApiMessagesDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface SmsApiMessagesOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

export interface SmsApiMessagesUpdateRequest {
  id: string
  message: Message
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class SmsApi extends runtime.BaseAPI {
  /**
   * Create Message
   * Create Message
   */
  async messagesAddRaw(
    requestParameters: SmsApiMessagesAddRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateMessageResponse>> {
    if (requestParameters.message === null || requestParameters.message === undefined) {
      throw new runtime.RequiredError(
        'message',
        'Required parameter requestParameters.message was null or undefined when calling messagesAdd.'
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
        path: `/sms/messages`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: MessageToJSON(requestParameters.message)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateMessageResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Message
   * Create Message
   */
  async messagesAdd(
    requestParameters: SmsApiMessagesAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateMessageResponse> {
    const response = await this.messagesAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Messages
   * List Messages
   */
  async messagesAllRaw(
    requestParameters: SmsApiMessagesAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetMessagesResponse>> {
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
        path: `/sms/messages`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetMessagesResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Messages
   * List Messages
   */
  async messagesAll(
    requestParameters: SmsApiMessagesAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetMessagesResponse> {
    const response = await this.messagesAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Delete Message
   * Delete Message
   */
  async messagesDeleteRaw(
    requestParameters: SmsApiMessagesDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DeleteMessageResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling messagesDelete.'
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
        path: `/sms/messages/{id}`.replace(
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
      DeleteMessageResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Message
   * Delete Message
   */
  async messagesDelete(
    requestParameters: SmsApiMessagesDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<DeleteMessageResponse> {
    const response = await this.messagesDeleteRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Message
   * Get Message
   */
  async messagesOneRaw(
    requestParameters: SmsApiMessagesOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetMessageResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling messagesOne.'
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
        path: `/sms/messages/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetMessageResponseFromJSON(jsonValue))
  }

  /**
   * Get Message
   * Get Message
   */
  async messagesOne(
    requestParameters: SmsApiMessagesOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetMessageResponse> {
    const response = await this.messagesOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update Message
   * Update Message
   */
  async messagesUpdateRaw(
    requestParameters: SmsApiMessagesUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateMessageResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling messagesUpdate.'
      )
    }

    if (requestParameters.message === null || requestParameters.message === undefined) {
      throw new runtime.RequiredError(
        'message',
        'Required parameter requestParameters.message was null or undefined when calling messagesUpdate.'
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
        path: `/sms/messages/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: MessageToJSON(requestParameters.message)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateMessageResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Message
   * Update Message
   */
  async messagesUpdate(
    requestParameters: SmsApiMessagesUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateMessageResponse> {
    const response = await this.messagesUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }
}

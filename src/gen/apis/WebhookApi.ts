/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.13.0
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateWebhookRequest,
  CreateWebhookRequestToJSON,
  CreateWebhookResponse,
  CreateWebhookResponseFromJSON,
  DeleteWebhookResponse,
  DeleteWebhookResponseFromJSON,
  GetWebhookEventLogsResponse,
  GetWebhookEventLogsResponseFromJSON,
  GetWebhookResponse,
  GetWebhookResponseFromJSON,
  GetWebhooksResponse,
  GetWebhooksResponseFromJSON,
  UpdateWebhookRequest,
  UpdateWebhookRequestToJSON,
  UpdateWebhookResponse,
  UpdateWebhookResponseFromJSON,
  WebhookEventLogsFilter
} from '../models'
import * as runtime from '../runtime'

export interface WebhookApiEventLogsAllRequest {
  appId?: string
  cursor?: string | null
  limit?: number
  filter?: WebhookEventLogsFilter
}

export interface WebhookApiWebhooksAddRequest {
  webhook: CreateWebhookRequest
  appId?: string
}

export interface WebhookApiWebhooksAllRequest {
  appId?: string
  cursor?: string | null
  limit?: number
}

export interface WebhookApiWebhooksDeleteRequest {
  id: string
  appId?: string
}

export interface WebhookApiWebhooksOneRequest {
  id: string
  appId?: string
}

export interface WebhookApiWebhooksUpdateRequest {
  id: string
  webhook: UpdateWebhookRequest
  appId?: string
}

/**
 *
 */
export class WebhookApi extends runtime.BaseAPI {
  /**
   * List event logs
   * List event logs
   */
  async eventLogsAllRaw(
    requestParameters: WebhookApiEventLogsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetWebhookEventLogsResponse>> {
    const queryParameters: any = {}

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

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/logs`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetWebhookEventLogsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List event logs
   * List event logs
   */
  async eventLogsAll(
    requestParameters: WebhookApiEventLogsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetWebhookEventLogsResponse> {
    const response = await this.eventLogsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Create a webhook subscription to receive events
   * Create webhook subscription
   */
  async webhooksAddRaw(
    requestParameters: WebhookApiWebhooksAddRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateWebhookResponse>> {
    if (requestParameters.webhook === null || requestParameters.webhook === undefined) {
      throw new runtime.RequiredError(
        'webhook',
        'Required parameter requestParameters.webhook was null or undefined when calling webhooksAdd.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/webhooks`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateWebhookRequestToJSON(requestParameters.webhook)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateWebhookResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create a webhook subscription to receive events
   * Create webhook subscription
   */
  async webhooksAdd(
    requestParameters: WebhookApiWebhooksAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateWebhookResponse> {
    const response = await this.webhooksAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List all webhook subscriptions
   * List webhook subscriptions
   */
  async webhooksAllRaw(
    requestParameters: WebhookApiWebhooksAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetWebhooksResponse>> {
    const queryParameters: any = {}

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/webhooks`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetWebhooksResponseFromJSON(jsonValue)
    )
  }

  /**
   * List all webhook subscriptions
   * List webhook subscriptions
   */
  async webhooksAll(
    requestParameters: WebhookApiWebhooksAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetWebhooksResponse> {
    const response = await this.webhooksAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Delete a webhook subscription
   * Delete webhook subscription
   */
  async webhooksDeleteRaw(
    requestParameters: WebhookApiWebhooksDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DeleteWebhookResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling webhooksDelete.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/webhooks/{id}`.replace(
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
      DeleteWebhookResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete a webhook subscription
   * Delete webhook subscription
   */
  async webhooksDelete(
    requestParameters: WebhookApiWebhooksDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<DeleteWebhookResponse> {
    const response = await this.webhooksDeleteRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get the webhook subscription details
   * Get webhook subscription
   */
  async webhooksOneRaw(
    requestParameters: WebhookApiWebhooksOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetWebhookResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling webhooksOne.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/webhooks/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetWebhookResponseFromJSON(jsonValue))
  }

  /**
   * Get the webhook subscription details
   * Get webhook subscription
   */
  async webhooksOne(
    requestParameters: WebhookApiWebhooksOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetWebhookResponse> {
    const response = await this.webhooksOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update a webhook subscription
   * Update webhook subscription
   */
  async webhooksUpdateRaw(
    requestParameters: WebhookApiWebhooksUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateWebhookResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling webhooksUpdate.'
      )
    }

    if (requestParameters.webhook === null || requestParameters.webhook === undefined) {
      throw new runtime.RequiredError(
        'webhook',
        'Required parameter requestParameters.webhook was null or undefined when calling webhooksUpdate.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/webhook/webhooks/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateWebhookRequestToJSON(requestParameters.webhook)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateWebhookResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update a webhook subscription
   * Update webhook subscription
   */
  async webhooksUpdate(
    requestParameters: WebhookApiWebhooksUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateWebhookResponse> {
    const response = await this.webhooksUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }
}

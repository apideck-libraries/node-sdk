/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.55.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  Connection,
  ConnectionImportData,
  ConnectionImportDataToJSON,
  ConnectionToJSON,
  ConsumerRequestCountsInDateRangeResponse,
  ConsumerRequestCountsInDateRangeResponseFromJSON,
  CreateConnectionResponse,
  CreateConnectionResponseFromJSON,
  CreateSessionResponse,
  CreateSessionResponseFromJSON,
  GetConnectionResponse,
  GetConnectionResponseFromJSON,
  GetConnectionsResponse,
  GetConnectionsResponseFromJSON,
  GetConsumerResponse,
  GetConsumerResponseFromJSON,
  GetConsumersResponse,
  GetConsumersResponseFromJSON,
  GetLogsResponse,
  GetLogsResponseFromJSON,
  LogsFilter,
  Session,
  SessionToJSON,
  UpdateConnectionResponse,
  UpdateConnectionResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface VaultApiConnectionSettingsAllRequest {
  unifiedApi: string
  serviceId: string
  resource: string
  consumerId?: string
  appId?: string
}

export interface VaultApiConnectionSettingsUpdateRequest {
  serviceId: string
  unifiedApi: string
  resource: string
  connection: Connection
  consumerId?: string
  appId?: string
}

export interface VaultApiConnectionsAllRequest {
  consumerId?: string
  appId?: string
  api?: string
  configured?: boolean
}

export interface VaultApiConnectionsDeleteRequest {
  serviceId: string
  unifiedApi: string
  consumerId?: string
  appId?: string
}

export interface VaultApiConnectionsImportRequest {
  serviceId: string
  unifiedApi: string
  connection: ConnectionImportData
  consumerId?: string
  appId?: string
}

export interface VaultApiConnectionsOneRequest {
  serviceId: string
  unifiedApi: string
  consumerId?: string
  appId?: string
}

export interface VaultApiConnectionsUpdateRequest {
  serviceId: string
  unifiedApi: string
  connection: Connection
  consumerId?: string
  appId?: string
}

export interface VaultApiConsumerRequestCountsAllRequest {
  consumerId: string
  startDatetime: string
  endDatetime: string
  appId?: string
}

export interface VaultApiConsumersAllRequest {
  appId?: string
  cursor?: string | null
  limit?: number
}

export interface VaultApiConsumersOneRequest {
  consumerId: string
  appId?: string
}

export interface VaultApiLogsAllRequest {
  appId?: string
  consumerId?: string
  filter?: LogsFilter
  cursor?: string | null
  limit?: number
}

export interface VaultApiSessionsCreateRequest {
  consumerId?: string
  appId?: string
  session?: Session
}

/**
 *
 */
export class VaultApi extends runtime.BaseAPI {
  /**
   * This endpoint returns custom settings and their defaults required by connection for a given resource.
   * Get resource settings
   */
  async connectionSettingsAllRaw(
    requestParameters: VaultApiConnectionSettingsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetConnectionResponse>> {
    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionSettingsAll.'
      )
    }

    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionSettingsAll.'
      )
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling connectionSettingsAll.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}/{resource}/config`
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi)))
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectionResponseFromJSON(jsonValue)
    )
  }

  /**
   * This endpoint returns custom settings and their defaults required by connection for a given resource.
   * Get resource settings
   */
  async connectionSettingsAll(
    requestParameters: VaultApiConnectionSettingsAllRequest,
    initOverrides?: RequestInit
  ): Promise<GetConnectionResponse> {
    const response = await this.connectionSettingsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update default values for a connection\'s resource settings
   * Update settings
   */
  async connectionSettingsUpdateRaw(
    requestParameters: VaultApiConnectionSettingsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateConnectionResponse>> {
    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionSettingsUpdate.'
      )
    }

    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionSettingsUpdate.'
      )
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling connectionSettingsUpdate.'
      )
    }

    if (requestParameters.connection === null || requestParameters.connection === undefined) {
      throw new runtime.RequiredError(
        'connection',
        'Required parameter requestParameters.connection was null or undefined when calling connectionSettingsUpdate.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}/{resource}/config`
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi)))
          .replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: ConnectionToJSON(requestParameters.connection)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateConnectionResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update default values for a connection\'s resource settings
   * Update settings
   */
  async connectionSettingsUpdate(
    requestParameters: VaultApiConnectionSettingsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateConnectionResponse> {
    const response = await this.connectionSettingsUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
   * Get all connections
   */
  async connectionsAllRaw(
    requestParameters: VaultApiConnectionsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetConnectionsResponse>> {
    const queryParameters: any = {}

    if (requestParameters.api !== undefined) {
      queryParameters['api'] = requestParameters.api
    }

    if (requestParameters.configured !== undefined) {
      queryParameters['configured'] = requestParameters.configured
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectionsResponseFromJSON(jsonValue)
    )
  }

  /**
   * This endpoint includes all the configured integrations and contains the required assets to build an integrations page where your users can install integrations. OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
   * Get all connections
   */
  async connectionsAll(
    requestParameters: VaultApiConnectionsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetConnectionsResponse> {
    const response = await this.connectionsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Deletes a connection
   * Deletes a connection
   */
  async connectionsDeleteRaw(
    requestParameters: VaultApiConnectionsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionsDelete.'
      )
    }

    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionsDelete.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}`
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi))),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * Deletes a connection
   * Deletes a connection
   */
  async connectionsDelete(
    requestParameters: VaultApiConnectionsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.connectionsDeleteRaw(requestParameters, initOverrides)
  }

  /**
   * Import an authorized connection.
   * Import connection
   */
  async connectionsImportRaw(
    requestParameters: VaultApiConnectionsImportRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateConnectionResponse>> {
    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionsImport.'
      )
    }

    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionsImport.'
      )
    }

    if (requestParameters.connection === null || requestParameters.connection === undefined) {
      throw new runtime.RequiredError(
        'connection',
        'Required parameter requestParameters.connection was null or undefined when calling connectionsImport.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}/import`
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi))),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ConnectionImportDataToJSON(requestParameters.connection)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateConnectionResponseFromJSON(jsonValue)
    )
  }

  /**
   * Import an authorized connection.
   * Import connection
   */
  async connectionsImport(
    requestParameters: VaultApiConnectionsImportRequest,
    initOverrides?: RequestInit
  ): Promise<CreateConnectionResponse> {
    const response = await this.connectionsImportRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get a connection
   * Get connection
   */
  async connectionsOneRaw(
    requestParameters: VaultApiConnectionsOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetConnectionResponse>> {
    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionsOne.'
      )
    }

    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionsOne.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}`
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectionResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get a connection
   * Get connection
   */
  async connectionsOne(
    requestParameters: VaultApiConnectionsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetConnectionResponse> {
    const response = await this.connectionsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update a connection
   * Update connection
   */
  async connectionsUpdateRaw(
    requestParameters: VaultApiConnectionsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateConnectionResponse>> {
    if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
      throw new runtime.RequiredError(
        'serviceId',
        'Required parameter requestParameters.serviceId was null or undefined when calling connectionsUpdate.'
      )
    }

    if (requestParameters.unifiedApi === null || requestParameters.unifiedApi === undefined) {
      throw new runtime.RequiredError(
        'unifiedApi',
        'Required parameter requestParameters.unifiedApi was null or undefined when calling connectionsUpdate.'
      )
    }

    if (requestParameters.connection === null || requestParameters.connection === undefined) {
      throw new runtime.RequiredError(
        'connection',
        'Required parameter requestParameters.connection was null or undefined when calling connectionsUpdate.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/connections/{unified_api}/{service_id}`
          .replace(`{${'service_id'}}`, encodeURIComponent(String(requestParameters.serviceId)))
          .replace(`{${'unified_api'}}`, encodeURIComponent(String(requestParameters.unifiedApi))),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: ConnectionToJSON(requestParameters.connection)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateConnectionResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update a connection
   * Update connection
   */
  async connectionsUpdate(
    requestParameters: VaultApiConnectionsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateConnectionResponse> {
    const response = await this.connectionsUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get consumer request counts within a given datetime range.
   * Consumer request counts
   */
  async consumerRequestCountsAllRaw(
    requestParameters: VaultApiConsumerRequestCountsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<ConsumerRequestCountsInDateRangeResponse>> {
    if (requestParameters.consumerId === null || requestParameters.consumerId === undefined) {
      throw new runtime.RequiredError(
        'consumerId',
        'Required parameter requestParameters.consumerId was null or undefined when calling consumerRequestCountsAll.'
      )
    }

    if (requestParameters.startDatetime === null || requestParameters.startDatetime === undefined) {
      throw new runtime.RequiredError(
        'startDatetime',
        'Required parameter requestParameters.startDatetime was null or undefined when calling consumerRequestCountsAll.'
      )
    }

    if (requestParameters.endDatetime === null || requestParameters.endDatetime === undefined) {
      throw new runtime.RequiredError(
        'endDatetime',
        'Required parameter requestParameters.endDatetime was null or undefined when calling consumerRequestCountsAll.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.startDatetime !== undefined) {
      queryParameters['start_datetime'] = requestParameters.startDatetime
    }

    if (requestParameters.endDatetime !== undefined) {
      queryParameters['end_datetime'] = requestParameters.endDatetime
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
        path: `/vault/consumers/{consumer_id}/stats`.replace(
          `{${'consumer_id'}}`,
          encodeURIComponent(String(requestParameters.consumerId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      ConsumerRequestCountsInDateRangeResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get consumer request counts within a given datetime range.
   * Consumer request counts
   */
  async consumerRequestCountsAll(
    requestParameters: VaultApiConsumerRequestCountsAllRequest,
    initOverrides?: RequestInit
  ): Promise<ConsumerRequestCountsInDateRangeResponse> {
    const response = await this.consumerRequestCountsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * This endpoint includes all application consumers, along with an aggregated count of requests made.
   * Get all consumers
   */
  async consumersAllRaw(
    requestParameters: VaultApiConsumersAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetConsumersResponse>> {
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
        path: `/vault/consumers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConsumersResponseFromJSON(jsonValue)
    )
  }

  /**
   * This endpoint includes all application consumers, along with an aggregated count of requests made.
   * Get all consumers
   */
  async consumersAll(
    requestParameters: VaultApiConsumersAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetConsumersResponse> {
    const response = await this.consumersAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Consumer detail including their aggregated counts with the connections they have authorized.
   * Get consumer
   */
  async consumersOneRaw(
    requestParameters: VaultApiConsumersOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetConsumerResponse>> {
    if (requestParameters.consumerId === null || requestParameters.consumerId === undefined) {
      throw new runtime.RequiredError(
        'consumerId',
        'Required parameter requestParameters.consumerId was null or undefined when calling consumersOne.'
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
        path: `/vault/consumers/{consumer_id}`.replace(
          `{${'consumer_id'}}`,
          encodeURIComponent(String(requestParameters.consumerId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConsumerResponseFromJSON(jsonValue)
    )
  }

  /**
   * Consumer detail including their aggregated counts with the connections they have authorized.
   * Get consumer
   */
  async consumersOne(
    requestParameters: VaultApiConsumersOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetConsumerResponse> {
    const response = await this.consumersOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * This endpoint includes all consumer request logs.
   * Get all consumer request logs
   */
  async logsAllRaw(
    requestParameters: VaultApiLogsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetLogsResponse>> {
    const queryParameters: any = {}

    if (requestParameters.filter !== undefined) {
      queryParameters['filter'] = requestParameters.filter
    }

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

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/logs`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetLogsResponseFromJSON(jsonValue))
  }

  /**
   * This endpoint includes all consumer request logs.
   * Get all consumer request logs
   */
  async logsAll(
    requestParameters: VaultApiLogsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetLogsResponse> {
    const response = await this.logsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned url to allow temporary access to manage their integrations and settings.  Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
   * Create Session
   */
  async sessionsCreateRaw(
    requestParameters: VaultApiSessionsCreateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateSessionResponse>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.consumerId !== undefined && requestParameters.consumerId !== null) {
      headerParameters['x-apideck-consumer-id'] = String(requestParameters.consumerId)
    }

    if (requestParameters.appId !== undefined && requestParameters.appId !== null) {
      headerParameters['x-apideck-app-id'] = String(requestParameters.appId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request(
      {
        path: `/vault/sessions`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SessionToJSON(requestParameters.session)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateSessionResponseFromJSON(jsonValue)
    )
  }

  /**
   * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned url to allow temporary access to manage their integrations and settings.  Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
   * Create Session
   */
  async sessionsCreate(
    requestParameters: VaultApiSessionsCreateRequest = {},
    initOverrides?: RequestInit
  ): Promise<CreateSessionResponse> {
    const response = await this.sessionsCreateRaw(requestParameters, initOverrides)
    return await response.value()
  }
}

/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.11.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  ApisFilter,
  ConnectorsFilter,
  GetApiResourceCoverageResponse,
  GetApiResourceCoverageResponseFromJSON,
  GetApiResourceResponse,
  GetApiResourceResponseFromJSON,
  GetApiResponse,
  GetApiResponseFromJSON,
  GetApisResponse,
  GetApisResponseFromJSON,
  GetConnectorResourceResponse,
  GetConnectorResourceResponseFromJSON,
  GetConnectorResponse,
  GetConnectorResponseFromJSON,
  GetConnectorsResponse,
  GetConnectorsResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface ConnectorApiApiResourceCoverageOneRequest {
  id: string
  resourceId: string
  appId?: string
}

export interface ConnectorApiApiResourcesOneRequest {
  id: string
  resourceId: string
  appId?: string
}

export interface ConnectorApiApisAllRequest {
  appId?: string
  cursor?: string | null
  limit?: number
  filter?: ApisFilter
}

export interface ConnectorApiApisOneRequest {
  id: string
  appId?: string
}

export interface ConnectorApiConnectorResourcesOneRequest {
  id: string
  resourceId: string
  appId?: string
}

export interface ConnectorApiConnectorsAllRequest {
  appId?: string
  cursor?: string | null
  limit?: number
  filter?: ConnectorsFilter
}

export interface ConnectorApiConnectorsOneRequest {
  id: string
  appId?: string
}

/**
 *
 */
export class ConnectorApi extends runtime.BaseAPI {
  /**
   * Get API Resource Coverage
   * Get API Resource Coverage
   */
  async apiResourceCoverageOneRaw(
    requestParameters: ConnectorApiApiResourceCoverageOneRequest
  ): Promise<runtime.ApiResponse<GetApiResourceCoverageResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling apiResourceCoverageOne.'
      )
    }

    if (requestParameters.resourceId === null || requestParameters.resourceId === undefined) {
      throw new runtime.RequiredError(
        'resourceId',
        'Required parameter requestParameters.resourceId was null or undefined when calling apiResourceCoverageOne.'
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

    const response = await this.request({
      path: `/connector/apis/{id}/resources/{resource_id}/coverage`
        .replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id)))
        .replace(`{${'resource_id'}}`, encodeURIComponent(String(requestParameters.resourceId))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApiResourceCoverageResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get API Resource Coverage
   * Get API Resource Coverage
   */
  async apiResourceCoverageOne(
    requestParameters: ConnectorApiApiResourceCoverageOneRequest
  ): Promise<GetApiResourceCoverageResponse> {
    const response = await this.apiResourceCoverageOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get API Resource
   * Get API Resource
   */
  async apiResourcesOneRaw(
    requestParameters: ConnectorApiApiResourcesOneRequest
  ): Promise<runtime.ApiResponse<GetApiResourceResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling apiResourcesOne.'
      )
    }

    if (requestParameters.resourceId === null || requestParameters.resourceId === undefined) {
      throw new runtime.RequiredError(
        'resourceId',
        'Required parameter requestParameters.resourceId was null or undefined when calling apiResourcesOne.'
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

    const response = await this.request({
      path: `/connector/apis/{id}/resources/{resource_id}`
        .replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id)))
        .replace(`{${'resource_id'}}`, encodeURIComponent(String(requestParameters.resourceId))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApiResourceResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get API Resource
   * Get API Resource
   */
  async apiResourcesOne(
    requestParameters: ConnectorApiApiResourcesOneRequest
  ): Promise<GetApiResourceResponse> {
    const response = await this.apiResourcesOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * List APIs
   * List APIs
   */
  async apisAllRaw(
    requestParameters: ConnectorApiApisAllRequest
  ): Promise<runtime.ApiResponse<GetApisResponse>> {
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

    const response = await this.request({
      path: `/connector/apis`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetApisResponseFromJSON(jsonValue))
  }

  /**
   * List APIs
   * List APIs
   */
  async apisAll(requestParameters: ConnectorApiApisAllRequest): Promise<GetApisResponse> {
    const response = await this.apisAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get API
   * Get API
   */
  async apisOneRaw(
    requestParameters: ConnectorApiApisOneRequest
  ): Promise<runtime.ApiResponse<GetApiResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling apisOne.'
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

    const response = await this.request({
      path: `/connector/apis/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetApiResponseFromJSON(jsonValue))
  }

  /**
   * Get API
   * Get API
   */
  async apisOne(requestParameters: ConnectorApiApisOneRequest): Promise<GetApiResponse> {
    const response = await this.apisOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Connector Resource
   * Get Connector Resource
   */
  async connectorResourcesOneRaw(
    requestParameters: ConnectorApiConnectorResourcesOneRequest
  ): Promise<runtime.ApiResponse<GetConnectorResourceResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling connectorResourcesOne.'
      )
    }

    if (requestParameters.resourceId === null || requestParameters.resourceId === undefined) {
      throw new runtime.RequiredError(
        'resourceId',
        'Required parameter requestParameters.resourceId was null or undefined when calling connectorResourcesOne.'
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

    const response = await this.request({
      path: `/connector/connectors/{id}/resources/{resource_id}`
        .replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id)))
        .replace(`{${'resource_id'}}`, encodeURIComponent(String(requestParameters.resourceId))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectorResourceResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Connector Resource
   * Get Connector Resource
   */
  async connectorResourcesOne(
    requestParameters: ConnectorApiConnectorResourcesOneRequest
  ): Promise<GetConnectorResourceResponse> {
    const response = await this.connectorResourcesOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * List Connectors
   * List Connectors
   */
  async connectorsAllRaw(
    requestParameters: ConnectorApiConnectorsAllRequest
  ): Promise<runtime.ApiResponse<GetConnectorsResponse>> {
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

    const response = await this.request({
      path: `/connector/connectors`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectorsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Connectors
   * List Connectors
   */
  async connectorsAll(
    requestParameters: ConnectorApiConnectorsAllRequest
  ): Promise<GetConnectorsResponse> {
    const response = await this.connectorsAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Connector
   * Get Connector
   */
  async connectorsOneRaw(
    requestParameters: ConnectorApiConnectorsOneRequest
  ): Promise<runtime.ApiResponse<GetConnectorResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling connectorsOne.'
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

    const response = await this.request({
      path: `/connector/connectors/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetConnectorResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Connector
   * Get Connector
   */
  async connectorsOne(
    requestParameters: ConnectorApiConnectorsOneRequest
  ): Promise<GetConnectorResponse> {
    const response = await this.connectorsOneRaw(requestParameters)
    return await response.value()
  }
}

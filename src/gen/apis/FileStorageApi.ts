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
  DeleteFileResponse,
  DeleteFileResponseFromJSON,
  FilesFilter,
  FilesSearch,
  FilesSearchToJSON,
  GetFileResponse,
  GetFileResponseFromJSON,
  GetFilesResponse,
  GetFilesResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface FileStorageApiFilesAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: FilesFilter
}

export interface FileStorageApiFilesDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface FileStorageApiFilesDownloadRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface FileStorageApiFilesOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface FileStorageApiFilesSearchRequest {
  filesSearch: FilesSearch
  consumerId?: string
  appId?: string
  serviceId?: string
}

/**
 *
 */
export class FileStorageApi extends runtime.BaseAPI {
  /**
   * List Files
   * List Files
   */
  async filesAllRaw(
    requestParameters: FileStorageApiFilesAllRequest
  ): Promise<runtime.ApiResponse<GetFilesResponse>> {
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
      path: `/file-storage/files`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetFilesResponseFromJSON(jsonValue))
  }

  /**
   * List Files
   * List Files
   */
  async filesAll(requestParameters: FileStorageApiFilesAllRequest): Promise<GetFilesResponse> {
    const response = await this.filesAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete File
   * Delete File
   */
  async filesDeleteRaw(
    requestParameters: FileStorageApiFilesDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteFileResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling filesDelete.'
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
      path: `/file-storage/files/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => DeleteFileResponseFromJSON(jsonValue))
  }

  /**
   * Delete File
   * Delete File
   */
  async filesDelete(
    requestParameters: FileStorageApiFilesDeleteRequest
  ): Promise<DeleteFileResponse> {
    const response = await this.filesDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Download File
   * Download File
   */
  async filesDownloadRaw(
    requestParameters: FileStorageApiFilesDownloadRequest
  ): Promise<runtime.ApiResponse<Blob>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling filesDownload.'
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

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/file-storage/files/{id}/download`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.BlobApiResponse(response)
  }

  /**
   * Download File
   * Download File
   */
  async filesDownload(requestParameters: FileStorageApiFilesDownloadRequest): Promise<Blob> {
    const response = await this.filesDownloadRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get File
   * Get File
   */
  async filesOneRaw(
    requestParameters: FileStorageApiFilesOneRequest
  ): Promise<runtime.ApiResponse<GetFileResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling filesOne.'
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
      path: `/file-storage/files/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetFileResponseFromJSON(jsonValue))
  }

  /**
   * Get File
   * Get File
   */
  async filesOne(requestParameters: FileStorageApiFilesOneRequest): Promise<GetFileResponse> {
    const response = await this.filesOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Search Files
   * Search Files
   */
  async filesSearchRaw(
    requestParameters: FileStorageApiFilesSearchRequest
  ): Promise<runtime.ApiResponse<GetFilesResponse>> {
    if (requestParameters.filesSearch === null || requestParameters.filesSearch === undefined) {
      throw new runtime.RequiredError(
        'filesSearch',
        'Required parameter requestParameters.filesSearch was null or undefined when calling filesSearch.'
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

    if (requestParameters.serviceId !== undefined && requestParameters.serviceId !== null) {
      headerParameters['x-apideck-service-id'] = String(requestParameters.serviceId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // apiKey authentication
    }

    const response = await this.request({
      path: `/file-storage/files/search`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: FilesSearchToJSON(requestParameters.filesSearch)
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetFilesResponseFromJSON(jsonValue))
  }

  /**
   * Search Files
   * Search Files
   */
  async filesSearch(
    requestParameters: FileStorageApiFilesSearchRequest
  ): Promise<GetFilesResponse> {
    const response = await this.filesSearchRaw(requestParameters)
    return await response.value()
  }
}

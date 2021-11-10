/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.5.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CopyFolderRequest,
  CopyFolderRequestToJSON,
  CreateFolderRequest,
  CreateFolderRequestToJSON,
  CreateFolderResponse,
  CreateFolderResponseFromJSON,
  DeleteFileResponse,
  DeleteFileResponseFromJSON,
  DeleteFolderResponse,
  DeleteFolderResponseFromJSON,
  FilesFilter,
  FilesSearch,
  FilesSearchToJSON,
  FilesSort,
  GetFileResponse,
  GetFileResponseFromJSON,
  GetFilesResponse,
  GetFilesResponseFromJSON,
  GetFolderResponse,
  GetFolderResponseFromJSON,
  UpdateFolderRequest,
  UpdateFolderRequestToJSON,
  UpdateFolderResponse,
  UpdateFolderResponseFromJSON
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
  sort?: FilesSort
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

export interface FileStorageApiFoldersAddRequest {
  folder: CreateFolderRequest
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface FileStorageApiFoldersCopyRequest {
  id: string
  folder: CopyFolderRequest
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface FileStorageApiFoldersDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface FileStorageApiFoldersOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface FileStorageApiFoldersUpdateRequest {
  id: string
  folder: UpdateFolderRequest
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
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

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort
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

  /**
   * Create Folder
   * Create Folder
   */
  async foldersAddRaw(
    requestParameters: FileStorageApiFoldersAddRequest
  ): Promise<runtime.ApiResponse<CreateFolderResponse>> {
    if (requestParameters.folder === null || requestParameters.folder === undefined) {
      throw new runtime.RequiredError(
        'folder',
        'Required parameter requestParameters.folder was null or undefined when calling foldersAdd.'
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
      path: `/file-storage/folders`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CreateFolderRequestToJSON(requestParameters.folder)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateFolderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Folder
   * Create Folder
   */
  async foldersAdd(
    requestParameters: FileStorageApiFoldersAddRequest
  ): Promise<CreateFolderResponse> {
    const response = await this.foldersAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * Copy Folder
   * Copy Folder
   */
  async foldersCopyRaw(
    requestParameters: FileStorageApiFoldersCopyRequest
  ): Promise<runtime.ApiResponse<UpdateFolderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling foldersCopy.'
      )
    }

    if (requestParameters.folder === null || requestParameters.folder === undefined) {
      throw new runtime.RequiredError(
        'folder',
        'Required parameter requestParameters.folder was null or undefined when calling foldersCopy.'
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
      path: `/file-storage/folders/{id}/copy`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: CopyFolderRequestToJSON(requestParameters.folder)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateFolderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Copy Folder
   * Copy Folder
   */
  async foldersCopy(
    requestParameters: FileStorageApiFoldersCopyRequest
  ): Promise<UpdateFolderResponse> {
    const response = await this.foldersCopyRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete Folder
   * Delete Folder
   */
  async foldersDeleteRaw(
    requestParameters: FileStorageApiFoldersDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteFolderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling foldersDelete.'
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
      path: `/file-storage/folders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteFolderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Folder
   * Delete Folder
   */
  async foldersDelete(
    requestParameters: FileStorageApiFoldersDeleteRequest
  ): Promise<DeleteFolderResponse> {
    const response = await this.foldersDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get Folder
   * Get Folder
   */
  async foldersOneRaw(
    requestParameters: FileStorageApiFoldersOneRequest
  ): Promise<runtime.ApiResponse<GetFolderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling foldersOne.'
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
      path: `/file-storage/folders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetFolderResponseFromJSON(jsonValue))
  }

  /**
   * Get Folder
   * Get Folder
   */
  async foldersOne(requestParameters: FileStorageApiFoldersOneRequest): Promise<GetFolderResponse> {
    const response = await this.foldersOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Rename or move Folder
   * Rename or move Folder
   */
  async foldersUpdateRaw(
    requestParameters: FileStorageApiFoldersUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateFolderResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling foldersUpdate.'
      )
    }

    if (requestParameters.folder === null || requestParameters.folder === undefined) {
      throw new runtime.RequiredError(
        'folder',
        'Required parameter requestParameters.folder was null or undefined when calling foldersUpdate.'
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
      path: `/file-storage/folders/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: UpdateFolderRequestToJSON(requestParameters.folder)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateFolderResponseFromJSON(jsonValue)
    )
  }

  /**
   * Rename or move Folder
   * Rename or move Folder
   */
  async foldersUpdate(
    requestParameters: FileStorageApiFoldersUpdateRequest
  ): Promise<UpdateFolderResponse> {
    const response = await this.foldersUpdateRaw(requestParameters)
    return await response.value()
  }
}

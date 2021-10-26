/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CreateLeadResponse,
  CreateLeadResponseFromJSON,
  DeleteLeadResponse,
  DeleteLeadResponseFromJSON,
  GetLeadResponse,
  GetLeadResponseFromJSON,
  GetLeadsResponse,
  GetLeadsResponseFromJSON,
  Lead,
  LeadsFilter,
  LeadsSort,
  LeadToJSON,
  UpdateLeadResponse,
  UpdateLeadResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface LeadApiLeadsAddRequest {
  lead: Lead
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface LeadApiLeadsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: LeadsFilter
  sort?: LeadsSort
}

export interface LeadApiLeadsDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface LeadApiLeadsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface LeadApiLeadsUpdateRequest {
  id: string
  lead: Lead
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class LeadApi extends runtime.BaseAPI {
  /**
   * Create lead
   * Create lead
   */
  async leadsAddRaw(
    requestParameters: LeadApiLeadsAddRequest
  ): Promise<runtime.ApiResponse<CreateLeadResponse>> {
    if (requestParameters.lead === null || requestParameters.lead === undefined) {
      throw new runtime.RequiredError(
        'lead',
        'Required parameter requestParameters.lead was null or undefined when calling leadsAdd.'
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
      path: `/lead/leads`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: LeadToJSON(requestParameters.lead)
    })

    return new runtime.JSONApiResponse(response, jsonValue => CreateLeadResponseFromJSON(jsonValue))
  }

  /**
   * Create lead
   * Create lead
   */
  async leadsAdd(requestParameters: LeadApiLeadsAddRequest): Promise<CreateLeadResponse> {
    const response = await this.leadsAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List leads
   * List leads
   */
  async leadsAllRaw(
    requestParameters: LeadApiLeadsAllRequest
  ): Promise<runtime.ApiResponse<GetLeadsResponse>> {
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
      path: `/lead/leads`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetLeadsResponseFromJSON(jsonValue))
  }

  /**
   * List leads
   * List leads
   */
  async leadsAll(requestParameters: LeadApiLeadsAllRequest): Promise<GetLeadsResponse> {
    const response = await this.leadsAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Delete lead
   * Delete lead
   */
  async leadsDeleteRaw(
    requestParameters: LeadApiLeadsDeleteRequest
  ): Promise<runtime.ApiResponse<DeleteLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsDelete.'
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
      path: `/lead/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => DeleteLeadResponseFromJSON(jsonValue))
  }

  /**
   * Delete lead
   * Delete lead
   */
  async leadsDelete(requestParameters: LeadApiLeadsDeleteRequest): Promise<DeleteLeadResponse> {
    const response = await this.leadsDeleteRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get lead
   * Get lead
   */
  async leadsOneRaw(
    requestParameters: LeadApiLeadsOneRequest
  ): Promise<runtime.ApiResponse<GetLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsOne.'
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
      path: `/lead/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetLeadResponseFromJSON(jsonValue))
  }

  /**
   * Get lead
   * Get lead
   */
  async leadsOne(requestParameters: LeadApiLeadsOneRequest): Promise<GetLeadResponse> {
    const response = await this.leadsOneRaw(requestParameters)
    return await response.value()
  }

  /**
   * Update lead
   * Update lead
   */
  async leadsUpdateRaw(
    requestParameters: LeadApiLeadsUpdateRequest
  ): Promise<runtime.ApiResponse<UpdateLeadResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling leadsUpdate.'
      )
    }

    if (requestParameters.lead === null || requestParameters.lead === undefined) {
      throw new runtime.RequiredError(
        'lead',
        'Required parameter requestParameters.lead was null or undefined when calling leadsUpdate.'
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
      path: `/lead/leads/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: LeadToJSON(requestParameters.lead)
    })

    return new runtime.JSONApiResponse(response, jsonValue => UpdateLeadResponseFromJSON(jsonValue))
  }

  /**
   * Update lead
   * Update lead
   */
  async leadsUpdate(requestParameters: LeadApiLeadsUpdateRequest): Promise<UpdateLeadResponse> {
    const response = await this.leadsUpdateRaw(requestParameters)
    return await response.value()
  }
}

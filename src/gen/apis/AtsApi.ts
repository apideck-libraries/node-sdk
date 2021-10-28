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
  GetJobResponse,
  GetJobResponseFromJSON,
  GetJobsResponse,
  GetJobsResponseFromJSON
} from '../models'
import * as runtime from '../runtime'

export interface AtsApiJobsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
}

export interface AtsApiJobsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

/**
 *
 */
export class AtsApi extends runtime.BaseAPI {
  /**
   * List jobs
   * List jobs
   */
  async jobsAllRaw(
    requestParameters: AtsApiJobsAllRequest
  ): Promise<runtime.ApiResponse<GetJobsResponse>> {
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
      path: `/ats/jobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetJobsResponseFromJSON(jsonValue))
  }

  /**
   * List jobs
   * List jobs
   */
  async jobsAll(requestParameters: AtsApiJobsAllRequest): Promise<GetJobsResponse> {
    const response = await this.jobsAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get job
   * Get job
   */
  async jobsOneRaw(
    requestParameters: AtsApiJobsOneRequest
  ): Promise<runtime.ApiResponse<GetJobResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling jobsOne.'
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
      path: `/ats/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue => GetJobResponseFromJSON(jsonValue))
  }

  /**
   * Get job
   * Get job
   */
  async jobsOne(requestParameters: AtsApiJobsOneRequest): Promise<GetJobResponse> {
    const response = await this.jobsOneRaw(requestParameters)
    return await response.value()
  }
}
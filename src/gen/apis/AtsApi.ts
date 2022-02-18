/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.12.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  Applicant,
  ApplicantToJSON,
  CreateApplicantResponse,
  CreateApplicantResponseFromJSON,
  GetApplicantResponse,
  GetApplicantResponseFromJSON,
  GetApplicantsResponse,
  GetApplicantsResponseFromJSON,
  GetJobResponse,
  GetJobResponseFromJSON,
  GetJobsResponse,
  GetJobsResponseFromJSON,
  JobsFilter
} from '../models'
import * as runtime from '../runtime'

export interface AtsApiApplicantsAddRequest {
  applicant: Applicant
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface AtsApiApplicantsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  limit?: number
  filter?: JobsFilter
}

export interface AtsApiApplicantsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

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
   * Create applicant
   * Create applicant
   */
  async applicantsAddRaw(
    requestParameters: AtsApiApplicantsAddRequest
  ): Promise<runtime.ApiResponse<CreateApplicantResponse>> {
    if (requestParameters.applicant === null || requestParameters.applicant === undefined) {
      throw new runtime.RequiredError(
        'applicant',
        'Required parameter requestParameters.applicant was null or undefined when calling applicantsAdd.'
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
      path: `/ats/applicants`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: ApplicantToJSON(requestParameters.applicant)
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create applicant
   * Create applicant
   */
  async applicantsAdd(
    requestParameters: AtsApiApplicantsAddRequest
  ): Promise<CreateApplicantResponse> {
    const response = await this.applicantsAddRaw(requestParameters)
    return await response.value()
  }

  /**
   * List applicants
   * List applicants
   */
  async applicantsAllRaw(
    requestParameters: AtsApiApplicantsAllRequest
  ): Promise<runtime.ApiResponse<GetApplicantsResponse>> {
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
      path: `/ats/applicants`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApplicantsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List applicants
   * List applicants
   */
  async applicantsAll(
    requestParameters: AtsApiApplicantsAllRequest
  ): Promise<GetApplicantsResponse> {
    const response = await this.applicantsAllRaw(requestParameters)
    return await response.value()
  }

  /**
   * Get applicant
   * Get applicant
   */
  async applicantsOneRaw(
    requestParameters: AtsApiApplicantsOneRequest
  ): Promise<runtime.ApiResponse<GetApplicantResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicantsOne.'
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
      path: `/ats/applicants/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(requestParameters.id))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get applicant
   * Get applicant
   */
  async applicantsOne(
    requestParameters: AtsApiApplicantsOneRequest
  ): Promise<GetApplicantResponse> {
    const response = await this.applicantsOneRaw(requestParameters)
    return await response.value()
  }

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

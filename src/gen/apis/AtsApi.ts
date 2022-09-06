/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.50.0
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
    requestParameters: AtsApiApplicantsAddRequest,
    initOverrides?: RequestInit
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

    const response = await this.request(
      {
        path: `/ats/applicants`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ApplicantToJSON(requestParameters.applicant)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create applicant
   * Create applicant
   */
  async applicantsAdd(
    requestParameters: AtsApiApplicantsAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateApplicantResponse> {
    const response = await this.applicantsAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List applicants
   * List applicants
   */
  async applicantsAllRaw(
    requestParameters: AtsApiApplicantsAllRequest,
    initOverrides?: RequestInit
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

    const response = await this.request(
      {
        path: `/ats/applicants`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApplicantsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List applicants
   * List applicants
   */
  async applicantsAll(
    requestParameters: AtsApiApplicantsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetApplicantsResponse> {
    const response = await this.applicantsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get applicant
   * Get applicant
   */
  async applicantsOneRaw(
    requestParameters: AtsApiApplicantsOneRequest,
    initOverrides?: RequestInit
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

    const response = await this.request(
      {
        path: `/ats/applicants/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get applicant
   * Get applicant
   */
  async applicantsOne(
    requestParameters: AtsApiApplicantsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetApplicantResponse> {
    const response = await this.applicantsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Jobs
   * List Jobs
   */
  async jobsAllRaw(
    requestParameters: AtsApiJobsAllRequest,
    initOverrides?: RequestInit
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

    const response = await this.request(
      {
        path: `/ats/jobs`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetJobsResponseFromJSON(jsonValue))
  }

  /**
   * List Jobs
   * List Jobs
   */
  async jobsAll(
    requestParameters: AtsApiJobsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetJobsResponse> {
    const response = await this.jobsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Job
   * Get Job
   */
  async jobsOneRaw(
    requestParameters: AtsApiJobsOneRequest,
    initOverrides?: RequestInit
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

    const response = await this.request(
      {
        path: `/ats/jobs/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GetJobResponseFromJSON(jsonValue))
  }

  /**
   * Get Job
   * Get Job
   */
  async jobsOne(
    requestParameters: AtsApiJobsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetJobResponse> {
    const response = await this.jobsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }
}

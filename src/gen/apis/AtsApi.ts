/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 9.7.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  Applicant,
  ApplicantsFilter,
  ApplicantToJSON,
  Application,
  ApplicationToJSON,
  CreateApplicantResponse,
  CreateApplicantResponseFromJSON,
  CreateApplicationResponse,
  CreateApplicationResponseFromJSON,
  DeleteApplicantResponse,
  DeleteApplicantResponseFromJSON,
  DeleteApplicationResponse,
  DeleteApplicationResponseFromJSON,
  GetApplicantResponse,
  GetApplicantResponseFromJSON,
  GetApplicantsResponse,
  GetApplicantsResponseFromJSON,
  GetApplicationResponse,
  GetApplicationResponseFromJSON,
  GetApplicationsResponse,
  GetApplicationsResponseFromJSON,
  GetJobResponse,
  GetJobResponseFromJSON,
  GetJobsResponse,
  GetJobsResponseFromJSON,
  PassThroughQuery,
  UpdateApplicantResponse,
  UpdateApplicantResponseFromJSON,
  UpdateApplicationResponse,
  UpdateApplicationResponseFromJSON
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
  filter?: ApplicantsFilter
  passThrough?: PassThroughQuery
  fields?: string | null
}

export interface AtsApiApplicantsDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface AtsApiApplicantsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

export interface AtsApiApplicantsUpdateRequest {
  id: string
  applicant: Applicant
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface AtsApiApplicationsAddRequest {
  application: Application
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
}

export interface AtsApiApplicationsAllRequest {
  raw?: boolean
  consumerId?: string
  appId?: string
  serviceId?: string
  cursor?: string | null
  passThrough?: PassThroughQuery
  limit?: number
}

export interface AtsApiApplicationsDeleteRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface AtsApiApplicationsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
}

export interface AtsApiApplicationsUpdateRequest {
  id: string
  application: Application
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
  passThrough?: PassThroughQuery
  fields?: string | null
}

export interface AtsApiJobsOneRequest {
  id: string
  consumerId?: string
  appId?: string
  serviceId?: string
  raw?: boolean
  fields?: string | null
}

/**
 *
 */
export class AtsApi extends runtime.BaseAPI {
  /**
   * Create Applicant
   * Create Applicant
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
   * Create Applicant
   * Create Applicant
   */
  async applicantsAdd(
    requestParameters: AtsApiApplicantsAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateApplicantResponse> {
    const response = await this.applicantsAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Applicants
   * List Applicants
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

    if (requestParameters.passThrough !== undefined) {
      queryParameters['pass_through'] = requestParameters.passThrough
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
   * List Applicants
   * List Applicants
   */
  async applicantsAll(
    requestParameters: AtsApiApplicantsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetApplicantsResponse> {
    const response = await this.applicantsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Delete Applicant
   * Delete Applicant
   */
  async applicantsDeleteRaw(
    requestParameters: AtsApiApplicantsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DeleteApplicantResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicantsDelete.'
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
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      DeleteApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Applicant
   * Delete Applicant
   */
  async applicantsDelete(
    requestParameters: AtsApiApplicantsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<DeleteApplicantResponse> {
    const response = await this.applicantsDeleteRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Applicant
   * Get Applicant
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
   * Get Applicant
   * Get Applicant
   */
  async applicantsOne(
    requestParameters: AtsApiApplicantsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetApplicantResponse> {
    const response = await this.applicantsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update Applicant
   * Update Applicant
   */
  async applicantsUpdateRaw(
    requestParameters: AtsApiApplicantsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateApplicantResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicantsUpdate.'
      )
    }

    if (requestParameters.applicant === null || requestParameters.applicant === undefined) {
      throw new runtime.RequiredError(
        'applicant',
        'Required parameter requestParameters.applicant was null or undefined when calling applicantsUpdate.'
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
        path: `/ats/applicants/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: ApplicantToJSON(requestParameters.applicant)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateApplicantResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Applicant
   * Update Applicant
   */
  async applicantsUpdate(
    requestParameters: AtsApiApplicantsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateApplicantResponse> {
    const response = await this.applicantsUpdateRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Create Application
   * Create Application
   */
  async applicationsAddRaw(
    requestParameters: AtsApiApplicationsAddRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CreateApplicationResponse>> {
    if (requestParameters.application === null || requestParameters.application === undefined) {
      throw new runtime.RequiredError(
        'application',
        'Required parameter requestParameters.application was null or undefined when calling applicationsAdd.'
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
        path: `/ats/applications`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ApplicationToJSON(requestParameters.application)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateApplicationResponseFromJSON(jsonValue)
    )
  }

  /**
   * Create Application
   * Create Application
   */
  async applicationsAdd(
    requestParameters: AtsApiApplicationsAddRequest,
    initOverrides?: RequestInit
  ): Promise<CreateApplicationResponse> {
    const response = await this.applicationsAddRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * List Applications
   * List Applications
   */
  async applicationsAllRaw(
    requestParameters: AtsApiApplicationsAllRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetApplicationsResponse>> {
    const queryParameters: any = {}

    if (requestParameters.raw !== undefined) {
      queryParameters['raw'] = requestParameters.raw
    }

    if (requestParameters.cursor !== undefined) {
      queryParameters['cursor'] = requestParameters.cursor
    }

    if (requestParameters.passThrough !== undefined) {
      queryParameters['pass_through'] = requestParameters.passThrough
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
        path: `/ats/applications`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      GetApplicationsResponseFromJSON(jsonValue)
    )
  }

  /**
   * List Applications
   * List Applications
   */
  async applicationsAll(
    requestParameters: AtsApiApplicationsAllRequest = {},
    initOverrides?: RequestInit
  ): Promise<GetApplicationsResponse> {
    const response = await this.applicationsAllRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Delete Application
   * Delete Application
   */
  async applicationsDeleteRaw(
    requestParameters: AtsApiApplicationsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DeleteApplicationResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicationsDelete.'
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
        path: `/ats/applications/{id}`.replace(
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
      DeleteApplicationResponseFromJSON(jsonValue)
    )
  }

  /**
   * Delete Application
   * Delete Application
   */
  async applicationsDelete(
    requestParameters: AtsApiApplicationsDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<DeleteApplicationResponse> {
    const response = await this.applicationsDeleteRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Get Application
   * Get Application
   */
  async applicationsOneRaw(
    requestParameters: AtsApiApplicationsOneRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GetApplicationResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicationsOne.'
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
        path: `/ats/applications/{id}`.replace(
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
      GetApplicationResponseFromJSON(jsonValue)
    )
  }

  /**
   * Get Application
   * Get Application
   */
  async applicationsOne(
    requestParameters: AtsApiApplicationsOneRequest,
    initOverrides?: RequestInit
  ): Promise<GetApplicationResponse> {
    const response = await this.applicationsOneRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * Update Application
   * Update Application
   */
  async applicationsUpdateRaw(
    requestParameters: AtsApiApplicationsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<UpdateApplicationResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling applicationsUpdate.'
      )
    }

    if (requestParameters.application === null || requestParameters.application === undefined) {
      throw new runtime.RequiredError(
        'application',
        'Required parameter requestParameters.application was null or undefined when calling applicationsUpdate.'
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
        path: `/ats/applications/{id}`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: ApplicationToJSON(requestParameters.application)
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue =>
      UpdateApplicationResponseFromJSON(jsonValue)
    )
  }

  /**
   * Update Application
   * Update Application
   */
  async applicationsUpdate(
    requestParameters: AtsApiApplicationsUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<UpdateApplicationResponse> {
    const response = await this.applicationsUpdateRaw(requestParameters, initOverrides)
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

    if (requestParameters.passThrough !== undefined) {
      queryParameters['pass_through'] = requestParameters.passThrough
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

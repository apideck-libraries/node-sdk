/* tslint:disable */
/**
 *
 * @export
 * @interface CreateUploadSessionRequest
 */
export interface CreateUploadSessionRequest {
  /**
   * The name of the file.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  name: string
  /**
   * The parent folder to create the new file within.
   * @type {string}
   * @memberof CreateUploadSessionRequest
   */
  parent_folder_id: string
  /**
   * The size of the file in bytes
   * @type {number}
   * @memberof CreateUploadSessionRequest
   */
  size: number
}

export function CreateUploadSessionRequestFromJSON(json: any): CreateUploadSessionRequest {
  return CreateUploadSessionRequestFromJSONTyped(json, false)
}

export function CreateUploadSessionRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateUploadSessionRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    parent_folder_id: json['parent_folder_id'],
    size: json['size']
  }
}

export function CreateUploadSessionRequestToJSON(value?: CreateUploadSessionRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    parent_folder_id: value.parent_folder_id,
    size: value.size
  }
}

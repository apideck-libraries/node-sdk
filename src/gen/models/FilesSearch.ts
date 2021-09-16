/* tslint:disable */
/**
 *
 * @export
 * @interface FilesSearch
 */
export interface FilesSearch {
  /**
   * The query to search for. May match across multiple fields.
   * @type {string}
   * @memberof FilesSearch
   */
  query: string
}

export function FilesSearchFromJSON(json: any): FilesSearch {
  return FilesSearchFromJSONTyped(json, false)
}

export function FilesSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilesSearch {
  if (json === undefined || json === null) {
    return json
  }
  return {
    query: json['query']
  }
}

export function FilesSearchToJSON(value?: FilesSearch | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    query: value.query
  }
}

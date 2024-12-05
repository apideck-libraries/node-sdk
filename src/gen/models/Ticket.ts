/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.8.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Assignee, AssigneeFromJSON, AssigneeToJSON } from './Assignee'
import { CollectionTag, CollectionTagFromJSON, CollectionTagToJSON } from './CollectionTag'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'

/**
 *
 * @export
 * @interface Ticket
 */
export interface Ticket {
  /**
   * A unique identifier for an object.
   * @type {string}
   * @memberof Ticket
   */
  readonly id: string
  /**
   * The ticket's parent ID
   * @type {string}
   * @memberof Ticket
   */
  parent_id?: string | null
  /**
   * The ticket's collection ID
   * @type {string}
   * @memberof Ticket
   */
  readonly collection_id?: string | null
  /**
   * The ticket's type
   * @type {string}
   * @memberof Ticket
   */
  type?: string | null
  /**
   * Subject of the ticket
   * @type {string}
   * @memberof Ticket
   */
  subject?: string | null
  /**
   * The ticket's description. HTML version of description is mapped if supported by the third-party platform
   * @type {string}
   * @memberof Ticket
   */
  description?: string | null
  /**
   * The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.
   * @type {string}
   * @memberof Ticket
   */
  status?: string | null
  /**
   * Priority of the ticket
   * @type {string}
   * @memberof Ticket
   */
  priority?: TicketPriority
  /**
   *
   * @type {Array<Assignee>}
   * @memberof Ticket
   */
  assignees?: Array<Assignee>
  /**
   * The date and time when the object was last updated.
   * @type {Date}
   * @memberof Ticket
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the object was created.
   * @type {Date}
   * @memberof Ticket
   */
  readonly created_at?: Date | null
  /**
   * The user who created the object.
   * @type {string}
   * @memberof Ticket
   */
  readonly created_by?: string | null
  /**
   * Due date of the ticket
   * @type {Date}
   * @memberof Ticket
   */
  due_date?: Date | null
  /**
   * When the ticket was completed
   * @type {Date}
   * @memberof Ticket
   */
  readonly completed_at?: Date | null
  /**
   *
   * @type {Array<CollectionTag>}
   * @memberof Ticket
   */
  tags?: Array<CollectionTag>
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Ticket
   */
  readonly custom_mappings?: object | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Ticket
   */
  pass_through?: PassThroughBody
}

/**
 * @export
 * @enum {string}
 */
export enum TicketPriority {
  low = 'low',
  normal = 'normal',
  high = 'high',
  urgent = 'urgent'
}

export function TicketFromJSON(json: any): Ticket {
  return TicketFromJSONTyped(json, false)
}

export function TicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ticket {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    parent_id: !exists(json, 'parent_id') ? undefined : json['parent_id'],
    collection_id: !exists(json, 'collection_id') ? undefined : json['collection_id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : json['status'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    assignees: !exists(json, 'assignees')
      ? undefined
      : (json['assignees'] as Array<any>).map(AssigneeFromJSON),
    updated_at: !exists(json, 'updated_at')
      ? undefined
      : json['updated_at'] === null
      ? null
      : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at')
      ? undefined
      : json['created_at'] === null
      ? null
      : new Date(json['created_at']),
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    due_date: !exists(json, 'due_date')
      ? undefined
      : json['due_date'] === null
      ? null
      : new Date(json['due_date']),
    completed_at: !exists(json, 'completed_at')
      ? undefined
      : json['completed_at'] === null
      ? null
      : new Date(json['completed_at']),
    tags: !exists(json, 'tags')
      ? undefined
      : (json['tags'] as Array<any>).map(CollectionTagFromJSON),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function TicketToJSON(value?: Ticket | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    parent_id: value.parent_id,
    type: value.type,
    subject: value.subject,
    description: value.description,
    status: value.status,
    priority: value.priority,
    assignees:
      value.assignees === undefined
        ? undefined
        : (value.assignees as Array<any>).map(AssigneeToJSON),
    due_date:
      value.due_date === undefined
        ? undefined
        : value.due_date === null
        ? null
        : new Date(value.due_date).toISOString(),
    tags:
      value.tags === undefined ? undefined : (value.tags as Array<any>).map(CollectionTagToJSON),
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}

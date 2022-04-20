/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.24.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Price, PriceFromJSON, PriceToJSON } from './Price'

/**
 *
 * @export
 * @interface Message
 */
export interface Message {
  /**
   * The phone number that initiated the message.
   * @type {string}
   * @memberof Message
   */
  from: string
  /**
   * The phone number that received the message.
   * @type {string}
   * @memberof Message
   */
  to: string
  /**
   * The message text.
   * @type {string}
   * @memberof Message
   */
  body: string
  /**
   *
   * @type {string}
   * @memberof Message
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof Message
   */
  subject?: string
  /**
   * Set to sms for SMS messages and mms for MMS messages.
   * @type {string}
   * @memberof Message
   */
  type?: MessageType
  /**
   * The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.
   * @type {number}
   * @memberof Message
   */
  readonly number_of_units?: number
  /**
   * The number of media files associated with the message.
   * @type {number}
   * @memberof Message
   */
  readonly number_of_media_files?: number
  /**
   * The direction of the message.
   * @type {string}
   * @memberof Message
   */
  readonly direction?: MessageDirection
  /**
   * Status of the delivery of the message.
   * @type {string}
   * @memberof Message
   */
  readonly status?: MessageStatus
  /**
   * The scheduled date and time of the message.
   * @type {Date}
   * @memberof Message
   */
  scheduled_at?: Date
  /**
   * The date and time that the message was sent
   * @type {Date}
   * @memberof Message
   */
  readonly sent_at?: Date
  /**
   * Define a webhook to receive delivery notifications.
   * @type {string}
   * @memberof Message
   */
  webhook_url?: string
  /**
   * A client reference.
   * @type {string}
   * @memberof Message
   */
  reference?: string
  /**
   *
   * @type {Price}
   * @memberof Message
   */
  price?: Price
  /**
   *
   * @type {Error}
   * @memberof Message
   */
  error?: Error
  /**
   * The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.
   * @type {string}
   * @memberof Message
   */
  messaging_service_id?: string
  /**
   *
   * @type {string}
   * @memberof Message
   */
  readonly updated_by?: string | null
  /**
   *
   * @type {string}
   * @memberof Message
   */
  readonly created_by?: string | null
  /**
   *
   * @type {Date}
   * @memberof Message
   */
  readonly updated_at?: Date
  /**
   *
   * @type {Date}
   * @memberof Message
   */
  readonly created_at?: Date
}

/**
 * @export
 * @enum {string}
 */
export enum MessageType {
  sms = 'sms',
  mms = 'mms'
}
/**
 * @export
 * @enum {string}
 */
export enum MessageDirection {
  inbound = 'inbound',
  outbound_api = 'outbound-api',
  outbound_call = 'outbound-call',
  outbound_reply = 'outbound-reply',
  unknown = 'unknown'
}
/**
 * @export
 * @enum {string}
 */
export enum MessageStatus {
  accepted = 'accepted',
  scheduled = 'scheduled',
  canceled = 'canceled',
  queued = 'queued',
  sending = 'sending',
  sent = 'sent',
  failed = 'failed',
  delivered = 'delivered',
  undelivered = 'undelivered',
  receiving = 'receiving',
  received = 'received',
  read = 'read'
}

export function MessageFromJSON(json: any): Message {
  return MessageFromJSONTyped(json, false)
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
  if (json === undefined || json === null) {
    return json
  }
  return {
    from: json['from'],
    to: json['to'],
    body: json['body'],
    id: !exists(json, 'id') ? undefined : json['id'],
    subject: !exists(json, 'subject') ? undefined : json['subject'],
    type: !exists(json, 'type') ? undefined : json['type'],
    number_of_units: !exists(json, 'number_of_units') ? undefined : json['number_of_units'],
    number_of_media_files: !exists(json, 'number_of_media_files')
      ? undefined
      : json['number_of_media_files'],
    direction: !exists(json, 'direction') ? undefined : json['direction'],
    status: !exists(json, 'status') ? undefined : json['status'],
    scheduled_at: !exists(json, 'scheduled_at') ? undefined : new Date(json['scheduled_at']),
    sent_at: !exists(json, 'sent_at') ? undefined : new Date(json['sent_at']),
    webhook_url: !exists(json, 'webhook_url') ? undefined : json['webhook_url'],
    reference: !exists(json, 'reference') ? undefined : json['reference'],
    price: !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    error: !exists(json, 'error') ? undefined : json['error'],
    messaging_service_id: !exists(json, 'messaging_service_id')
      ? undefined
      : json['messaging_service_id'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
    updated_at: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    created_at: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  }
}

export function MessageToJSON(value?: Message | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    from: value.from,
    to: value.to,
    body: value.body,
    subject: value.subject,
    type: value.type,
    scheduled_at:
      value.scheduled_at === undefined ? undefined : new Date(value.scheduled_at).toISOString(),
    webhook_url: value.webhook_url,
    reference: value.reference,
    price: PriceToJSON(value.price),
    error: value.error,
    messaging_service_id: value.messaging_service_id
  }
}

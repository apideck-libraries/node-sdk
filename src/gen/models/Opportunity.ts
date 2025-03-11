/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.12.2
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Currency, CurrencyFromJSON, CurrencyToJSON } from './Currency'
import { CustomField, CustomFieldFromJSON, CustomFieldToJSON } from './CustomField'
import { PassThroughBody, PassThroughBodyFromJSON, PassThroughBodyToJSON } from './PassThroughBody'
import { Tags, TagsFromJSON, TagsToJSON } from './Tags'

/**
 *
 * @export
 * @interface Opportunity
 */
export interface Opportunity {
  /**
   * The title or name of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  title: string
  /**
   * A unique identifier for the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  readonly id?: string
  /**
   * The unique identifier of the primary contact associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  primary_contact_id?: string | null
  /**
   * A description of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  description?: string | null
  /**
   * The type of the opportunity
   * @type {string}
   * @memberof Opportunity
   */
  type?: string | null
  /**
   * The monetary value associated with the opportunity
   * @type {number}
   * @memberof Opportunity
   */
  monetary_amount?: number | null
  /**
   *
   * @type {Currency}
   * @memberof Opportunity
   */
  currency?: Currency | null
  /**
   * The probability of winning the opportunity, expressed as a percentage.
   * @type {number}
   * @memberof Opportunity
   */
  win_probability?: number | null
  /**
   * The expected revenue from the opportunity
   * @type {number}
   * @memberof Opportunity
   */
  readonly expected_revenue?: number | null
  /**
   * The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet.
   * @type {Date}
   * @memberof Opportunity
   */
  close_date?: Date | null
  /**
   * The unique identifier of the reason why the opportunity was lost.
   * @type {string}
   * @memberof Opportunity
   */
  loss_reason_id?: string | null
  /**
   * The reason why the opportunity was lost.
   * @type {string}
   * @memberof Opportunity
   */
  loss_reason?: string | null
  /**
   * The unique identifier of the reason why the opportunity was won.
   * @type {string}
   * @memberof Opportunity
   */
  won_reason_id?: string | null
  /**
   * The reason why the opportunity was won.
   * @type {string}
   * @memberof Opportunity
   */
  won_reason?: string | null
  /**
   * The unique identifier of the pipeline associated with the opportunity
   * @type {string}
   * @memberof Opportunity
   */
  pipeline_id?: string | null
  /**
   * The unique identifier of the stage in the pipeline associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  pipeline_stage_id?: string | null
  /**
   * The unique identifier of the source of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  source_id?: string | null
  /**
   * The unique identifier of the lead associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  lead_id?: string | null
  /**
   * The source of the lead associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  lead_source?: string | null
  /**
   * The unique identifier of the contact associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  contact_id?: string | null
  /**
   * An array of unique identifiers of all contacts associated with the opportunity.
   * @type {Array<string>}
   * @memberof Opportunity
   */
  contact_ids?: Array<string>
  /**
   * The unique identifier of the company associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  company_id?: string | null
  /**
   * The name of the company associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  company_name?: string | null
  /**
   * The unique identifier of the user who owns the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  owner_id?: string | null
  /**
   * The priority level of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  priority?: string | null
  /**
   * The current status of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  status?: string | null
  /**
   * The unique identifier of the current status of the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  status_id?: string | null
  /**
   *
   * @type {Tags}
   * @memberof Opportunity
   */
  tags?: Tags | null
  /**
   * The number of interactions with the opportunity.
   * @type {number}
   * @memberof Opportunity
   */
  readonly interaction_count?: number | null
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Opportunity
   */
  custom_fields?: Array<CustomField>
  /**
   * The date and time when the stage of the opportunity was last changed.
   * @type {Date}
   * @memberof Opportunity
   */
  stage_last_changed_at?: Date | null
  /**
   * The date and time of the last activity associated with the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  readonly last_activity_at?: string | null
  /**
   * Indicates whether the opportunity has been deleted.
   * @type {boolean}
   * @memberof Opportunity
   */
  readonly deleted?: boolean
  /**
   * The date and time when the stage of the opportunity was last changed.
   * @type {Date}
   * @memberof Opportunity
   */
  readonly date_stage_changed?: Date | null
  /**
   * The date and time when the opportunity was last contacted.
   * @type {Date}
   * @memberof Opportunity
   */
  readonly date_last_contacted?: Date | null
  /**
   * The date and time when the lead associated with the opportunity was created.
   * @type {Date}
   * @memberof Opportunity
   */
  readonly date_lead_created?: Date | null
  /**
   * When custom mappings are configured on the resource, the result is included here.
   * @type {object}
   * @memberof Opportunity
   */
  readonly custom_mappings?: object | null
  /**
   * The unique identifier of the user who last updated the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  readonly updated_by?: string | null
  /**
   * The unique identifier of the user who created the opportunity.
   * @type {string}
   * @memberof Opportunity
   */
  readonly created_by?: string | null
  /**
   * The date and time when the opportunity was last updated.
   * @type {Date}
   * @memberof Opportunity
   */
  readonly updated_at?: Date | null
  /**
   * The date and time when the opportunity was created.
   * @type {Date}
   * @memberof Opportunity
   */
  readonly created_at?: Date | null
  /**
   *
   * @type {PassThroughBody}
   * @memberof Opportunity
   */
  pass_through?: PassThroughBody
}

export function OpportunityFromJSON(json: any): Opportunity {
  return OpportunityFromJSONTyped(json, false)
}

export function OpportunityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Opportunity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    title: json['title'],
    id: !exists(json, 'id') ? undefined : json['id'],
    primary_contact_id: !exists(json, 'primary_contact_id')
      ? undefined
      : json['primary_contact_id'],
    description: !exists(json, 'description') ? undefined : json['description'],
    type: !exists(json, 'type') ? undefined : json['type'],
    monetary_amount: !exists(json, 'monetary_amount') ? undefined : json['monetary_amount'],
    currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
    win_probability: !exists(json, 'win_probability') ? undefined : json['win_probability'],
    expected_revenue: !exists(json, 'expected_revenue') ? undefined : json['expected_revenue'],
    close_date: !exists(json, 'close_date')
      ? undefined
      : json['close_date'] === null
      ? null
      : new Date(json['close_date']),
    loss_reason_id: !exists(json, 'loss_reason_id') ? undefined : json['loss_reason_id'],
    loss_reason: !exists(json, 'loss_reason') ? undefined : json['loss_reason'],
    won_reason_id: !exists(json, 'won_reason_id') ? undefined : json['won_reason_id'],
    won_reason: !exists(json, 'won_reason') ? undefined : json['won_reason'],
    pipeline_id: !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
    pipeline_stage_id: !exists(json, 'pipeline_stage_id') ? undefined : json['pipeline_stage_id'],
    source_id: !exists(json, 'source_id') ? undefined : json['source_id'],
    lead_id: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    lead_source: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    contact_id: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    contact_ids: !exists(json, 'contact_ids') ? undefined : json['contact_ids'],
    company_id: !exists(json, 'company_id') ? undefined : json['company_id'],
    company_name: !exists(json, 'company_name') ? undefined : json['company_name'],
    owner_id: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    status: !exists(json, 'status') ? undefined : json['status'],
    status_id: !exists(json, 'status_id') ? undefined : json['status_id'],
    tags: !exists(json, 'tags') ? undefined : TagsFromJSON(json['tags']),
    interaction_count: !exists(json, 'interaction_count') ? undefined : json['interaction_count'],
    custom_fields: !exists(json, 'custom_fields')
      ? undefined
      : (json['custom_fields'] as Array<any>).map(CustomFieldFromJSON),
    stage_last_changed_at: !exists(json, 'stage_last_changed_at')
      ? undefined
      : json['stage_last_changed_at'] === null
      ? null
      : new Date(json['stage_last_changed_at']),
    last_activity_at: !exists(json, 'last_activity_at') ? undefined : json['last_activity_at'],
    deleted: !exists(json, 'deleted') ? undefined : json['deleted'],
    date_stage_changed: !exists(json, 'date_stage_changed')
      ? undefined
      : json['date_stage_changed'] === null
      ? null
      : new Date(json['date_stage_changed']),
    date_last_contacted: !exists(json, 'date_last_contacted')
      ? undefined
      : json['date_last_contacted'] === null
      ? null
      : new Date(json['date_last_contacted']),
    date_lead_created: !exists(json, 'date_lead_created')
      ? undefined
      : json['date_lead_created'] === null
      ? null
      : new Date(json['date_lead_created']),
    custom_mappings: !exists(json, 'custom_mappings') ? undefined : json['custom_mappings'],
    updated_by: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    created_by: !exists(json, 'created_by') ? undefined : json['created_by'],
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
    pass_through: !exists(json, 'pass_through')
      ? undefined
      : PassThroughBodyFromJSON(json['pass_through'])
  }
}

export function OpportunityToJSON(value?: Opportunity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    primary_contact_id: value.primary_contact_id,
    description: value.description,
    type: value.type,
    monetary_amount: value.monetary_amount,
    currency: CurrencyToJSON(value.currency),
    win_probability: value.win_probability,
    close_date:
      value.close_date === undefined
        ? undefined
        : value.close_date === null
        ? null
        : new Date(value.close_date).toISOString().substr(0, 10),
    loss_reason_id: value.loss_reason_id,
    loss_reason: value.loss_reason,
    won_reason_id: value.won_reason_id,
    won_reason: value.won_reason,
    pipeline_id: value.pipeline_id,
    pipeline_stage_id: value.pipeline_stage_id,
    source_id: value.source_id,
    lead_id: value.lead_id,
    lead_source: value.lead_source,
    contact_id: value.contact_id,
    contact_ids: value.contact_ids,
    company_id: value.company_id,
    company_name: value.company_name,
    owner_id: value.owner_id,
    priority: value.priority,
    status: value.status,
    status_id: value.status_id,
    tags: TagsToJSON(value.tags),
    custom_fields:
      value.custom_fields === undefined
        ? undefined
        : (value.custom_fields as Array<any>).map(CustomFieldToJSON),
    stage_last_changed_at:
      value.stage_last_changed_at === undefined
        ? undefined
        : value.stage_last_changed_at === null
        ? null
        : new Date(value.stage_last_changed_at).toISOString(),
    pass_through: PassThroughBodyToJSON(value.pass_through)
  }
}

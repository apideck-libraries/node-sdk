/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 10.11.3
 * Contact: support@apideck.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @enum {string}
 */
export enum EcommerceEventType {
  Star = '*',
  ecommerce_order_created = 'ecommerce.order.created',
  ecommerce_order_updated = 'ecommerce.order.updated',
  ecommerce_order_deleted = 'ecommerce.order.deleted',
  ecommerce_product_created = 'ecommerce.product.created',
  ecommerce_product_updated = 'ecommerce.product.updated',
  ecommerce_product_deleted = 'ecommerce.product.deleted',
  ecommerce_customer_created = 'ecommerce.customer.created',
  ecommerce_customer_updated = 'ecommerce.customer.updated',
  ecommerce_customer_deleted = 'ecommerce.customer.deleted'
}

export function EcommerceEventTypeFromJSON(json: any): EcommerceEventType {
  return EcommerceEventTypeFromJSONTyped(json, false)
}

export function EcommerceEventTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): EcommerceEventType {
  return json as EcommerceEventType
}

export function EcommerceEventTypeToJSON(value?: EcommerceEventType | null): any {
  return value as any
}

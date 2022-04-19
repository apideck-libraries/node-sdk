/* tslint:disable */
/* eslint-disable */
/**
 * Apideck
 * The Apideck OpenAPI Spec: SDK Optimized
 *
 * The version of the OpenAPI document: 8.22.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime'
import { Address, AddressFromJSON, AddressToJSON } from './Address'
import { PaymentUnit, PaymentUnitFromJSON, PaymentUnitToJSON } from './PaymentUnit'

/**
 *
 * @export
 * @interface EmployeeJobs
 */
export interface EmployeeJobs {
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  readonly id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  readonly employee_id?: string
  /**
   *
   * @type {string}
   * @memberof EmployeeJobs
   */
  title?: string | null
  /**
   *
   * @type {number}
   * @memberof EmployeeJobs
   */
  compensation_rate?: number
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   * @type {string}
   * @memberof EmployeeJobs
   */
  currency?: EmployeeJobsCurrency
  /**
   *
   * @type {PaymentUnit}
   * @memberof EmployeeJobs
   */
  payment_unit?: PaymentUnit
  /**
   *
   * @type {Date}
   * @memberof EmployeeJobs
   */
  hired_at?: Date | null
  /**
   * Indicates whether this the employee's primary job
   * @type {boolean}
   * @memberof EmployeeJobs
   */
  is_primary?: boolean
  /**
   *
   * @type {Address}
   * @memberof EmployeeJobs
   */
  location?: Address
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeJobsCurrency {
  UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY',
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARS = 'ARS',
  AUD = 'AUD',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BOV = 'BOV',
  BRL = 'BRL',
  BSD = 'BSD',
  BTN = 'BTN',
  BWP = 'BWP',
  BYR = 'BYR',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHE = 'CHE',
  CHF = 'CHF',
  CHW = 'CHW',
  CLF = 'CLF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  COU = 'COU',
  CRC = 'CRC',
  CUC = 'CUC',
  CUP = 'CUP',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KPW = 'KPW',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRO = 'MRO',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MXV = 'MXV',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOS = 'SOS',
  SRD = 'SRD',
  SSP = 'SSP',
  STD = 'STD',
  SVC = 'SVC',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRC = 'TRC',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  USN = 'USN',
  USS = 'USS',
  UYI = 'UYI',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XAG = 'XAG',
  XAU = 'XAU',
  XBA = 'XBA',
  XBB = 'XBB',
  XBC = 'XBC',
  XBD = 'XBD',
  XCD = 'XCD',
  XDR = 'XDR',
  XOF = 'XOF',
  XPD = 'XPD',
  XPF = 'XPF',
  XPT = 'XPT',
  XTS = 'XTS',
  XXX = 'XXX',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMK = 'ZMK',
  ZMW = 'ZMW',
  BTC = 'BTC'
}

export function EmployeeJobsFromJSON(json: any): EmployeeJobs {
  return EmployeeJobsFromJSONTyped(json, false)
}

export function EmployeeJobsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeJobs {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    employee_id: !exists(json, 'employee_id') ? undefined : json['employee_id'],
    title: !exists(json, 'title') ? undefined : json['title'],
    compensation_rate: !exists(json, 'compensation_rate') ? undefined : json['compensation_rate'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    payment_unit: !exists(json, 'payment_unit')
      ? undefined
      : PaymentUnitFromJSON(json['payment_unit']),
    hired_at: !exists(json, 'hired_at')
      ? undefined
      : json['hired_at'] === null
      ? null
      : new Date(json['hired_at']),
    is_primary: !exists(json, 'is_primary') ? undefined : json['is_primary'],
    location: !exists(json, 'location') ? undefined : AddressFromJSON(json['location'])
  }
}

export function EmployeeJobsToJSON(value?: EmployeeJobs | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    compensation_rate: value.compensation_rate,
    currency: value.currency,
    payment_unit: PaymentUnitToJSON(value.payment_unit),
    hired_at:
      value.hired_at === undefined
        ? undefined
        : value.hired_at === null
        ? null
        : new Date(value.hired_at).toISOString().substr(0, 10),
    is_primary: value.is_primary,
    location: AddressToJSON(value.location)
  }
}

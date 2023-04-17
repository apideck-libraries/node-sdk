# Apideck.PaymentCard

### Description

A card\'s non-confidential details.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`bin` | **string** | The first six digits of the card number, known as the Bank Identification Number (BIN). | [optional] 
`card_brand` | **string** | The first six digits of the card number, known as the Bank Identification Number (BIN). | [optional] 
`card_type` | **string** |  | [optional] 
`prepaid_type` | **string** |  | [optional] 
`cardholder_name` | **string** |  | [optional] 
`customer_id` | **string** |  | [optional] 
`merchant_id` | **string** |  | [optional] 
`exp_month` | **number** | The expiration month of the associated card as an integer between 1 and 12. | [optional] 
`exp_year` | **number** | The four-digit year of the card\'s expiration date. | [optional] 
`fingerprint` | **string** |  | [optional] 
`last_4` | **string** |  | [optional] 
`enabled` | **boolean** | Indicates whether or not a card can be used for payments. | [optional] 
`billing_address` | [**Address**](Address.md) |  | [optional] 
`reference_id` | **string** | An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. | [optional] 
`version` | **string** |  | [optional] 





<a name="PaymentCardCardBrand"></a>
## Enum: PaymentCard.card_brand


* `visa` (value: `'visa'`)

* `mastercard` (value: `'mastercard'`)

* `amex` (value: `'amex'`)

* `discover` (value: `'discover'`)

* `discover_diners` (value: `'discover-diners'`)

* `jcb` (value: `'jcb'`)

* `china_unionpay` (value: `'china-unionpay'`)

* `square_gift_card` (value: `'square-gift-card'`)

* `square_capital_card` (value: `'square-capital-card'`)

* `interac` (value: `'interac'`)

* `eftpos` (value: `'eftpos'`)

* `felica` (value: `'felica'`)

* `ebt` (value: `'ebt'`)

* `other` (value: `'other'`)




<a name="PaymentCardCardType"></a>
## Enum: PaymentCard.card_type


* `credit` (value: `'credit'`)

* `debit` (value: `'debit'`)

* `prepaid` (value: `'prepaid'`)

* `other` (value: `'other'`)




<a name="PaymentCardPrepaidType"></a>
## Enum: PaymentCard.prepaid_type


* `non_prepaid` (value: `'non-prepaid'`)

* `prepaid` (value: `'prepaid'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:













* [`Address`](Address.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



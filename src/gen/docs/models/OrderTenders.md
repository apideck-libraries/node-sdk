# Apideck.OrderTenders

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`note` | **string** |  | [optional] 
`amount` | **number** |  | [optional] 
`percentage` | **number** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`total_amount` | **number** |  | [optional] 
`total_tip` | **number** |  | [optional] 
`total_processing_fee` | **number** |  | [optional] 
`total_tax` | **number** |  | [optional] 
`total_discount` | **number** |  | [optional] 
`total_refund` | **number** |  | [optional] 
`total_service_charge` | **number** |  | [optional] 
`buyer_tendered_cash_amount` | **number** | The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash. | [optional] 
`change_back_cash_amount` | **number** | The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash. | [optional] 
`card` | [**PaymentCard**](PaymentCard.md) |  | [optional] 
`card_status` | **string** | The status of the card. Only applicable when the tender type is card. | [optional] 
`card_entry_method` | **string** | The entry method of the card. Only applicable when the tender type is card. | [optional] 
`payment_id` | **string** |  | [optional] 
`location_id` | **string** |  | [optional] 
`transaction_id` | **string** |  | [optional] 





<a name="OrderTendersType"></a>
## Enum: OrderTenders.type


* `cash` (value: `'cash'`)

* `card` (value: `'card'`)

* `other` (value: `'other'`)




<a name="OrderTendersCardStatus"></a>
## Enum: OrderTenders.card_status


* `authorized` (value: `'authorized'`)

* `captured` (value: `'captured'`)

* `failed` (value: `'failed'`)

* `voided` (value: `'voided'`)




<a name="OrderTendersCardEntryMethod"></a>
## Enum: OrderTenders.card_entry_method


* `evm` (value: `'evm'`)

* `swiped` (value: `'swiped'`)

* `keyed` (value: `'keyed'`)

* `on_file` (value: `'on-file'`)

* `contactless` (value: `'contactless'`)




## Referenced Types:






* [`Currency`](Currency.md)









* [`PaymentCard`](PaymentCard.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



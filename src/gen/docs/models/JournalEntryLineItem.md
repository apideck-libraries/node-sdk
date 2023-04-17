# Apideck.JournalEntryLineItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`total_amount` | **number** | Debit entries are considered positive, and credit entries are considered negative. | 
`type` | **string** | Debit entries are considered positive, and credit entries are considered negative. | 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | 
`id` | **string** | A unique identifier for an object. | [optional] 
`description` | **string** | User defined description | [optional] 
`tax_amount` | **number** | Tax amount | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`tracking_category` | [**LinkedTrackingCategory**](LinkedTrackingCategory.md) |  | [optional] 
`department_id` | **string** | A unique identifier for an object. | [optional] 
`location_id` | **string** | A unique identifier for an object. | [optional] 





<a name="JournalEntryLineItemType"></a>
## Enum: JournalEntryLineItem.type


* `debit` (value: `'debit'`)

* `credit` (value: `'credit'`)




## Referenced Types:


* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)



* [`LinkedTaxRate`](LinkedTaxRate.md)
* [`LinkedTrackingCategory`](LinkedTrackingCategory.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



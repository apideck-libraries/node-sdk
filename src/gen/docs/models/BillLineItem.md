# Apideck.BillLineItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`row_id` | **string** | Row ID | [optional] 
`code` | **string** | User defined item code | [optional] 
`line_number` | **number** | Line number in the invoice | [optional] 
`description` | **string** | User defined description | [optional] 
`type` | **string** | Bill Line Item type | [optional] 
`tax_amount` | **number** | Tax amount | [optional] 
`total_amount` | **number** | Total amount of the line item | [optional] 
`quantity` | **number** |  | [optional] 
`unit_price` | **number** |  | [optional] 
`unit_of_measure` | **string** | Description of the unit type the item is sold as, ie: kg, hour. | [optional] 
`discount_percentage` | **number** | Discount percentage | [optional] 
`item` | [**LinkedInvoiceItem**](LinkedInvoiceItem.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`row_version` | **string** |  | [optional] 





<a name="BillLineItemType"></a>
## Enum: BillLineItem.type


* `item` (value: `'expense_item'`)

* `account` (value: `'expense_account'`)




## Referenced Types:












* [`LinkedInvoiceItem`](LinkedInvoiceItem.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedTaxRate`](LinkedTaxRate.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



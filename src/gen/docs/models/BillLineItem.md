# Apideck.BillLineItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
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
`location_id` | **string** | Location id | [optional] 
`department_id` | **string** | Department id | [optional] 
`item` | [**LinkedInvoiceItem**](LinkedInvoiceItem.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 





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



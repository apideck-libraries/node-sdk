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
`discount_percentage` | **number** | Discount percentage applied to the line item when supported downstream. | [optional] 
`discount_amount` | **number** | Discount amount applied to the line item when supported downstream. | [optional] 
`location_id` | **string** | Location id | [optional] 
`department_id` | **string** | Department id | [optional] 
`item` | [**LinkedInvoiceItem**](LinkedInvoiceItem.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 





<a name="BillLineItemType"></a>
## Enum: BillLineItem.type


* `expense_item` (value: `'expense_item'`)

* `expense_account` (value: `'expense_account'`)

* `other` (value: `'other'`)




## Referenced Types:















* [`LinkedInvoiceItem`](LinkedInvoiceItem.md)
* [`LinkedTaxRate`](LinkedTaxRate.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



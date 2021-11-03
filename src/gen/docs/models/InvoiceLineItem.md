# Apideck.InvoiceLineItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`row_id` | **string** |  | [optional] 
`code` | **string** | User defined item code | [optional] 
`line_number` | **number** |  | [optional] 
`description` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`tax_amount` | **number** |  | [optional] 
`total_amount` | **number** |  | [optional] 
`quantity` | **number** |  | [optional] 
`unit_price` | **number** |  | [optional] 
`unit_of_measure` | **string** | Description of the unit type the item is sold as, ie: kg, hour. | [optional] 
`discount_percentage` | **number** |  | [optional] 
`item` | [**LinkedInvoiceItem**](LinkedInvoiceItem.md) |  | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`row_version` | **string** |  | [optional] 





<a name="InvoiceLineItemType"></a>
## Enum: InvoiceLineItem.type


* `inventory` (value: `'inventory'`)

* `service` (value: `'service'`)




## Referenced Types:












* [`LinkedInvoiceItem`](LinkedInvoiceItem.md)
* [`LinkedTaxRate`](LinkedTaxRate.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



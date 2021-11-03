# Apideck.InvoiceItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`code` | **string** | User defined item code | [optional] 
`sold` | **boolean** | Item can be sold | [optional] 
`name` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`sales_details` | [**InvoiceItemSalesDetails**](InvoiceItemSalesDetails.md) |  | [optional] 
`quantity` | **number** |  | [optional] 
`unit_price` | **number** |  | [optional] 
`income_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`expense_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`active` | **boolean** |  | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="InvoiceItemType"></a>
## Enum: InvoiceItem.type


* `inventory` (value: `'inventory'`)

* `service` (value: `'service'`)




## Referenced Types:






* [`InvoiceItemSalesDetails`](InvoiceItemSalesDetails.md)


* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



# Apideck.InvoiceItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | The ID of the item. | [optional] 
`name` | **string** | Item name | [optional] 
`description` | **string** | A short description of the item | [optional] 
`code` | **string** | User defined item code | [optional] 
`sold` | **boolean** | Item will be available on sales transactions | [optional] 
`purchased` | **boolean** | Item is available for purchase transactions | [optional] 
`tracked` | **boolean** | Item is inventoried | [optional] 
`type` | **string** | Item type | [optional] 
`sales_details` | [**InvoiceItemSalesDetails**](InvoiceItemSalesDetails.md) |  | [optional] 
`purchase_details` | [**InvoiceItemSalesDetails**](InvoiceItemSalesDetails.md) |  | [optional] 
`quantity` | **number** |  | [optional] 
`unit_price` | **number** |  | [optional] 
`asset_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
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

* `other` (value: `'other'`)




## Referenced Types:








* [`InvoiceItemSalesDetails`](InvoiceItemSalesDetails.md)
* [`InvoiceItemSalesDetails`](InvoiceItemSalesDetails.md)


* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



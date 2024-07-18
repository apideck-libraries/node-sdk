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
`taxable` | **boolean** | If true, transactions for this item are taxable | [optional] 
`inventory_date` | **Date** | The date of opening balance if inventory item is tracked - YYYY-MM-DD. | [optional] 
`type` | **string** | Item type | [optional] 
`sales_details` | [**InvoiceItemSalesDetails**](InvoiceItemSalesDetails.md) |  | [optional] 
`purchase_details` | [**InvoiceItemSalesDetails**](InvoiceItemSalesDetails.md) |  | [optional] 
`quantity` | **number** |  | [optional] 
`unit_price` | **number** |  | [optional] 
`asset_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`income_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`expense_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`tracking_category` | [**DeprecatedLinkedTrackingCategory**](DeprecatedLinkedTrackingCategory.md) |  | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`active` | **boolean** |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





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
* [`DeprecatedLinkedTrackingCategory`](DeprecatedLinkedTrackingCategory.md)
* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)







* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



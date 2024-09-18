# Apideck.ExpenseLineItem

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`total_amount` | **number** | The total amount of the expense line item. | 
`id` | **string** | A unique identifier for an object. | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`account_id` | **string** | The unique identifier for the ledger account. | [optional] 
`customer_id` | **string** | The ID of the customer this expense item is linked to. | [optional] 
`department_id` | **string** | The ID of the department this expense item is linked to. | [optional] 
`location_id` | **string** | The ID of the location this expense item is linked to. | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`description` | **string** | The expense line item description | [optional] 
`billable` | **boolean** | Boolean that indicates if the line item is billable or not. | [optional] 





## Referenced Types:


* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)




* [`LinkedTaxRate`](LinkedTaxRate.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



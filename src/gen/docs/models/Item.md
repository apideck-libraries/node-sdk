# Apideck.Item

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** |  | 
`id` | **string** |  | [optional] 
`idempotency_key` | **string** | A value you specify that uniquely identifies this request among requests you have sent. | [optional] 
`description` | **string** |  | [optional] 
`abbreviation` | **string** |  | [optional] 
`product_type` | **string** |  | [optional] 
`price_amount` | **number** |  | [optional] 
`pricing_type` | **string** |  | [optional] 
`price_currency` | [**Currency**](Currency.md) |  | [optional] 
`cost` | **number** |  | [optional] 
`tax_ids` | **Array&lt;string&gt;** | A list of Tax IDs for the product. | [optional] 
`absent_at_location_ids` | **Array&lt;string&gt;** | A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated. | [optional] 
`present_at_all_locations` | **boolean** |  | [optional] 
`available_for_pickup` | **boolean** |  | [optional] 
`available_online` | **boolean** |  | [optional] 
`sku` | **string** | SKU of the item | [optional] 
`code` | **string** | Product code, e.g. UPC or EAN | [optional] 
`categories` | **Array&lt;object&gt;** |  | [optional] 
`options` | **Array&lt;object&gt;** | List of options pertaining to this item\'s attribute variation | [optional] 
`variations` | **Array&lt;object&gt;** |  | [optional] 
`modifier_groups` | **Array&lt;object&gt;** |  | [optional] 
`available` | **boolean** |  | [optional] 
`hidden` | **boolean** |  | [optional] 
`version` | **string** | The user who last updated the object. | [optional] 
`deleted` | **boolean** |  | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="ItemProductType"></a>
## Enum: Item.product_type


* `regular` (value: `'regular'`)

* `other` (value: `'other'`)




<a name="ItemPricingType"></a>
## Enum: Item.pricing_type


* `fixed` (value: `'fixed'`)

* `variable` (value: `'variable'`)

* `per_unit` (value: `'per_unit'`)

* `other` (value: `'other'`)




## Referenced Types:








* [`Currency`](Currency.md)





















---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



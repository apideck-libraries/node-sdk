# Apideck.OrderDiscounts

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`type` | **string** |  | 
`id` | **string** | A unique identifier for an object. | [optional] 
`product_id` | **string** | A unique identifier for an object. | [optional] 
`name` | **string** |  | [optional] 
`amount` | **number** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`scope` | **string** |  | [optional] 





<a name="OrderDiscountsType"></a>
## Enum: OrderDiscounts.type


* `percentage` (value: `'percentage'`)

* `flat_fee` (value: `'flat_fee'`)




<a name="OrderDiscountsScope"></a>
## Enum: OrderDiscounts.scope


* `order` (value: `'order'`)

* `line_item` (value: `'line_item'`)




## Referenced Types:





* [`Currency`](Currency.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



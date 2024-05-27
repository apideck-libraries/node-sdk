# Apideck.EcommerceOrderLineItem

### Description

A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** | The name of the product or variant associated with the line item. | 
`quantity` | **string** | The quantity of the product or variant associated with the line item. | 
`total_amount` | **string** | The total amount for the product(s) or variant associated with the line item, including taxes and discounts. | 
`id` | **string** | A unique identifier for an object. | [optional] 
`product_id` | **string** | A unique identifier for the product associated with the line item. | [optional] 
`variant_id` | **string** | A unique identifier for the variant of the product associated with the line item, if applicable. | [optional] 
`sku` | **string** | The SKU of the product or variant associated with the line item. | [optional] 
`description` | **string** | The description of the product or variant associated with the line item. | [optional] 
`options` | **Array&lt;object&gt;** |  | [optional] 
`unit_price` | **string** | The unit price of the product or variant associated with the line item. | [optional] 
`tax_rate` | **string** | The tax rate applied to the product or variant associated with the line item. | [optional] 
`tax_amount` | **string** | The total tax amount applied to the product or variant associated with the line item. | [optional] 
`is_refunded` | **boolean** | Whether the line item has been refunded. | [optional] 
`refunded_amount` | **string** | The amount of the line item that has been refunded. | [optional] 
`refunded_quantity` | **string** | The quantity of the line item that has been refunded. | [optional] 
`sub_total` | **string** | The sub total for the product(s) or variant associated with the line item, excluding taxes and discounts. | [optional] 
`discounts` | [**Array&lt;EcommerceDiscount&gt;**](EcommerceDiscount.md) |  | [optional] 





## Referenced Types:
















* [`EcommerceDiscount`](EcommerceDiscount.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



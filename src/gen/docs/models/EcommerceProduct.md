# Apideck.EcommerceProduct

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`name` | **string** | The name of the product as it should be displayed to customers. | [optional] 
`description` | **string** | A detailed description of the product. | [optional] 
`status` | **string** | The current status of the product (active or archived). | [optional] 
`price` | **string** | The price of the product. | [optional] 
`sku` | **string** | The stock keeping unit of the product. | [optional] 
`inventory_quantity` | **string** | The quantity of the product in stock. | [optional] 
`images` | [**Array&lt;EcommerceProductImages&gt;**](EcommerceProductImages.md) | An array of image URLs for the product. | [optional] 
`weight` | **string** | The weight of the product. | [optional] 
`weight_unit` | **string** | The unit of measurement for the weight of the product. | [optional] 
`options` | [**Array&lt;EcommerceProductOptions&gt;**](EcommerceProductOptions.md) | An array of options for the product. | [optional] 
`variants` | [**Array&lt;EcommerceProductVariants&gt;**](EcommerceProductVariants.md) |  | [optional] 
`tags` | **Array&lt;string&gt;** | An array of tags for the product, used for organization and searching. | [optional] 
`categories` | [**Array&lt;EcommerceProductCategories&gt;**](EcommerceProductCategories.md) | An array of categories for the product, used for organization and searching. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 





<a name="EcommerceProductStatus"></a>
## Enum: EcommerceProduct.status


* `active` (value: `'active'`)

* `archived` (value: `'archived'`)




## Referenced Types:







* [`EcommerceProductImages`](EcommerceProductImages.md)


* [`EcommerceProductOptions`](EcommerceProductOptions.md)
* [`EcommerceProductVariants`](EcommerceProductVariants.md)

* [`EcommerceProductCategories`](EcommerceProductCategories.md)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



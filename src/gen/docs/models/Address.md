# Apideck.Address

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | Unique identifier for the address. | [optional] 
`type` | **string** | The type of address. | [optional] 
`string` | **string** | The address string. Some APIs don\'t provide structured address data. | [optional] 
`name` | **string** | The name of the address. | [optional] 
`line1` | **string** | Line 1 of the address e.g. number, street, suite, apt #, etc. | [optional] 
`line2` | **string** | Line 2 of the address | [optional] 
`line3` | **string** | Line 3 of the address | [optional] 
`line4` | **string** | Line 4 of the address | [optional] 
`street_number` | **string** | Street number | [optional] 
`city` | **string** | Name of city. | [optional] 
`state` | **string** | Name of state | [optional] 
`postal_code` | **string** | Zip code or equivalent. | [optional] 
`country` | **string** | country code according to ISO 3166-1 alpha-2. | [optional] 
`latitude` | **string** | Latitude of the address | [optional] 
`longitude` | **string** | Longitude of the address | [optional] 
`county` | **string** | Address field that holds a sublocality, such as a county | [optional] 
`contact_name` | **string** | Name of the contact person at the address | [optional] 
`salutation` | **string** | Salutation of the contact person at the address | [optional] 
`phone_number` | **string** | Phone number of the address | [optional] 
`fax` | **string** | Fax number of the address | [optional] 
`email` | **string** | Email address of the address | [optional] 
`website` | **string** | Website of the address | [optional] 
`notes` | **string** | Additional notes | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 





<a name="AddressType"></a>
## Enum: Address.type


* `primary` (value: `'primary'`)

* `secondary` (value: `'secondary'`)

* `home` (value: `'home'`)

* `office` (value: `'office'`)

* `shipping` (value: `'shipping'`)

* `billing` (value: `'billing'`)

* `other` (value: `'other'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



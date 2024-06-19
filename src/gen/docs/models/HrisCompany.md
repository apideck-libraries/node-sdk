# Apideck.HrisCompany

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`legal_name` | **string** |  | 
`id` | **string** | A unique identifier for an object. | [optional] 
`display_name` | **string** |  | [optional] 
`subdomain` | **string** |  | [optional] 
`status` | **string** |  | [optional] 
`company_number` | **string** | An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`debtor_id` | **string** |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`deleted` | **boolean** |  | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="HrisCompanyStatus"></a>
## Enum: HrisCompany.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `trial` (value: `'trial'`)

* `other` (value: `'other'`)




## Referenced Types:






* [`Currency`](Currency.md)
* [`Address`](Address.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`Website`](Website.md)







* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



# Apideck.CompanyInfo

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`company_name` | **string** | The name of the company. | [optional] 
`status` | **string** | Based on the status some functionality is enabled or disabled. | [optional] 
`legal_name` | **string** | The legal name of the company | [optional] 
`country` | **string** | country code according to ISO 3166-1 alpha-2. | [optional] 
`sales_tax_number` | **string** |  | [optional] 
`automated_sales_tax` | **boolean** | Whether sales tax is calculated automatically for the company | [optional] 
`sales_tax_enabled` | **boolean** | Whether sales tax is enabled for the company | [optional] 
`default_sales_tax` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`fiscal_year_start_month` | **string** | The start month of fiscal year. | [optional] 
`company_start_date` | **Date** | Date when company file was created | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="CompanyInfoStatus"></a>
## Enum: CompanyInfo.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)




<a name="CompanyInfoFiscalYearStartMonth"></a>
## Enum: CompanyInfo.fiscal_year_start_month


* `January` (value: `'January'`)

* `February` (value: `'February'`)

* `March` (value: `'March'`)

* `April` (value: `'April'`)

* `May` (value: `'May'`)

* `June` (value: `'June'`)

* `July` (value: `'July'`)

* `August` (value: `'August'`)

* `September` (value: `'September'`)

* `October` (value: `'October'`)

* `November` (value: `'November'`)

* `December` (value: `'December'`)




## Referenced Types:








* [`LinkedTaxRate`](LinkedTaxRate.md)
* [`Currency`](Currency.md)



* [`Address`](Address.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



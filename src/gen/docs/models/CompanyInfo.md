# Apideck.CompanyInfo

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`legal_name` | **string** | The legal name of the company | [optional] 
`country` | **string** | country code according to ISO 3166-1 alpha-2. | [optional] 
`sales_tax_number` | **string** |  | [optional] 
`sales_tax_enabled` | **boolean** | Whether sales tax is enabled for the company | [optional] 
`default_sales_tax` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`fiscal_year_start_month` | **string** | The start month of fiscal year. | [optional] 
`company_start_date` | **Date** | Date when company file was created | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





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



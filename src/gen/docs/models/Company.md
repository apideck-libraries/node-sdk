# Apideck.Company

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** | Name of the company | 
`id` | **string** | Unique identifier for the company | [optional] 
`interaction_count` | **number** | Number of interactions | [optional] 
`owner_id` | **string** | Owner ID | [optional] 
`image` | **string** | The Image URL of the company | [optional] 
`description` | **string** | A description of the company | [optional] 
`vat_number` | **string** | The VAT number of the company | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`status` | **string** | The status of the company | [optional] 
`fax` | **string** | The fax number of the company | [optional] 
`annual_revenue` | **string** | The annual revenue of the company | [optional] 
`number_of_employees` | **string** | Number of employees | [optional] 
`industry` | **string** | The industry represents the type of business the company is in. | [optional] 
`ownership` | **string** | The ownership indicates the type of ownership of the company. | [optional] 
`sales_tax_number` | **string** | A sales tax number is a unique number that identifies a company for tax purposes. | [optional] 
`payee_number` | **string** | A payee number is a unique number that identifies a payee for tax purposes. | [optional] 
`abn_or_tfn` | **string** | An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia. | [optional] 
`abn_branch` | **string** | An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity. | [optional] 
`acn` | **string** | The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank. | [optional] 
`first_name` | **string** | The first name of the person. | [optional] 
`last_name` | **string** | The last name of the person. | [optional] 
`parent_id` | **string** | Parent ID | [optional] 
`bank_accounts` | [**Array&lt;BankAccount&gt;**](BankAccount.md) |  | [optional] 
`websites` | [**Array&lt;Website&gt;**](Website.md) |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`social_links` | [**Array&lt;SocialLink&gt;**](SocialLink.md) |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`row_type` | [**CompanyRowType**](CompanyRowType.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`tags` | [**Tags**](Tags.md) |  | [optional] 
`read_only` | **boolean** | Whether the company is read-only or not | [optional] 
`last_activity_at` | **Date** | Last activity date | [optional] 
`deleted` | **boolean** | Whether the company is deleted or not | [optional] 
`salutation` | **string** | A formal salutation for the person. For example, \'Mr\', \'Mrs\' | [optional] 
`birthday` | **Date** | The date of birth of the person. | [optional] 
`updated_by` | **string** | Updated by user ID | [optional] 
`created_by` | **string** | Created by user ID | [optional] 
`updated_at` | **Date** | Last updated date | [optional] 
`created_at` | **Date** | Creation date | [optional] 





## Referenced Types:







* [`Currency`](Currency.md)














* [`BankAccount`](BankAccount.md)
* [`Website`](Website.md)
* [`Address`](Address.md)
* [`SocialLink`](SocialLink.md)
* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)
* [`CompanyRowType`](CompanyRowType.md)
* [`CustomField`](CustomField.md)
* [`Tags`](Tags.md)










---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



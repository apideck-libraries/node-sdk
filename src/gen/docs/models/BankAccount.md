# Apideck.BankAccount

### Description

Card details for this payment. This field is currently not available. Reach out to our team for more info.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`bank_name` | **string** | The name of the bank associated with the bank account. | [optional] 
`transfer_type` | **string** | The type of the bank transfer. The type can be &#x60;ACH&#x60; or &#x60;UNKNOWN&#x60;. | [optional] 
`account_ownership_type` | **string** | The ownership type of the bank account performing the transfer. The type can be &#x60;INDIVIDUAL&#x60;, &#x60;COMPANY&#x60;, or &#x60;UNKNOWN&#x60;. | [optional] 
`fingerprint` | **string** | Uniquely identifies the bank account for this seller and can be used to determine if payments are from the same bank account. | [optional] 
`country` | **string** | country code according to ISO 3166-1 alpha-2. | [optional] 
`statement_description` | **string** | The statement description as sent to the bank. | [optional] 
`ach_details` | [**BankAccountAchDetails**](BankAccountAchDetails.md) |  | [optional] 





## Referenced Types:






* [`BankAccountAchDetails`](BankAccountAchDetails.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



# Apideck.Payment

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`total_amount` | **number** | The total amount of the transaction or record | 
`transaction_date` | **Date** | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD | 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`reference` | **string** | Optional transaction reference message ie: Debit remittance detail. | [optional] 
`payment_method` | **string** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
`payment_method_reference` | **string** | Optional reference message returned by payment method on processing | [optional] 
`payment_method_id` | **string** | A unique identifier for an object. | [optional] 
`accounts_receivable_account_type` | **string** | Type of accounts receivable account. | [optional] 
`accounts_receivable_account_id` | **string** | Unique identifier for the account to allocate payment to. | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`supplier` | [**DeprecatedLinkedSupplier**](DeprecatedLinkedSupplier.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`reconciled` | **boolean** | Indicates if the transaction has been reconciled. | [optional] 
`status` | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 
`type` | [**PaymentType**](PaymentType.md) |  | [optional] 
`allocations` | [**Array&lt;Allocation&gt;**](Allocation.md) |  | [optional] 
`note` | **string** | Note associated with the transaction | [optional] 
`number` | **string** | Number associated with the transaction | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`display_id` | **string** | Id to be displayed. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





## Referenced Types:




* [`Currency`](Currency.md)







* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedCustomer`](LinkedCustomer.md)
* [`DeprecatedLinkedSupplier`](DeprecatedLinkedSupplier.md)


* [`PaymentStatus`](PaymentStatus.md)
* [`PaymentType`](PaymentType.md)
* [`Allocation`](Allocation.md)


* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)
* [`CustomField`](CustomField.md)







* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



# Apideck.Payment

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | Unique identifier representing the entity | 
`total_amount` | **number** | Amount of payment | 
`transaction_date` | **Date** | Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD | 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`reference` | **string** | Optional payment reference message ie: Debit remittance detail. | [optional] 
`payment_method` | **string** | Payment method name | [optional] 
`payment_method_reference` | **string** | Optional reference message returned by payment method on processing | [optional] 
`payment_method_id` | **string** | Unique identifier for the payment method. | [optional] 
`accounts_receivable_account_type` | **string** | Type of accounts receivable account. | [optional] 
`accounts_receivable_account_id` | **string** | Unique identifier for the account to allocate payment to. | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`supplier` | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`reconciled` | **boolean** | Payment has been reconciled | [optional] 
`status` | **string** | Status of payment | [optional] 
`type` | **string** | Type of payment | [optional] 
`allocations` | [**Array&lt;Allocation&gt;**](Allocation.md) |  | [optional] 
`note` | **string** | Optional note to be associated with the payment. | [optional] 
`number` | **string** | Payment number. | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`display_id` | **string** | Payment id to be displayed. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="PaymentStatus"></a>
## Enum: Payment.status


* `authorised` (value: `'authorised'`)

* `paid` (value: `'paid'`)

* `voided` (value: `'voided'`)

* `deleted` (value: `'deleted'`)




<a name="PaymentType"></a>
## Enum: Payment.type


* `receivable` (value: `'accounts_receivable'`)

* `payable` (value: `'accounts_payable'`)

* `receivable_credit` (value: `'accounts_receivable_credit'`)

* `payable_credit` (value: `'accounts_payable_credit'`)

* `receivable_overpayment` (value: `'accounts_receivable_overpayment'`)

* `payable_overpayment` (value: `'accounts_payable_overpayment'`)

* `receivable_prepayment` (value: `'accounts_receivable_prepayment'`)

* `payable_prepayment` (value: `'accounts_payable_prepayment'`)




## Referenced Types:




* [`Currency`](Currency.md)







* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`LinkedCustomer`](LinkedCustomer.md)
* [`LinkedSupplier`](LinkedSupplier.md)




* [`Allocation`](Allocation.md)


* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)
* [`CustomField`](CustomField.md)







* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



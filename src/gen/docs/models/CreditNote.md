# Apideck.CreditNote

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | Unique identifier representing the entity | 
`total_amount` | **number** | Amount of transaction | 
`number` | **string** | Credit note number. | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`sub_total` | **number** | Sub-total amount, normally before tax. | [optional] 
`total_tax` | **number** | Total tax amount applied to this invoice. | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`balance` | **number** | The balance reflecting any payments made against the transaction. | [optional] 
`remaining_credit` | **number** | Indicates the total credit amount still available to apply towards the payment. | [optional] 
`status` | **string** | Status of credit notes | [optional] 
`reference` | **string** | Optional reference message ie: Debit remittance detail. | [optional] 
`date_issued` | **Date** | Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
`date_paid` | **Date** | Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
`type` | **string** | Type of payment | [optional] 
`account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`allocations` | **Array&lt;object&gt;** |  | [optional] 
`note` | **string** | Optional note to be associated with the credit note. | [optional] 
`terms` | **string** | Optional terms to be associated with the credit note. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="CreditNoteStatus"></a>
## Enum: CreditNote.status


* `draft` (value: `'draft'`)

* `authorised` (value: `'authorised'`)

* `paid` (value: `'paid'`)

* `voided` (value: `'voided'`)

* `deleted` (value: `'deleted'`)




<a name="CreditNoteType"></a>
## Enum: CreditNote.type


* `receivable_credit` (value: `'accounts_receivable_credit'`)

* `payable_credit` (value: `'accounts_payable_credit'`)




## Referenced Types:



* [`LinkedCustomer`](LinkedCustomer.md)

* [`Currency`](Currency.md)












* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)
* [`InvoiceLineItem`](InvoiceLineItem.md)










---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



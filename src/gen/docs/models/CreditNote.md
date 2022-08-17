# Apideck.CreditNote

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`total_amount` | **number** | Amount of transaction | 
`id` | **string** | Unique identifier representing the entity | [optional] 
`number` | **string** | Credit note number. | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`sub_total` | **number** | Sub-total amount, normally before tax. | [optional] 
`total_tax` | **number** | Total tax amount applied to this invoice. | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`balance` | **number** | The balance reflecting any payments made against the transaction. | [optional] 
`remaining_credit` | **number** | Indicates the total credit amount still available to apply towards the payment. | [optional] 
`status` | **string** | Status of payment | [optional] 
`reference` | **string** | Optional reference message ie: Debit remittance detail. | [optional] 
`date_issued` | **Date** | Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
`date_paid` | **Date** | Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD | [optional] 
`type` | **string** | Type of payment | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`allocations` | **Array&lt;object&gt;** |  | [optional] 
`note` | **string** | Optional note to be associated with the credit note. | [optional] 
`row_version` | **string** |  | [optional] 
`created_at` | **Date** |  | [optional] 
`updated_at` | **Date** |  | [optional] 





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












* [`InvoiceLineItem`](InvoiceLineItem.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



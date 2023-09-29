# Apideck.JournalEntry

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`title` | **string** | Journal entry title | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`line_items` | [**Array&lt;JournalEntryLineItem&gt;**](JournalEntryLineItem.md) | Requires a minimum of 2 line items that sum to 0 | [optional] 
`memo` | **string** | Reference for the journal entry. | [optional] 
`posted_at` | **Date** | This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated. | [optional] 
`journal_symbol` | **string** | Journal symbol of the entry. For example IND for indirect costs | [optional] 
`tax_type` | **string** | The specific category of tax associated with a transaction like sales or purchase | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`number` | **string** | Journal entry number. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 





## Referenced Types:



* [`Currency`](Currency.md)
* [`JournalEntryLineItem`](JournalEntryLineItem.md)












---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



# Apideck.Expense

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`transaction_date` | **Date** | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD | 
`account_id` | **string** | The unique identifier for the ledger account that this expense should be credited to.  | 
`line_items` | [**Array&lt;ExpenseLineItem&gt;**](ExpenseLineItem.md) | Expense line items linked to this expense. | 
`id` | **string** | A unique identifier for an object. | [optional] 
`number` | **string** | Number. | [optional] 
`customer_id` | **string** | The ID of the customer this entity is linked to. Used for expenses that should be marked as billable to customers. | [optional] 
`supplier_id` | **string** | The ID of the supplier this entity is linked to. | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`department_id` | **string** | The ID of the department this expense is linked to. | [optional] 
`payment_type` | **string** | The type of payment for the expense. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`type` | **string** | The type of expense. | [optional] 
`memo` | **string** | The memo of the expense. | [optional] 
`tax_rate` | [**LinkedTaxRate**](LinkedTaxRate.md) |  | [optional] 
`total_amount` | **number** | The total amount of the expense line item. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="ExpensePaymentType"></a>
## Enum: Expense.payment_type


* `cash` (value: `'cash'`)

* `check` (value: `'check'`)

* `credit_card` (value: `'credit_card'`)




<a name="ExpenseType"></a>
## Enum: Expense.type


* `expense` (value: `'expense'`)

* `refund` (value: `'refund'`)




## Referenced Types:


* [`ExpenseLineItem`](ExpenseLineItem.md)







* [`Currency`](Currency.md)



* [`LinkedTaxRate`](LinkedTaxRate.md)

* [`CustomField`](CustomField.md)




* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



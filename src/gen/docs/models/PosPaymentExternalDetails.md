# Apideck.PosPaymentExternalDetails

### Description

Details about an external payment.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`type` | **string** | The type of external payment the seller received. It can be one of the following: - CHECK - Paid using a physical check. - BANK_TRANSFER - Paid using external bank transfer. - OTHER\\_GIFT\\_CARD - Paid using a non-Square gift card. - CRYPTO - Paid using a crypto currency. - SQUARE_CASH - Paid using Square Cash App. - SOCIAL - Paid using peer-to-peer payment applications. - EXTERNAL - A third-party application gathered this payment outside of Square. - EMONEY - Paid using an E-money provider. - CARD - A credit or debit card that Square does not support. - STORED_BALANCE - Use for house accounts, store credit, and so forth. - FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals - OTHER - A type not listed here. | 
`source` | **string** | A description of the external payment source. For example,  \&quot;Food Delivery Service\&quot;. | 
`source_id` | **string** | An ID to associate the payment to its originating source. | [optional] 
`source_fee_amount` | **number** | The fees paid to the source. The amount minus this field is the net amount seller receives. | [optional] 





<a name="PosPaymentExternalDetailsType"></a>
## Enum: PosPaymentExternalDetails.type


* `check` (value: `'check'`)

* `bank_transfer` (value: `'bank_transfer'`)

* `other_gift_card` (value: `'other_gift_card'`)

* `crypto` (value: `'crypto'`)

* `square_cash` (value: `'square_cash'`)

* `social` (value: `'social'`)

* `external` (value: `'external'`)

* `emoney` (value: `'emoney'`)

* `card` (value: `'card'`)

* `stored_balance` (value: `'stored_balance'`)

* `food_voucher` (value: `'food_voucher'`)

* `other` (value: `'other'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)



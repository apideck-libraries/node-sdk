# Apideck.CustomerSupportCustomer

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`company_name` | **string** |  | [optional] 
`first_name` | **string** |  | [optional] 
`last_name` | **string** |  | [optional] 
`individual` | **boolean** |  | [optional] 
`addresses` | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
`notes` | **string** |  | [optional] 
`phone_numbers` | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) |  | [optional] 
`emails` | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
`tax_number` | **string** |  | [optional] 
`currency` | **string** | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | [optional] 
`bank_accounts` | [**BankAccount**](BankAccount.md) |  | [optional] 
`status` | **string** | Customer status | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="CustomerSupportCustomerCurrency"></a>
## Enum: CustomerSupportCustomer.currency


* `UNKNOWN_CURRENCY` (value: `'UNKNOWN_CURRENCY'`)

* `AED` (value: `'AED'`)

* `AFN` (value: `'AFN'`)

* `ALL` (value: `'ALL'`)

* `AMD` (value: `'AMD'`)

* `ANG` (value: `'ANG'`)

* `AOA` (value: `'AOA'`)

* `ARS` (value: `'ARS'`)

* `AUD` (value: `'AUD'`)

* `AWG` (value: `'AWG'`)

* `AZN` (value: `'AZN'`)

* `BAM` (value: `'BAM'`)

* `BBD` (value: `'BBD'`)

* `BDT` (value: `'BDT'`)

* `BGN` (value: `'BGN'`)

* `BHD` (value: `'BHD'`)

* `BIF` (value: `'BIF'`)

* `BMD` (value: `'BMD'`)

* `BND` (value: `'BND'`)

* `BOB` (value: `'BOB'`)

* `BOV` (value: `'BOV'`)

* `BRL` (value: `'BRL'`)

* `BSD` (value: `'BSD'`)

* `BTN` (value: `'BTN'`)

* `BWP` (value: `'BWP'`)

* `BYR` (value: `'BYR'`)

* `BZD` (value: `'BZD'`)

* `CAD` (value: `'CAD'`)

* `CDF` (value: `'CDF'`)

* `CHE` (value: `'CHE'`)

* `CHF` (value: `'CHF'`)

* `CHW` (value: `'CHW'`)

* `CLF` (value: `'CLF'`)

* `CLP` (value: `'CLP'`)

* `CNY` (value: `'CNY'`)

* `COP` (value: `'COP'`)

* `COU` (value: `'COU'`)

* `CRC` (value: `'CRC'`)

* `CUC` (value: `'CUC'`)

* `CUP` (value: `'CUP'`)

* `CVE` (value: `'CVE'`)

* `CZK` (value: `'CZK'`)

* `DJF` (value: `'DJF'`)

* `DKK` (value: `'DKK'`)

* `DOP` (value: `'DOP'`)

* `DZD` (value: `'DZD'`)

* `EGP` (value: `'EGP'`)

* `ERN` (value: `'ERN'`)

* `ETB` (value: `'ETB'`)

* `EUR` (value: `'EUR'`)

* `FJD` (value: `'FJD'`)

* `FKP` (value: `'FKP'`)

* `GBP` (value: `'GBP'`)

* `GEL` (value: `'GEL'`)

* `GHS` (value: `'GHS'`)

* `GIP` (value: `'GIP'`)

* `GMD` (value: `'GMD'`)

* `GNF` (value: `'GNF'`)

* `GTQ` (value: `'GTQ'`)

* `GYD` (value: `'GYD'`)

* `HKD` (value: `'HKD'`)

* `HNL` (value: `'HNL'`)

* `HRK` (value: `'HRK'`)

* `HTG` (value: `'HTG'`)

* `HUF` (value: `'HUF'`)

* `IDR` (value: `'IDR'`)

* `ILS` (value: `'ILS'`)

* `INR` (value: `'INR'`)

* `IQD` (value: `'IQD'`)

* `IRR` (value: `'IRR'`)

* `ISK` (value: `'ISK'`)

* `JMD` (value: `'JMD'`)

* `JOD` (value: `'JOD'`)

* `JPY` (value: `'JPY'`)

* `KES` (value: `'KES'`)

* `KGS` (value: `'KGS'`)

* `KHR` (value: `'KHR'`)

* `KMF` (value: `'KMF'`)

* `KPW` (value: `'KPW'`)

* `KRW` (value: `'KRW'`)

* `KWD` (value: `'KWD'`)

* `KYD` (value: `'KYD'`)

* `KZT` (value: `'KZT'`)

* `LAK` (value: `'LAK'`)

* `LBP` (value: `'LBP'`)

* `LKR` (value: `'LKR'`)

* `LRD` (value: `'LRD'`)

* `LSL` (value: `'LSL'`)

* `LTL` (value: `'LTL'`)

* `LVL` (value: `'LVL'`)

* `LYD` (value: `'LYD'`)

* `MAD` (value: `'MAD'`)

* `MDL` (value: `'MDL'`)

* `MGA` (value: `'MGA'`)

* `MKD` (value: `'MKD'`)

* `MMK` (value: `'MMK'`)

* `MNT` (value: `'MNT'`)

* `MOP` (value: `'MOP'`)

* `MRO` (value: `'MRO'`)

* `MUR` (value: `'MUR'`)

* `MVR` (value: `'MVR'`)

* `MWK` (value: `'MWK'`)

* `MXN` (value: `'MXN'`)

* `MXV` (value: `'MXV'`)

* `MYR` (value: `'MYR'`)

* `MZN` (value: `'MZN'`)

* `NAD` (value: `'NAD'`)

* `NGN` (value: `'NGN'`)

* `NIO` (value: `'NIO'`)

* `NOK` (value: `'NOK'`)

* `NPR` (value: `'NPR'`)

* `NZD` (value: `'NZD'`)

* `OMR` (value: `'OMR'`)

* `PAB` (value: `'PAB'`)

* `PEN` (value: `'PEN'`)

* `PGK` (value: `'PGK'`)

* `PHP` (value: `'PHP'`)

* `PKR` (value: `'PKR'`)

* `PLN` (value: `'PLN'`)

* `PYG` (value: `'PYG'`)

* `QAR` (value: `'QAR'`)

* `RON` (value: `'RON'`)

* `RSD` (value: `'RSD'`)

* `RUB` (value: `'RUB'`)

* `RWF` (value: `'RWF'`)

* `SAR` (value: `'SAR'`)

* `SBD` (value: `'SBD'`)

* `SCR` (value: `'SCR'`)

* `SDG` (value: `'SDG'`)

* `SEK` (value: `'SEK'`)

* `SGD` (value: `'SGD'`)

* `SHP` (value: `'SHP'`)

* `SLL` (value: `'SLL'`)

* `SOS` (value: `'SOS'`)

* `SRD` (value: `'SRD'`)

* `SSP` (value: `'SSP'`)

* `STD` (value: `'STD'`)

* `SVC` (value: `'SVC'`)

* `SYP` (value: `'SYP'`)

* `SZL` (value: `'SZL'`)

* `THB` (value: `'THB'`)

* `TJS` (value: `'TJS'`)

* `TMT` (value: `'TMT'`)

* `TND` (value: `'TND'`)

* `TOP` (value: `'TOP'`)

* `TRY` (value: `'TRY'`)

* `TTD` (value: `'TTD'`)

* `TWD` (value: `'TWD'`)

* `TZS` (value: `'TZS'`)

* `UAH` (value: `'UAH'`)

* `UGX` (value: `'UGX'`)

* `USD` (value: `'USD'`)

* `USN` (value: `'USN'`)

* `USS` (value: `'USS'`)

* `UYI` (value: `'UYI'`)

* `UYU` (value: `'UYU'`)

* `UZS` (value: `'UZS'`)

* `VEF` (value: `'VEF'`)

* `VND` (value: `'VND'`)

* `VUV` (value: `'VUV'`)

* `WST` (value: `'WST'`)

* `XAF` (value: `'XAF'`)

* `XAG` (value: `'XAG'`)

* `XAU` (value: `'XAU'`)

* `XBA` (value: `'XBA'`)

* `XBB` (value: `'XBB'`)

* `XBC` (value: `'XBC'`)

* `XBD` (value: `'XBD'`)

* `XCD` (value: `'XCD'`)

* `XDR` (value: `'XDR'`)

* `XOF` (value: `'XOF'`)

* `XPD` (value: `'XPD'`)

* `XPF` (value: `'XPF'`)

* `XPT` (value: `'XPT'`)

* `XTS` (value: `'XTS'`)

* `XXX` (value: `'XXX'`)

* `YER` (value: `'YER'`)

* `ZAR` (value: `'ZAR'`)

* `ZMK` (value: `'ZMK'`)

* `ZMW` (value: `'ZMW'`)

* `BTC` (value: `'BTC'`)




<a name="CustomerSupportCustomerStatus"></a>
## Enum: CustomerSupportCustomer.status


* `active` (value: `'active'`)

* `archived` (value: `'archived'`)

* `gdpr_erasure_request` (value: `'gdpr-erasure-request'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:





* [`Address`](Address.md)

* [`PhoneNumber`](PhoneNumber.md)
* [`Email`](Email.md)


* [`BankAccount`](BankAccount.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


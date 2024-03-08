# Apideck.Accounting

## Class Name
**AccountingApi**

## Methods

* [Get BalanceSheet](#balanceSheetOne)
* [Create Bill](#billsAdd)
* [List Bills](#billsAll)
* [Delete Bill](#billsDelete)
* [Get Bill](#billsOne)
* [Update Bill](#billsUpdate)
* [Get Company Info](#companyInfoOne)
* [Create Credit Note](#creditNotesAdd)
* [List Credit Notes](#creditNotesAll)
* [Delete Credit Note](#creditNotesDelete)
* [Get Credit Note](#creditNotesOne)
* [Update Credit Note](#creditNotesUpdate)
* [Create Customer](#customersAdd)
* [List Customers](#customersAll)
* [Delete Customer](#customersDelete)
* [Get Customer](#customersOne)
* [Update Customer](#customersUpdate)
* [Create Department](#departmentsAdd)
* [List Departments](#departmentsAll)
* [Delete Department](#departmentsDelete)
* [Get Department](#departmentsOne)
* [Update Department](#departmentsUpdate)
* [Create Invoice Item](#invoiceItemsAdd)
* [List Invoice Items](#invoiceItemsAll)
* [Delete Invoice Item](#invoiceItemsDelete)
* [Get Invoice Item](#invoiceItemsOne)
* [Update Invoice Item](#invoiceItemsUpdate)
* [Create Invoice](#invoicesAdd)
* [List Invoices](#invoicesAll)
* [Delete Invoice](#invoicesDelete)
* [Get Invoice](#invoicesOne)
* [Update Invoice](#invoicesUpdate)
* [Create Journal Entry](#journalEntriesAdd)
* [List Journal Entries](#journalEntriesAll)
* [Delete Journal Entry](#journalEntriesDelete)
* [Get Journal Entry](#journalEntriesOne)
* [Update Journal Entry](#journalEntriesUpdate)
* [Create Ledger Account](#ledgerAccountsAdd)
* [List Ledger Accounts](#ledgerAccountsAll)
* [Delete Ledger Account](#ledgerAccountsDelete)
* [Get Ledger Account](#ledgerAccountsOne)
* [Update Ledger Account](#ledgerAccountsUpdate)
* [Create Location](#locationsAdd)
* [List Locations](#locationsAll)
* [Delete Location](#locationsDelete)
* [Get Location](#locationsOne)
* [Update Location](#locationsUpdate)
* [Create Payment](#paymentsAdd)
* [List Payments](#paymentsAll)
* [Delete Payment](#paymentsDelete)
* [Get Payment](#paymentsOne)
* [Update Payment](#paymentsUpdate)
* [Get Profit And Loss](#profitAndLossOne)
* [Create Purchase Order](#purchaseOrdersAdd)
* [List Purchase Orders](#purchaseOrdersAll)
* [Delete Purchase Order](#purchaseOrdersDelete)
* [Get Purchase Order](#purchaseOrdersOne)
* [Update Purchase Order](#purchaseOrdersUpdate)
* [Create Subsidiary](#subsidiariesAdd)
* [List Subsidiaries](#subsidiariesAll)
* [Delete Subsidiary](#subsidiariesDelete)
* [Get Subsidiary](#subsidiariesOne)
* [Update Subsidiary](#subsidiariesUpdate)
* [Create Supplier](#suppliersAdd)
* [List Suppliers](#suppliersAll)
* [Delete Supplier](#suppliersDelete)
* [Get Supplier](#suppliersOne)
* [Update Supplier](#suppliersUpdate)
* [Create Tax Rate](#taxRatesAdd)
* [List Tax Rates](#taxRatesAll)
* [Delete Tax Rate](#taxRatesDelete)
* [Get Tax Rate](#taxRatesOne)
* [Update Tax Rate](#taxRatesUpdate)

<a name="balanceSheetOne"></a>
# Get BalanceSheet


Method: **balanceSheetOne**

```typescript
accountingApi.balanceSheetOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **filter** | **BalanceSheetFilter** | Apply filters | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetBalanceSheetResponse`](../models/GetBalanceSheetResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | BalanceSheet | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.balanceSheetOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="billsAdd"></a>
# Create Bill


Method: **billsAdd**

```typescript
accountingApi.billsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bill** | [Bill](../models/Bill.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateBillResponse`](../models/CreateBillResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Bill created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  bill: {
    bill_number: '10001',
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    bill_date: '2020-09-30',
    due_date: '2020-10-30',
    paid_date: '2020-10-30',
    po_number: '90000117',
    reference: '123456',
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'expense_account',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    terms: 'Net 30 days',
    balance: 27500,
    deposit: 0,
    sub_total: 27500,
    total_tax: 2500,
    total: 27500,
    tax_code: '1234',
    notes: 'Some notes about this bill.',
    status: 'draft',
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    payment_method: 'cash',
    channel: 'email',
    language: 'EN',
    accounting_by_row: false,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    discount_percentage: 5.5,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.billsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="billsAll"></a>
# List Bills


Method: **billsAll**

```typescript
accountingApi.billsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **BillsFilter** | Apply filters | (optional) 
 **sort** | **BillsSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetBillsResponse`](../models/GetBillsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Bills | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.billsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="billsDelete"></a>
# Delete Bill


Method: **billsDelete**

```typescript
accountingApi.billsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteBillResponse`](../models/DeleteBillResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Bill deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.billsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="billsOne"></a>
# Get Bill


Method: **billsOne**

```typescript
accountingApi.billsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetBillResponse`](../models/GetBillResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Bill | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.billsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="billsUpdate"></a>
# Update Bill


Method: **billsUpdate**

```typescript
accountingApi.billsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bill** | [Bill](../models/Bill.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateBillResponse`](../models/UpdateBillResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Bill Updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  bill: {
    bill_number: '10001',
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    bill_date: '2020-09-30',
    due_date: '2020-10-30',
    paid_date: '2020-10-30',
    po_number: '90000117',
    reference: '123456',
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'expense_account',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    terms: 'Net 30 days',
    balance: 27500,
    deposit: 0,
    sub_total: 27500,
    total_tax: 2500,
    total: 27500,
    tax_code: '1234',
    notes: 'Some notes about this bill.',
    status: 'draft',
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    payment_method: 'cash',
    channel: 'email',
    language: 'EN',
    accounting_by_row: false,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    discount_percentage: 5.5,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.billsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companyInfoOne"></a>
# Get Company Info


Method: **companyInfoOne**

```typescript
accountingApi.companyInfoOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCompanyInfoResponse`](../models/GetCompanyInfoResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | CompanyInfo | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.companyInfoOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="creditNotesAdd"></a>
# Create Credit Note


Method: **creditNotesAdd**

```typescript
accountingApi.creditNotesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditNote** | [CreditNote](../models/CreditNote.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateCreditNoteResponse`](../models/CreateCreditNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Credit Note created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  creditNote: {
    number: 'OIT00546',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    company_id: '12345',
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    sub_total: 27500,
    total_amount: 49.99,
    total_tax: 2500,
    tax_code: '1234',
    balance: 27500,
    remaining_credit: 27500,
    status: 'authorised',
    reference: '123456',
    date_issued: '2021-05-01T12:00:00.000Z',
    date_paid: '2021-05-01T12:00:00.000Z',
    type: 'accounts_receivable_credit',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    allocations: [
      {
        id: '123456',
        type: 'invoice',
        amount: 49.99
      }
    ],
    note: 'Some notes about this credit note',
    terms: 'Some terms about this credit note',
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.creditNotesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="creditNotesAll"></a>
# List Credit Notes


Method: **creditNotesAll**

```typescript
accountingApi.creditNotesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **CreditNotesFilter** | Apply filters | (optional) 
 **sort** | **CreditNotesSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCreditNotesResponse`](../models/GetCreditNotesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Credit Notes | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.creditNotesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="creditNotesDelete"></a>
# Delete Credit Note


Method: **creditNotesDelete**

```typescript
accountingApi.creditNotesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteCreditNoteResponse`](../models/DeleteCreditNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Credit Note deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.creditNotesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="creditNotesOne"></a>
# Get Credit Note


Method: **creditNotesOne**

```typescript
accountingApi.creditNotesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCreditNoteResponse`](../models/GetCreditNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Credit Note | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.creditNotesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="creditNotesUpdate"></a>
# Update Credit Note


Method: **creditNotesUpdate**

```typescript
accountingApi.creditNotesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditNote** | [CreditNote](../models/CreditNote.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateCreditNoteResponse`](../models/UpdateCreditNoteResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Credit Note updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  creditNote: {
    number: 'OIT00546',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    company_id: '12345',
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    sub_total: 27500,
    total_amount: 49.99,
    total_tax: 2500,
    tax_code: '1234',
    balance: 27500,
    remaining_credit: 27500,
    status: 'authorised',
    reference: '123456',
    date_issued: '2021-05-01T12:00:00.000Z',
    date_paid: '2021-05-01T12:00:00.000Z',
    type: 'accounts_receivable_credit',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    allocations: [
      {
        id: '123456',
        type: 'invoice',
        amount: 49.99
      }
    ],
    note: 'Some notes about this credit note',
    terms: 'Some terms about this credit note',
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.creditNotesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersAdd"></a>
# Create Customer


Method: **customersAdd**

```typescript
accountingApi.customersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [Customer](../models/Customer.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateCustomerResponse`](../models/CreateCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Customers | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  customer: {
    display_id: 'EMP00101',
    display_name: 'Windsurf Shop',
    company_name: 'SpaceX',
    company_id: '12345',
    title: 'CEO',
    first_name: 'Elon',
    middle_name: 'D.',
    last_name: 'Musk',
    suffix: 'Jr.',
    individual: true,
    project: false,
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
        extension: '105',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    bank_accounts: [
      {
        bank_name: 'Monzo',
        account_number: '123465',
        account_name: 'SPACEX LLC',
        account_type: 'credit_card',
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        routing_number: '012345678',
        bsb_number: '062-001',
        branch_identifier: '001',
        bank_code: 'BNH',
        currency: 'USD'
      }
    ],
    notes: 'Some notes about this customer',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    tax_number: 'US123945459',
    currency: 'USD',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    parent: {
      id: '12345',
      name: 'Windsurf Shop'
    },
    status: 'active',
    payment_method: 'cash',
    channel: 'email',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.customersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersAll"></a>
# List Customers


Method: **customersAll**

```typescript
accountingApi.customersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **CustomersFilter** | Apply filters | (optional) 
 **sort** | **CustomersSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCustomersResponse`](../models/GetCustomersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.customersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersDelete"></a>
# Delete Customer


Method: **customersDelete**

```typescript
accountingApi.customersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteCustomerResponse`](../models/DeleteCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.customersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersOne"></a>
# Get Customer


Method: **customersOne**

```typescript
accountingApi.customersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetCustomerResponse`](../models/GetCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customer | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.customersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="customersUpdate"></a>
# Update Customer


Method: **customersUpdate**

```typescript
accountingApi.customersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [Customer](../models/Customer.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateCustomerResponse`](../models/UpdateCustomerResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Customers | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  customer: {
    display_id: 'EMP00101',
    display_name: 'Windsurf Shop',
    company_name: 'SpaceX',
    company_id: '12345',
    title: 'CEO',
    first_name: 'Elon',
    middle_name: 'D.',
    last_name: 'Musk',
    suffix: 'Jr.',
    individual: true,
    project: false,
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
        extension: '105',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    bank_accounts: [
      {
        bank_name: 'Monzo',
        account_number: '123465',
        account_name: 'SPACEX LLC',
        account_type: 'credit_card',
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        routing_number: '012345678',
        bsb_number: '062-001',
        branch_identifier: '001',
        bank_code: 'BNH',
        currency: 'USD'
      }
    ],
    notes: 'Some notes about this customer',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    tax_number: 'US123945459',
    currency: 'USD',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    parent: {
      id: '12345',
      name: 'Windsurf Shop'
    },
    status: 'active',
    payment_method: 'cash',
    channel: 'email',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.customersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="departmentsAdd"></a>
# Create Department


Method: **departmentsAdd**

```typescript
accountingApi.departmentsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | [AccountingDepartment](../models/AccountingDepartment.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateAccountingDepartmentResponse`](../models/CreateAccountingDepartmentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Department | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  department: {
    parent_id: '12345',
    name: 'Sales',
    status: 'active',
    subsidiaries: [
      {
        name: 'SpaceX'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.departmentsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="departmentsAll"></a>
# List Departments


Method: **departmentsAll**

```typescript
accountingApi.departmentsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 
 **filter** | **AccountingDepartmentsFilter** | Apply filters | (optional) 



### Response Type

[`GetAccountingDepartmentsResponse`](../models/GetAccountingDepartmentsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Departments | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.departmentsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="departmentsDelete"></a>
# Delete Department


Method: **departmentsDelete**

```typescript
accountingApi.departmentsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteAccountingDepartmentResponse`](../models/DeleteAccountingDepartmentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Department deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.departmentsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="departmentsOne"></a>
# Get Department


Method: **departmentsOne**

```typescript
accountingApi.departmentsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetAccountingDepartmentResponse`](../models/GetAccountingDepartmentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Location | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.departmentsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="departmentsUpdate"></a>
# Update Department


Method: **departmentsUpdate**

```typescript
accountingApi.departmentsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | [AccountingDepartment](../models/AccountingDepartment.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateAccountingDepartmentResponse`](../models/UpdateAccountingDepartmentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Department | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  department: {
    parent_id: '12345',
    name: 'Sales',
    status: 'active',
    subsidiaries: [
      {
        name: 'SpaceX'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.departmentsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsAdd"></a>
# Create Invoice Item


Method: **invoiceItemsAdd**

```typescript
accountingApi.invoiceItemsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceItem** | [InvoiceItem](../models/InvoiceItem.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateInvoiceItemResponse`](../models/CreateInvoiceItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | InvoiceItems | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  invoiceItem: {
    name: 'Model Y',
    description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
    code: '120-C',
    sold: true,
    purchased: true,
    tracked: true,
    taxable: true,
    inventory_date: '2020-10-30',
    type: 'inventory',
    sales_details: {
      unit_price: 27500.5,
      unit_of_measure: 'pc.',
      tax_inclusive: true,
      tax_rate: {
        id: '123456',
        rate: 10
      }
    },
    purchase_details: {
      unit_price: 27500.5,
      unit_of_measure: 'pc.',
      tax_inclusive: true,
      tax_rate: {
        id: '123456',
        rate: 10
      }
    },
    quantity: 1,
    unit_price: 27500.5,
    asset_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    income_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    expense_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    tracking_category: {
      id: '123456',
      name: 'New York'
    },
    active: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoiceItemsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsAll"></a>
# List Invoice Items


Method: **invoiceItemsAll**

```typescript
accountingApi.invoiceItemsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **InvoiceItemsFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetInvoiceItemsResponse`](../models/GetInvoiceItemsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.invoiceItemsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsDelete"></a>
# Delete Invoice Item


Method: **invoiceItemsDelete**

```typescript
accountingApi.invoiceItemsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteTaxRateResponse`](../models/DeleteTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoiceItemsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsOne"></a>
# Get Invoice Item


Method: **invoiceItemsOne**

```typescript
accountingApi.invoiceItemsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetInvoiceItemResponse`](../models/GetInvoiceItemResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoiceItemsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoiceItemsUpdate"></a>
# Update Invoice Item


Method: **invoiceItemsUpdate**

```typescript
accountingApi.invoiceItemsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceItem** | [InvoiceItem](../models/InvoiceItem.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateInvoiceItemsResponse`](../models/UpdateInvoiceItemsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | InvoiceItems | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  invoiceItem: {
    name: 'Model Y',
    description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
    code: '120-C',
    sold: true,
    purchased: true,
    tracked: true,
    taxable: true,
    inventory_date: '2020-10-30',
    type: 'inventory',
    sales_details: {
      unit_price: 27500.5,
      unit_of_measure: 'pc.',
      tax_inclusive: true,
      tax_rate: {
        id: '123456',
        rate: 10
      }
    },
    purchase_details: {
      unit_price: 27500.5,
      unit_of_measure: 'pc.',
      tax_inclusive: true,
      tax_rate: {
        id: '123456',
        rate: 10
      }
    },
    quantity: 1,
    unit_price: 27500.5,
    asset_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    income_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    expense_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    tracking_category: {
      id: '123456',
      name: 'New York'
    },
    active: true,
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoiceItemsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesAdd"></a>
# Create Invoice


Method: **invoicesAdd**

```typescript
accountingApi.invoicesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [Invoice](../models/Invoice.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateInvoiceResponse`](../models/CreateInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Invoice created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  invoice: {
    type: 'service',
    number: 'OIT00546',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    company_id: '12345',
    invoice_date: '2020-09-30',
    due_date: '2020-09-30',
    terms: 'Net 30 days',
    po_number: '90000117',
    reference: '123456',
    status: 'draft',
    invoice_sent: true,
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    sub_total: 27500,
    total_tax: 2500,
    tax_code: '1234',
    discount_percentage: 5.5,
    discount_amount: 25,
    total: 27500,
    balance: 27500,
    deposit: 0,
    customer_memo: 'Thank you for your business and have a great day!',
    tracking_category: {
      id: '123456',
      name: 'New York'
    },
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    template_id: '123456',
    source_document_url: 'https://www.invoicesolution.com/invoice/123456',
    payment_method: 'cash',
    channel: 'email',
    language: 'EN',
    accounting_by_row: false,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoicesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesAll"></a>
# List Invoices


Method: **invoicesAll**

```typescript
accountingApi.invoicesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **InvoicesFilter** | Apply filters | (optional) 
 **sort** | **InvoicesSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetInvoicesResponse`](../models/GetInvoicesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoices | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.invoicesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesDelete"></a>
# Delete Invoice


Method: **invoicesDelete**

```typescript
accountingApi.invoicesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteInvoiceResponse`](../models/DeleteInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoice deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoicesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesOne"></a>
# Get Invoice


Method: **invoicesOne**

```typescript
accountingApi.invoicesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetInvoiceResponse`](../models/GetInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoice | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.invoicesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="invoicesUpdate"></a>
# Update Invoice


Method: **invoicesUpdate**

```typescript
accountingApi.invoicesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [Invoice](../models/Invoice.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateInvoiceResponse`](../models/UpdateInvoiceResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Invoice updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  invoice: {
    type: 'service',
    number: 'OIT00546',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    company_id: '12345',
    invoice_date: '2020-09-30',
    due_date: '2020-09-30',
    terms: 'Net 30 days',
    po_number: '90000117',
    reference: '123456',
    status: 'draft',
    invoice_sent: true,
    currency: 'USD',
    currency_rate: 0.69,
    tax_inclusive: true,
    sub_total: 27500,
    total_tax: 2500,
    tax_code: '1234',
    discount_percentage: 5.5,
    discount_amount: 25,
    total: 27500,
    balance: 27500,
    deposit: 0,
    customer_memo: 'Thank you for your business and have a great day!',
    tracking_category: {
      id: '123456',
      name: 'New York'
    },
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    billing_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    template_id: '123456',
    source_document_url: 'https://www.invoicesolution.com/invoice/123456',
    payment_method: 'cash',
    channel: 'email',
    language: 'EN',
    accounting_by_row: false,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.invoicesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="journalEntriesAdd"></a>
# Create Journal Entry


Method: **journalEntriesAdd**

```typescript
accountingApi.journalEntriesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **journalEntry** | [JournalEntry](../models/JournalEntry.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateJournalEntryResponse`](../models/CreateJournalEntryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | JournalEntries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  journalEntry: {
    title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
    currency_rate: 0.69,
    currency: 'USD',
    company_id: '12345',
    line_items: [
      {
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        tax_amount: 27500,
        sub_total: 27500,
        total_amount: 27500,
        type: 'debit',
        tax_rate: {
          id: '123456',
          rate: 10
        },
        tracking_category: {
          id: '123456',
          name: 'New York'
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        customer: {
          id: '12345',
          display_name: 'Windsurf Shop',
          name: 'Windsurf Shop'
        },
        supplier: {
          id: '12345',
          display_name: 'Windsurf Shop',
          address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: '40.759211',
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            notes: 'Address notes or delivery instructions.',
            row_version: '1-12345'
          }
        }
      },
      {
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        tax_amount: 27500,
        sub_total: 27500,
        total_amount: 27500,
        type: 'debit',
        tax_rate: {
          id: '123456',
          rate: 10
        },
        tracking_category: {
          id: '123456',
          name: 'New York'
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        customer: {
          id: '12345',
          display_name: 'Windsurf Shop',
          name: 'Windsurf Shop'
        },
        supplier: {
          id: '12345',
          display_name: 'Windsurf Shop',
          address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: '40.759211',
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            notes: 'Address notes or delivery instructions.',
            row_version: '1-12345'
          }
        }
      }
    ],
    memo: 'Thank you for your business and have a great day!',
    posted_at: '2020-09-30T07:43:32.000Z',
    journal_symbol: 'IND',
    tax_type: 'sales',
    tax_code: '1234',
    number: 'OIT00546',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.journalEntriesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="journalEntriesAll"></a>
# List Journal Entries


Method: **journalEntriesAll**

```typescript
accountingApi.journalEntriesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **JournalEntriesFilter** | Apply filters | (optional) 
 **sort** | **JournalEntriesSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetJournalEntriesResponse`](../models/GetJournalEntriesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | JournalEntry | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.journalEntriesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="journalEntriesDelete"></a>
# Delete Journal Entry


Method: **journalEntriesDelete**

```typescript
accountingApi.journalEntriesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteJournalEntryResponse`](../models/DeleteJournalEntryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | JournalEntries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.journalEntriesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="journalEntriesOne"></a>
# Get Journal Entry


Method: **journalEntriesOne**

```typescript
accountingApi.journalEntriesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetJournalEntryResponse`](../models/GetJournalEntryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | JournalEntries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.journalEntriesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="journalEntriesUpdate"></a>
# Update Journal Entry


Method: **journalEntriesUpdate**

```typescript
accountingApi.journalEntriesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **journalEntry** | [JournalEntry](../models/JournalEntry.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateJournalEntryResponse`](../models/UpdateJournalEntryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | JournalEntries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  journalEntry: {
    title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
    currency_rate: 0.69,
    currency: 'USD',
    company_id: '12345',
    line_items: [
      {
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        tax_amount: 27500,
        sub_total: 27500,
        total_amount: 27500,
        type: 'debit',
        tax_rate: {
          id: '123456',
          rate: 10
        },
        tracking_category: {
          id: '123456',
          name: 'New York'
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        customer: {
          id: '12345',
          display_name: 'Windsurf Shop',
          name: 'Windsurf Shop'
        },
        supplier: {
          id: '12345',
          display_name: 'Windsurf Shop',
          address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: '40.759211',
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            notes: 'Address notes or delivery instructions.',
            row_version: '1-12345'
          }
        }
      },
      {
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        tax_amount: 27500,
        sub_total: 27500,
        total_amount: 27500,
        type: 'debit',
        tax_rate: {
          id: '123456',
          rate: 10
        },
        tracking_category: {
          id: '123456',
          name: 'New York'
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        customer: {
          id: '12345',
          display_name: 'Windsurf Shop',
          name: 'Windsurf Shop'
        },
        supplier: {
          id: '12345',
          display_name: 'Windsurf Shop',
          address: {
            id: '123',
            type: 'primary',
            string: '25 Spring Street, Blackburn, VIC 3130',
            name: 'HQ US',
            line1: 'Main street',
            line2: 'apt #',
            line3: 'Suite #',
            line4: 'delivery instructions',
            street_number: '25',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
            latitude: '40.759211',
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            notes: 'Address notes or delivery instructions.',
            row_version: '1-12345'
          }
        }
      }
    ],
    memo: 'Thank you for your business and have a great day!',
    posted_at: '2020-09-30T07:43:32.000Z',
    journal_symbol: 'IND',
    tax_type: 'sales',
    tax_code: '1234',
    number: 'OIT00546',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.journalEntriesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsAdd"></a>
# Create Ledger Account


Method: **ledgerAccountsAdd**

```typescript
accountingApi.ledgerAccountsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerAccount** | [LedgerAccount](../models/LedgerAccount.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateLedgerAccountResponse`](../models/CreateLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | LedgerAccount created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  ledgerAccount: {
    display_id: '1-12345',
    nominal_code: 'N091',
    code: '453',
    classification: 'asset',
    type: 'bank',
    sub_type: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fully_qualified_name: 'Asset.Bank.Checking_Account',
    description: 'Main checking account',
    opening_balance: 75000,
    current_balance: 20000,
    currency: 'USD',
    tax_type: 'NONE',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    level: 1,
    active: true,
    status: 'active',
    header: true,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    parent_account: {
      id: '12345',
      name: 'Bank Accounts',
      display_id: '1-1100'
    },
    sub_account: false,
    last_reconciliation_date: '2020-09-30',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.ledgerAccountsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsAll"></a>
# List Ledger Accounts


Method: **ledgerAccountsAll**

```typescript
accountingApi.ledgerAccountsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **LedgerAccountsFilter** | Apply filters | (optional) 
 **sort** | **LedgerAccountsSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetLedgerAccountsResponse`](../models/GetLedgerAccountsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccounts | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.ledgerAccountsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsDelete"></a>
# Delete Ledger Account


Method: **ledgerAccountsDelete**

```typescript
accountingApi.ledgerAccountsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteLedgerAccountResponse`](../models/DeleteLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.ledgerAccountsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsOne"></a>
# Get Ledger Account


Method: **ledgerAccountsOne**

```typescript
accountingApi.ledgerAccountsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetLedgerAccountResponse`](../models/GetLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.ledgerAccountsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="ledgerAccountsUpdate"></a>
# Update Ledger Account


Method: **ledgerAccountsUpdate**

```typescript
accountingApi.ledgerAccountsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledgerAccount** | [LedgerAccount](../models/LedgerAccount.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateLedgerAccountResponse`](../models/UpdateLedgerAccountResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | LedgerAccount updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  ledgerAccount: {
    display_id: '1-12345',
    nominal_code: 'N091',
    code: '453',
    classification: 'asset',
    type: 'bank',
    sub_type: 'CHECKING_ACCOUNT',
    name: 'Bank account',
    fully_qualified_name: 'Asset.Bank.Checking_Account',
    description: 'Main checking account',
    opening_balance: 75000,
    current_balance: 20000,
    currency: 'USD',
    tax_type: 'NONE',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    level: 1,
    active: true,
    status: 'active',
    header: true,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    parent_account: {
      id: '12345',
      name: 'Bank Accounts',
      display_id: '1-1100'
    },
    sub_account: false,
    last_reconciliation_date: '2020-09-30',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.ledgerAccountsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsAdd"></a>
# Create Location


Method: **locationsAdd**

```typescript
accountingApi.locationsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [AccountingLocation](../models/AccountingLocation.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateAccountingLocationResponse`](../models/CreateAccountingLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Location | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  location: {
    parent_id: '12345',
    company_name: 'SpaceX',
    display_name: '11 UT - South Jordan',
    status: 'active',
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    subsidiaries: [
      {
        name: 'SpaceX'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.locationsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsAll"></a>
# List Locations


Method: **locationsAll**

```typescript
accountingApi.locationsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 
 **filter** | **AccountingLocationsFilter** | Apply filters | (optional) 



### Response Type

[`GetAccountingLocationsResponse`](../models/GetAccountingLocationsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Locations | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.locationsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsDelete"></a>
# Delete Location


Method: **locationsDelete**

```typescript
accountingApi.locationsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteAccountingLocationResponse`](../models/DeleteAccountingLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Location deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.locationsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsOne"></a>
# Get Location


Method: **locationsOne**

```typescript
accountingApi.locationsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetAccountingLocationResponse`](../models/GetAccountingLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Location | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.locationsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="locationsUpdate"></a>
# Update Location


Method: **locationsUpdate**

```typescript
accountingApi.locationsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [AccountingLocation](../models/AccountingLocation.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateAccountingLocationResponse`](../models/UpdateAccountingLocationResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Location | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  location: {
    parent_id: '12345',
    company_name: 'SpaceX',
    display_name: '11 UT - South Jordan',
    status: 'active',
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    subsidiaries: [
      {
        name: 'SpaceX'
      }
    ],
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.locationsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsAdd"></a>
# Create Payment


Method: **paymentsAdd**

```typescript
accountingApi.paymentsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [Payment](../models/Payment.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreatePaymentResponse`](../models/CreatePaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Payment created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  payment: {
    currency: 'USD',
    currency_rate: 0.69,
    total_amount: 49.99,
    reference: '123456',
    payment_method: 'Credit Card',
    payment_method_reference: '123456',
    payment_method_id: '123456',
    accounts_receivable_account_type: 'Account',
    accounts_receivable_account_id: '123456',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    transaction_date: '2021-05-01T12:00:00.000Z',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    reconciled: true,
    status: 'authorised',
    type: 'accounts_receivable',
    allocations: [
      {
        id: '123456',
        type: 'invoice',
        amount: 49.99
      }
    ],
    note: 'Some notes about this payment',
    number: 'Some notes about this payment',
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    row_version: '1-12345',
    display_id: '123456'
  }
}

try {
  const { data } = await apideck.accounting.paymentsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsAll"></a>
# List Payments


Method: **paymentsAll**

```typescript
accountingApi.paymentsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **PaymentsFilter** | Apply filters | (optional) 
 **sort** | **PaymentsSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetPaymentsResponse`](../models/GetPaymentsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payments | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.paymentsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsDelete"></a>
# Delete Payment


Method: **paymentsDelete**

```typescript
accountingApi.paymentsDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeletePaymentResponse`](../models/DeletePaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payment deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.paymentsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsOne"></a>
# Get Payment


Method: **paymentsOne**

```typescript
accountingApi.paymentsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetPaymentResponse`](../models/GetPaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payment | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.paymentsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="paymentsUpdate"></a>
# Update Payment


Method: **paymentsUpdate**

```typescript
accountingApi.paymentsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [Payment](../models/Payment.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdatePaymentResponse`](../models/UpdatePaymentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payment Updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  payment: {
    currency: 'USD',
    currency_rate: 0.69,
    total_amount: 49.99,
    reference: '123456',
    payment_method: 'Credit Card',
    payment_method_reference: '123456',
    payment_method_id: '123456',
    accounts_receivable_account_type: 'Account',
    accounts_receivable_account_id: '123456',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    transaction_date: '2021-05-01T12:00:00.000Z',
    customer: {
      id: '12345',
      display_name: 'Windsurf Shop',
      name: 'Windsurf Shop'
    },
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    reconciled: true,
    status: 'authorised',
    type: 'accounts_receivable',
    allocations: [
      {
        id: '123456',
        type: 'invoice',
        amount: 49.99
      }
    ],
    note: 'Some notes about this payment',
    number: 'Some notes about this payment',
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    row_version: '1-12345',
    display_id: '123456'
  }
}

try {
  const { data } = await apideck.accounting.paymentsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="profitAndLossOne"></a>
# Get Profit And Loss


Method: **profitAndLossOne**

```typescript
accountingApi.profitAndLossOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **filter** | **ProfitAndLossFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetProfitAndLossResponse`](../models/GetProfitAndLossResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Profit &amp; Loss Report | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.profitAndLossOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="purchaseOrdersAdd"></a>
# Create Purchase Order


Method: **purchaseOrdersAdd**

```typescript
accountingApi.purchaseOrdersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrder** | [PurchaseOrder](../models/PurchaseOrder.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreatePurchaseOrderResponse`](../models/CreatePurchaseOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | PurchaseOrders | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  purchaseOrder: {
    po_number: '90000117',
    reference: '123456',
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    status: 'open',
    issued_date: '2020-09-30',
    delivery_date: '2020-09-30',
    expected_arrival_date: '2020-09-30',
    currency: 'USD',
    currency_rate: 0.69,
    sub_total: 27500,
    total_tax: 2500,
    total: 27500,
    tax_inclusive: true,
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    template_id: '123456',
    discount_percentage: 5.5,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    accounting_by_row: false,
    due_date: '2020-10-30',
    payment_method: 'cash',
    tax_code: '1234',
    channel: 'email',
    memo: 'Thank you for the partnership and have a great day!',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.purchaseOrdersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="purchaseOrdersAll"></a>
# List Purchase Orders


Method: **purchaseOrdersAll**

```typescript
accountingApi.purchaseOrdersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **PurchaseOrdersFilter** | Apply filters | (optional) 
 **sort** | **PurchaseOrdersSort** | Apply sorting | (optional) 



### Response Type

[`GetPurchaseOrdersResponse`](../models/GetPurchaseOrdersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PurchaseOrders | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.purchaseOrdersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="purchaseOrdersDelete"></a>
# Delete Purchase Order


Method: **purchaseOrdersDelete**

```typescript
accountingApi.purchaseOrdersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeletePurchaseOrderResponse`](../models/DeletePurchaseOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PurchaseOrders | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.purchaseOrdersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="purchaseOrdersOne"></a>
# Get Purchase Order


Method: **purchaseOrdersOne**

```typescript
accountingApi.purchaseOrdersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`GetPurchaseOrderResponse`](../models/GetPurchaseOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PurchaseOrders | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.purchaseOrdersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="purchaseOrdersUpdate"></a>
# Update Purchase Order


Method: **purchaseOrdersUpdate**

```typescript
accountingApi.purchaseOrdersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseOrder** | [PurchaseOrder](../models/PurchaseOrder.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdatePurchaseOrderResponse`](../models/UpdatePurchaseOrderResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | PurchaseOrders | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  purchaseOrder: {
    po_number: '90000117',
    reference: '123456',
    supplier: {
      id: '12345',
      display_name: 'Windsurf Shop',
      address: {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    },
    company_id: '12345',
    status: 'open',
    issued_date: '2020-09-30',
    delivery_date: '2020-09-30',
    expected_arrival_date: '2020-09-30',
    currency: 'USD',
    currency_rate: 0.69,
    sub_total: 27500,
    total_tax: 2500,
    total: 27500,
    tax_inclusive: true,
    line_items: [
      {
        row_id: '12345',
        code: '120-C',
        line_number: 1,
        description: 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        type: 'sales_item',
        tax_amount: 27500,
        total_amount: 27500,
        quantity: 1,
        unit_price: 27500.5,
        unit_of_measure: 'pc.',
        discount_percentage: 0.01,
        discount_amount: 19.99,
        location_id: '1234',
        department_id: '1234',
        item: {
          id: '12344',
          code: '120-C',
          name: 'Model Y'
        },
        tax_rate: {
          id: '123456',
          rate: 10
        },
        ledger_account: {
          id: '123456',
          nominal_code: 'N091',
          code: '453'
        },
        row_version: '1-12345'
      }
    ],
    shipping_address: {
      id: '123',
      type: 'primary',
      string: '25 Spring Street, Blackburn, VIC 3130',
      name: 'HQ US',
      line1: 'Main street',
      line2: 'apt #',
      line3: 'Suite #',
      line4: 'delivery instructions',
      street_number: '25',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '94104',
      country: 'US',
      latitude: '40.759211',
      longitude: '-73.984638',
      county: 'Santa Clara',
      contact_name: 'Elon Musk',
      salutation: 'Mr',
      phone_number: '111-111-1111',
      fax: '122-111-1111',
      email: 'elon@musk.com',
      website: 'https://elonmusk.com',
      notes: 'Address notes or delivery instructions.',
      row_version: '1-12345'
    },
    ledger_account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    template_id: '123456',
    discount_percentage: 5.5,
    bank_account: {
      bank_name: 'Monzo',
      account_number: '123465',
      account_name: 'SPACEX LLC',
      account_type: 'credit_card',
      iban: 'CH2989144532982975332',
      bic: 'AUDSCHGGXXX',
      routing_number: '012345678',
      bsb_number: '062-001',
      branch_identifier: '001',
      bank_code: 'BNH',
      currency: 'USD'
    },
    accounting_by_row: false,
    due_date: '2020-10-30',
    payment_method: 'cash',
    tax_code: '1234',
    channel: 'email',
    memo: 'Thank you for the partnership and have a great day!',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.purchaseOrdersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="subsidiariesAdd"></a>
# Create Subsidiary


Method: **subsidiariesAdd**

```typescript
accountingApi.subsidiariesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subsidiary** | [Subsidiary](../models/Subsidiary.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateSubsidiaryResponse`](../models/CreateSubsidiaryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Subsidiaries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  subsidiary: {
    parent_id: '12345',
    name: 'SpaceX',
    status: 'active',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.subsidiariesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="subsidiariesAll"></a>
# List Subsidiaries


Method: **subsidiariesAll**

```typescript
accountingApi.subsidiariesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetSubsidiariesResponse`](../models/GetSubsidiariesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Subsidiaries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.subsidiariesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="subsidiariesDelete"></a>
# Delete Subsidiary


Method: **subsidiariesDelete**

```typescript
accountingApi.subsidiariesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteSubsidiaryResponse`](../models/DeleteSubsidiaryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Subsidiarys | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.subsidiariesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="subsidiariesOne"></a>
# Get Subsidiary


Method: **subsidiariesOne**

```typescript
accountingApi.subsidiariesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetSubsidiaryResponse`](../models/GetSubsidiaryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Subsidiary | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.subsidiariesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="subsidiariesUpdate"></a>
# Update Subsidiary


Method: **subsidiariesUpdate**

```typescript
accountingApi.subsidiariesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subsidiary** | [Subsidiary](../models/Subsidiary.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateSubsidiaryResponse`](../models/UpdateSubsidiaryResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Subsidiaries | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  subsidiary: {
    parent_id: '12345',
    name: 'SpaceX',
    status: 'active',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.subsidiariesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="suppliersAdd"></a>
# Create Supplier


Method: **suppliersAdd**

```typescript
accountingApi.suppliersAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [Supplier](../models/Supplier.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateSupplierResponse`](../models/CreateSupplierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Supplier created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  supplier: {
    display_id: 'EMP00101',
    display_name: 'Windsurf Shop',
    company_name: 'SpaceX',
    company_id: '12345',
    title: 'CEO',
    first_name: 'Elon',
    middle_name: 'D.',
    last_name: 'Musk',
    suffix: 'Jr.',
    individual: true,
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
        extension: '105',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    bank_accounts: [
      {
        bank_name: 'Monzo',
        account_number: '123465',
        account_name: 'SPACEX LLC',
        account_type: 'credit_card',
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        routing_number: '012345678',
        bsb_number: '062-001',
        branch_identifier: '001',
        bank_code: 'BNH',
        currency: 'USD'
      }
    ],
    notes: 'Some notes about this supplier',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    tax_number: 'US123945459',
    currency: 'USD',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    status: 'active',
    payment_method: 'cash',
    channel: 'email',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.suppliersAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="suppliersAll"></a>
# List Suppliers


Method: **suppliersAll**

```typescript
accountingApi.suppliersAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **SuppliersFilter** | Apply filters | (optional) 
 **sort** | **SuppliersSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetSuppliersResponse`](../models/GetSuppliersResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Suppliers | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.suppliersAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="suppliersDelete"></a>
# Delete Supplier


Method: **suppliersDelete**

```typescript
accountingApi.suppliersDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteSupplierResponse`](../models/DeleteSupplierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Supplier deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.suppliersDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="suppliersOne"></a>
# Get Supplier


Method: **suppliersOne**

```typescript
accountingApi.suppliersOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetSupplierResponse`](../models/GetSupplierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Supplier | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.suppliersOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="suppliersUpdate"></a>
# Update Supplier


Method: **suppliersUpdate**

```typescript
accountingApi.suppliersUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [Supplier](../models/Supplier.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateSupplierResponse`](../models/UpdateSupplierResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Supplier updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  supplier: {
    display_id: 'EMP00101',
    display_name: 'Windsurf Shop',
    company_name: 'SpaceX',
    company_id: '12345',
    title: 'CEO',
    first_name: 'Elon',
    middle_name: 'D.',
    last_name: 'Musk',
    suffix: 'Jr.',
    individual: true,
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        line3: 'Suite #',
        line4: 'delivery instructions',
        street_number: '25',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        county: 'Santa Clara',
        contact_name: 'Elon Musk',
        salutation: 'Mr',
        phone_number: '111-111-1111',
        fax: '122-111-1111',
        email: 'elon@musk.com',
        website: 'https://elonmusk.com',
        notes: 'Address notes or delivery instructions.',
        row_version: '1-12345'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
        extension: '105',
        type: 'primary'
      }
    ],
    emails: [
      {
        id: '123',
        email: 'elon@musk.com',
        type: 'primary'
      }
    ],
    websites: [
      {
        id: '12345',
        url: 'http://example.com',
        type: 'primary'
      }
    ],
    bank_accounts: [
      {
        bank_name: 'Monzo',
        account_number: '123465',
        account_name: 'SPACEX LLC',
        account_type: 'credit_card',
        iban: 'CH2989144532982975332',
        bic: 'AUDSCHGGXXX',
        routing_number: '012345678',
        bsb_number: '062-001',
        branch_identifier: '001',
        bank_code: 'BNH',
        currency: 'USD'
      }
    ],
    notes: 'Some notes about this supplier',
    tax_rate: {
      id: '123456',
      rate: 10
    },
    tax_number: 'US123945459',
    currency: 'USD',
    account: {
      id: '123456',
      nominal_code: 'N091',
      code: '453'
    },
    status: 'active',
    payment_method: 'cash',
    channel: 'email',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.suppliersUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesAdd"></a>
# Create Tax Rate


Method: **taxRatesAdd**

```typescript
accountingApi.taxRatesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxRate** | [TaxRate](../models/TaxRate.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateTaxRateResponse`](../models/CreateTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | TaxRate created | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  taxRate: {
    id: '1234',
    name: 'GST on Purchases',
    code: 'ABN',
    description: 'Reduced rate GST Purchases',
    effective_tax_rate: 10,
    total_tax_rate: 10,
    tax_payable_account_id: '123456',
    tax_remitted_account_id: '123456',
    components: [
      {
        id: '10',
        name: 'GST',
        rate: 10,
        compound: true
      }
    ],
    type: 'NONE',
    report_tax_type: 'NONE',
    original_tax_rate_id: '12345',
    status: 'active',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.taxRatesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesAll"></a>
# List Tax Rates


Method: **taxRatesAll**

```typescript
accountingApi.taxRatesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **TaxRatesFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetTaxRatesResponse`](../models/GetTaxRatesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {}

try {
  const { data } = await apideck.accounting.taxRatesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesDelete"></a>
# Delete Tax Rate


Method: **taxRatesDelete**

```typescript
accountingApi.taxRatesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`DeleteTaxRateResponse`](../models/DeleteTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRates deleted | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.taxRatesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesOne"></a>
# Get Tax Rate


Method: **taxRatesOne**

```typescript
accountingApi.taxRatesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetTaxRateResponse`](../models/GetTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRate | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.accounting.taxRatesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="taxRatesUpdate"></a>
# Update Tax Rate


Method: **taxRatesUpdate**

```typescript
accountingApi.taxRatesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxRate** | [TaxRate](../models/TaxRate.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateTaxRateResponse`](../models/UpdateTaxRateResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TaxRate updated | 
**400** | Bad Request | 
**401** | Unauthorized | 
**402** | Payment Required | 
**404** | The specified resource was not found | 
**422** | Unprocessable | 
4/5xx | Unexpected error | 


## Example Usage

```typescript
import { Apideck } from '@apideck/node';

const apideck = new Apideck({
  apiKey: 'REPLACE_WITH_API_KEY',
  appId: 'REPLACE_WITH_APP_ID',
  consumerId: 'REPLACE_WITH_CONSUMER_ID'
});

const params = {
  id: 'id_example',
  taxRate: {
    id: '1234',
    name: 'GST on Purchases',
    code: 'ABN',
    description: 'Reduced rate GST Purchases',
    effective_tax_rate: 10,
    total_tax_rate: 10,
    tax_payable_account_id: '123456',
    tax_remitted_account_id: '123456',
    components: [
      {
        id: '10',
        name: 'GST',
        rate: 10,
        compound: true
      }
    ],
    type: 'NONE',
    report_tax_type: 'NONE',
    original_tax_rate_id: '12345',
    status: 'active',
    row_version: '1-12345'
  }
}

try {
  const { data } = await apideck.accounting.taxRatesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


# Apideck.Hris

## Class Name
**HrisApi**

## Methods

* [Create Employee](#employeesAdd)
* [List Employees](#employeesAll)
* [Delete Employee](#employeesDelete)
* [Get Employee](#employeesOne)
* [Update Employee](#employeesUpdate)

<a name="employeesAdd"></a>
# Create Employee


Method: **employeesAdd**

```typescript
hrisApi.employeesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [Employee](../models/Employee.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateEmployeeResponse`](../models/CreateEmployeeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Employees | 
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
  employee: {
    first_name: 'Elon',
    last_name: 'Musk',
    middle_name: 'D.',
    title: 'CEO',
    division: 'Europe',
    department: 'R&amp;D',
    company_id: '23456',
    company_name: 'SpaceX',
    employee_number: '123456-AB',
    employment_status: 'active',
    manager_id: '23456',
    social_security_number: '123456789',
    birthday: '2000-08-12',
    description: 'A description',
    gender: 'male',
    language: 'EN',
    jobs: [
      {
        title: 'CEO',
        compensation_rate: 'year',
        hired_at: '2020-08-12',
        is_primary: true,
        payment_unit: 'year',
        location: {
          id: '123',
          type: 'primary',
          string: '25 Spring Street, Blackburn, VIC 3130',
          name: 'HQ US',
          line1: 'Main street',
          line2: 'apt #',
          city: 'San Francisco',
          state: 'CA',
          postal_code: '94104',
          country: 'US',
          latitude: '40.759211',
          longitude: '-73.984638',
          contact_name: '111-111-1111',
          salutation: '111-111-1111',
          phone_number: '111-111-1111',
          fax: '111-111-1111',
          email: '111-111-1111',
          website: '111-111-1111'
        },
        compensations: [
          {
            id: '3404301363494309004',
            job_id: '3490439050957906679',
            rate: '50.00',
            payment_unit: 'hour',
            flsa_status: 'nonexempt',
            effective_date: '2021-06-11'
          }
        ]
      }
    ],
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        contact_name: '111-111-1111',
        salutation: '111-111-1111',
        phone_number: '111-111-1111',
        fax: '111-111-1111',
        email: '111-111-1111',
        website: '111-111-1111'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
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
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ]
  }
}

try {
  const { data } = await apideck.hris.employeesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeesAll"></a>
# List Employees


Method: **employeesAll**

```typescript
hrisApi.employeesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of records to return | (optional) defaults to 20



### Response Type

[`GetEmployeesResponse`](../models/GetEmployeesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Employees | 
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
  const { data } = await apideck.hris.employeesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeesDelete"></a>
# Delete Employee


Method: **employeesDelete**

```typescript
hrisApi.employeesDelete(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`DeleteEmployeeResponse`](../models/DeleteEmployeeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Employees | 
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
  const { data } = await apideck.hris.employeesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeesOne"></a>
# Get Employee


Method: **employeesOne**

```typescript
hrisApi.employeesOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`GetEmployeeResponse`](../models/GetEmployeeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Employees | 
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
  const { data } = await apideck.hris.employeesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeesUpdate"></a>
# Update Employee


Method: **employeesUpdate**

```typescript
hrisApi.employeesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [Employee](../models/Employee.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateEmployeeResponse`](../models/UpdateEmployeeResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Employees | 
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
  employee: {
    first_name: 'Elon',
    last_name: 'Musk',
    middle_name: 'D.',
    title: 'CEO',
    division: 'Europe',
    department: 'R&amp;D',
    company_id: '23456',
    company_name: 'SpaceX',
    employee_number: '123456-AB',
    employment_status: 'active',
    manager_id: '23456',
    social_security_number: '123456789',
    birthday: '2000-08-12',
    description: 'A description',
    gender: 'male',
    language: 'EN',
    jobs: [
      {
        title: 'CEO',
        compensation_rate: 'year',
        hired_at: '2020-08-12',
        is_primary: true,
        payment_unit: 'year',
        location: {
          id: '123',
          type: 'primary',
          string: '25 Spring Street, Blackburn, VIC 3130',
          name: 'HQ US',
          line1: 'Main street',
          line2: 'apt #',
          city: 'San Francisco',
          state: 'CA',
          postal_code: '94104',
          country: 'US',
          latitude: '40.759211',
          longitude: '-73.984638',
          contact_name: '111-111-1111',
          salutation: '111-111-1111',
          phone_number: '111-111-1111',
          fax: '111-111-1111',
          email: '111-111-1111',
          website: '111-111-1111'
        },
        compensations: [
          {
            id: '3404301363494309004',
            job_id: '3490439050957906679',
            rate: '50.00',
            payment_unit: 'hour',
            flsa_status: 'nonexempt',
            effective_date: '2021-06-11'
          }
        ]
      }
    ],
    addresses: [
      {
        id: '123',
        type: 'primary',
        string: '25 Spring Street, Blackburn, VIC 3130',
        name: 'HQ US',
        line1: 'Main street',
        line2: 'apt #',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94104',
        country: 'US',
        latitude: '40.759211',
        longitude: '-73.984638',
        contact_name: '111-111-1111',
        salutation: '111-111-1111',
        phone_number: '111-111-1111',
        fax: '111-111-1111',
        email: '111-111-1111',
        website: '111-111-1111'
      }
    ],
    phone_numbers: [
      {
        id: '12345',
        country_code: '1',
        area_code: '323',
        number: '111-111-1111',
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
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ]
  }
}

try {
  const { data } = await apideck.hris.employeesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

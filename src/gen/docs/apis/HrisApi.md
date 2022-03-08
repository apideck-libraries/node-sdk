# Apideck.Hris

## Class Name
**HrisApi**

## Methods

* [Create Company](#companiesAdd)
* [List Companies](#companiesAll)
* [Delete Company](#companiesDelete)
* [Get Company](#companiesOne)
* [Update Company](#companiesUpdate)
* [Create Employee](#employeesAdd)
* [List Employees](#employeesAll)
* [Delete Employee](#employeesDelete)
* [Get Employee](#employeesOne)
* [Update Employee](#employeesUpdate)

<a name="companiesAdd"></a>
# Create Company


Method: **companiesAdd**

```typescript
hrisApi.companiesAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [HrisCompany](../models/HrisCompany.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateHrisCompanyResponse`](../models/CreateHrisCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Companies | 
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
  company: {
    legal_name: 'SpaceX',
    display_name: 'SpaceX',
    subdomain: 'company',
    company_number: '123456-AB',
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
    debtor_id: '12345'
  }
}

try {
  const { data } = await apideck.hris.companiesAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesAll"></a>
# List Companies


Method: **companiesAll**

```typescript
hrisApi.companiesAll(body)
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

[`GetHrisCompaniesResponse`](../models/GetHrisCompaniesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Company | 
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
  const { data } = await apideck.hris.companiesAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesDelete"></a>
# Delete Company


Method: **companiesDelete**

```typescript
hrisApi.companiesDelete(body)
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

[`DeleteHrisCompanyResponse`](../models/DeleteHrisCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
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
  const { data } = await apideck.hris.companiesDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesOne"></a>
# Get Company


Method: **companiesOne**

```typescript
hrisApi.companiesOne(body)
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

[`GetHrisCompanyResponse`](../models/GetHrisCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
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
  const { data } = await apideck.hris.companiesOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="companiesUpdate"></a>
# Update Company


Method: **companiesUpdate**

```typescript
hrisApi.companiesUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [HrisCompany](../models/HrisCompany.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to true



### Response Type

[`UpdateHrisCompanyResponse`](../models/UpdateHrisCompanyResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Companies | 
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
  company: {
    legal_name: 'SpaceX',
    display_name: 'SpaceX',
    subdomain: 'company',
    company_number: '123456-AB',
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
    debtor_id: '12345'
  }
}

try {
  const { data } = await apideck.hris.companiesUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

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
    display_name: 'Technoking',
    preferred_name: 'Elon Musk',
    initials: 'EM',
    salutation: 'Mr',
    title: 'CEO',
    marital_status: 'married',
    division: 'Europe',
    department: 'R&amp;D',
    team: {
      id: '1234',
      name: 'Full Stack Engineers'
    },
    company_id: '23456',
    company_name: 'SpaceX',
    employment_start_date: '2021-10-26',
    employment_end_date: '2028-10-26',
    employee_number: '123456-AB',
    employment_status: 'active',
    employment_role: {
      type: 'contractor',
      sub_type: 'full_time'
    },
    manager: {
      name: 'Elon Musk',
      first_name: 'Elon',
      last_name: 'Musk',
      email: 'elon@musk.com'
    },
    social_security_number: '123456789',
    birthday: '2000-08-12',
    country_of_birth: 'US',
    description: 'A description',
    gender: 'male',
    pronouns: 'she,her',
    preferred_language: 'EN',
    languages: [
      'EN'
    ],
    nationalities: [
      'US'
    ],
    photo_url: 'https://unavatar.io/elon-musk',
    jobs: [
      {
        title: 'CEO',
        compensation_rate: '72000',
        payment_unit: 'year',
        hired_at: '2020-08-12',
        is_primary: true,
        location: {
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
          row_version: '1-12345'
        }
      }
    ],
    compensations: [
      {
        id: '3404301363494309004',
        job_id: '3490439050957906679',
        rate: '50.00',
        payment_unit: 'hour',
        flsa_status: 'nonexempt',
        effective_date: '2021-06-11'
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
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    social_links: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck-io',
        type: 'twitter'
      }
    ],
    row_version: '1-12345',
    deleted: true
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
 **filter** | **EmployeesFilter** | Apply filters (beta) | (optional) 



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
    display_name: 'Technoking',
    preferred_name: 'Elon Musk',
    initials: 'EM',
    salutation: 'Mr',
    title: 'CEO',
    marital_status: 'married',
    division: 'Europe',
    department: 'R&amp;D',
    team: {
      id: '1234',
      name: 'Full Stack Engineers'
    },
    company_id: '23456',
    company_name: 'SpaceX',
    employment_start_date: '2021-10-26',
    employment_end_date: '2028-10-26',
    employee_number: '123456-AB',
    employment_status: 'active',
    employment_role: {
      type: 'contractor',
      sub_type: 'full_time'
    },
    manager: {
      name: 'Elon Musk',
      first_name: 'Elon',
      last_name: 'Musk',
      email: 'elon@musk.com'
    },
    social_security_number: '123456789',
    birthday: '2000-08-12',
    country_of_birth: 'US',
    description: 'A description',
    gender: 'male',
    pronouns: 'she,her',
    preferred_language: 'EN',
    languages: [
      'EN'
    ],
    nationalities: [
      'US'
    ],
    photo_url: 'https://unavatar.io/elon-musk',
    jobs: [
      {
        title: 'CEO',
        compensation_rate: '72000',
        payment_unit: 'year',
        hired_at: '2020-08-12',
        is_primary: true,
        location: {
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
          row_version: '1-12345'
        }
      }
    ],
    compensations: [
      {
        id: '3404301363494309004',
        job_id: '3490439050957906679',
        rate: '50.00',
        payment_unit: 'hour',
        flsa_status: 'nonexempt',
        effective_date: '2021-06-11'
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
    custom_fields: [
      {
        id: '2389328923893298',
        name: 'employee_level',
        description: 'Employee Level',
        value: 'Uses Salesforce and Marketo'
      }
    ],
    social_links: [
      {
        id: '12345',
        url: 'https://www.twitter.com/apideck-io',
        type: 'twitter'
      }
    ],
    row_version: '1-12345',
    deleted: true
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


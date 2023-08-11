# Apideck.Hris

## Class Name
**HrisApi**

## Methods

* [Create Company](#companiesAdd)
* [List Companies](#companiesAll)
* [Delete Company](#companiesDelete)
* [Get Company](#companiesOne)
* [Update Company](#companiesUpdate)
* [Create Department](#departmentsAdd)
* [List Departments](#departmentsAll)
* [Delete Department](#departmentsDelete)
* [Get Department](#departmentsOne)
* [Update Department](#departmentsUpdate)
* [List Employee Payrolls](#employeePayrollsAll)
* [Get Employee Payroll](#employeePayrollsOne)
* [List Employee Schedules](#employeeSchedulesAll)
* [Create Employee](#employeesAdd)
* [List Employees](#employeesAll)
* [Delete Employee](#employeesDelete)
* [Get Employee](#employeesOne)
* [Update Employee](#employeesUpdate)
* [List Payroll](#payrollsAll)
* [Get Payroll](#payrollsOne)
* [Create Time Off Request](#timeOffRequestsAdd)
* [List Time Off Requests](#timeOffRequestsAll)
* [Delete Time Off Request](#timeOffRequestsDelete)
* [Get Time Off Request](#timeOffRequestsOne)
* [Update Time Off Request](#timeOffRequestsUpdate)

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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
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
    status: 'active',
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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetHrisCompaniesResponse`](../models/GetHrisCompaniesResponse.md)



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetHrisCompanyResponse`](../models/GetHrisCompanyResponse.md)



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



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
    status: 'active',
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

<a name="departmentsAdd"></a>
# Create Department


Method: **departmentsAdd**

```typescript
hrisApi.departmentsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | [Department](../models/Department.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateDepartmentResponse`](../models/CreateDepartmentResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | Departments | 
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
    name: 'R&amp;D',
    code: '2',
    description: 'R&amp;D'
  }
}

try {
  const { data } = await apideck.hris.departmentsAdd(params)
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
hrisApi.departmentsAll(body)
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
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetDepartmentsResponse`](../models/GetDepartmentsResponse.md)



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
  const { data } = await apideck.hris.departmentsAll(params)
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
hrisApi.departmentsDelete(body)
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

[`DeleteDepartmentResponse`](../models/DeleteDepartmentResponse.md)



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

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.hris.departmentsDelete(params)
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
hrisApi.departmentsOne(body)
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

[`GetDepartmentResponse`](../models/GetDepartmentResponse.md)



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

const params = {
  id: 'id_example'
}

try {
  const { data } = await apideck.hris.departmentsOne(params)
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
hrisApi.departmentsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **department** | [Department](../models/Department.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateDepartmentResponse`](../models/UpdateDepartmentResponse.md)



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

const params = {
  id: 'id_example',
  department: {
    name: 'R&amp;D',
    code: '2',
    description: 'R&amp;D'
  }
}

try {
  const { data } = await apideck.hris.departmentsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeePayrollsAll"></a>
# List Employee Payrolls


Method: **employeePayrollsAll**

```typescript
hrisApi.employeePayrollsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | [**string**] | ID of the employee you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **filter** | **PayrollsFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetEmployeePayrollsResponse`](../models/GetEmployeePayrollsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | EmployeePayrolls | 
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
  employeeId: 'employee_id_example'
}

try {
  const { data } = await apideck.hris.employeePayrollsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeePayrollsOne"></a>
# Get Employee Payroll


Method: **employeePayrollsOne**

```typescript
hrisApi.employeePayrollsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payrollId** | [**string**] | ID of the payroll you are acting upon. | 
 **employeeId** | [**string**] | ID of the employee you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetEmployeePayrollResponse`](../models/GetEmployeePayrollResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payrolls | 
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
  payrollId: 'payroll_id_example',
  employeeId: 'employee_id_example'
}

try {
  const { data } = await apideck.hris.employeePayrollsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="employeeSchedulesAll"></a>
# List Employee Schedules


Method: **employeeSchedulesAll**

```typescript
hrisApi.employeeSchedulesAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | [**string**] | ID of the employee you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetEmployeeSchedulesResponse`](../models/GetEmployeeSchedulesResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | EmployeeSchedules | 
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
  employeeId: 'employee_id_example'
}

try {
  const { data } = await apideck.hris.employeeSchedulesAll(params)
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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
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
    partner: {
      first_name: 'Elon',
      last_name: 'Musk',
      middle_name: 'D.',
      gender: 'male',
      initials: 'EM',
      birthday: '2000-08-12',
      deceased_on: '2000-08-12'
    },
    division: 'Europe',
    division_id: '12345',
    department: 'R&amp;D',
    department_id: '12345',
    department_name: '12345',
    team: {
      id: '1234',
      name: 'Full Stack Engineers'
    },
    company_id: '23456',
    company_name: 'SpaceX',
    employment_start_date: '2021-10-26',
    employment_end_date: '2028-10-26',
    leaving_reason: 'resigned',
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
      email: 'elon@musk.com',
      employment_status: 'active'
    },
    direct_reports: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    social_security_number: '123456789',
    birthday: '2000-08-12',
    deceased_on: '2000-08-12',
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
    timezone: 'Europe/London',
    source: 'lever',
    source_id: '12345',
    record_url: 'https://app.intercom.io/contacts/12345',
    jobs: [
      {
        title: 'CEO',
        role: 'Sales',
        start_date: '2020-08-12',
        end_date: '2020-08-12',
        compensation_rate: 72000,
        currency: 'USD',
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
          notes: 'Address notes or delivery instructions.',
          row_version: '1-12345'
        }
      }
    ],
    compensations: [
      {
        id: '3404301363494309004',
        job_id: '3490439050957906679',
        rate: 50,
        payment_unit: 'hour',
        flsa_status: 'nonexempt',
        effective_date: '2021-06-11'
      }
    ],
    works_remote: true,
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
        url: 'https://www.twitter.com/apideck',
        type: 'twitter'
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
    tax_code: '1111',
    tax_id: '234-32-0000',
    dietary_preference: 'Veggie',
    food_allergies: [
      'No allergies'
    ],
    probation_period: {
      start_date: '2021-10-01',
      end_date: '2021-11-28'
    },
    tags: [
      'New'
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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **cursor** | [**string**] | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | (optional) 
 **limit** | [**number**] | Number of results to return. Minimum 1, Maximum 200, Default 20 | (optional) defaults to 20
 **filter** | **EmployeesFilter** | Apply filters | (optional) 
 **sort** | **EmployeesSort** | Apply sorting | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



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
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



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
    partner: {
      first_name: 'Elon',
      last_name: 'Musk',
      middle_name: 'D.',
      gender: 'male',
      initials: 'EM',
      birthday: '2000-08-12',
      deceased_on: '2000-08-12'
    },
    division: 'Europe',
    division_id: '12345',
    department: 'R&amp;D',
    department_id: '12345',
    department_name: '12345',
    team: {
      id: '1234',
      name: 'Full Stack Engineers'
    },
    company_id: '23456',
    company_name: 'SpaceX',
    employment_start_date: '2021-10-26',
    employment_end_date: '2028-10-26',
    leaving_reason: 'resigned',
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
      email: 'elon@musk.com',
      employment_status: 'active'
    },
    direct_reports: [
      'a0d636c6-43b3-4bde-8c70-85b707d992f4',
      'a98lfd96-43b3-4bde-8c70-85b707d992e6'
    ],
    social_security_number: '123456789',
    birthday: '2000-08-12',
    deceased_on: '2000-08-12',
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
    timezone: 'Europe/London',
    source: 'lever',
    source_id: '12345',
    record_url: 'https://app.intercom.io/contacts/12345',
    jobs: [
      {
        title: 'CEO',
        role: 'Sales',
        start_date: '2020-08-12',
        end_date: '2020-08-12',
        compensation_rate: 72000,
        currency: 'USD',
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
          notes: 'Address notes or delivery instructions.',
          row_version: '1-12345'
        }
      }
    ],
    compensations: [
      {
        id: '3404301363494309004',
        job_id: '3490439050957906679',
        rate: 50,
        payment_unit: 'hour',
        flsa_status: 'nonexempt',
        effective_date: '2021-06-11'
      }
    ],
    works_remote: true,
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
        url: 'https://www.twitter.com/apideck',
        type: 'twitter'
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
    tax_code: '1111',
    tax_id: '234-32-0000',
    dietary_preference: 'Veggie',
    food_allergies: [
      'No allergies'
    ],
    probation_period: {
      start_date: '2021-10-01',
      end_date: '2021-11-28'
    },
    tags: [
      'New'
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

<a name="payrollsAll"></a>
# List Payroll


Method: **payrollsAll**

```typescript
hrisApi.payrollsAll(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **filter** | **PayrollsFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetPayrollsResponse`](../models/GetPayrollsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payrolls | 
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
  const { data } = await apideck.hris.payrollsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="payrollsOne"></a>
# Get Payroll


Method: **payrollsOne**

```typescript
hrisApi.payrollsOne(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payrollId** | [**string**] | ID of the payroll you are acting upon. | 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetPayrollResponse`](../models/GetPayrollResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | Payrolls | 
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
  payrollId: 'payroll_id_example'
}

try {
  const { data } = await apideck.hris.payrollsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="timeOffRequestsAdd"></a>
# Create Time Off Request


Method: **timeOffRequestsAdd**

```typescript
hrisApi.timeOffRequestsAdd(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeOffRequest** | [TimeOffRequest](../models/TimeOffRequest.md)|  |
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 



### Response Type

[`CreateTimeOffRequestResponse`](../models/CreateTimeOffRequestResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**201** | TimeOffRequests | 
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
  timeOffRequest: {
    employee_id: '12345',
    policy_id: '12345',
    status: 'approved',
    description: 'Enjoying some sun.',
    start_date: '2022-04-01',
    end_date: '2022-04-01',
    request_date: '2022-03-21',
    request_type: 'vacation',
    approval_date: '2022-03-21',
    units: 'hours',
    amount: 3.5,
    notes: {
      employee: 'Relaxing on the beach for a few hours.',
      manager: 'Enjoy!'
    }
  }
}

try {
  const { data } = await apideck.hris.timeOffRequestsAdd(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="timeOffRequestsAll"></a>
# List Time Off Requests


Method: **timeOffRequestsAll**

```typescript
hrisApi.timeOffRequestsAll(body)
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
 **filter** | **TimeOffRequestsFilter** | Apply filters | (optional) 
 **passThrough** | **PassThroughQuery** | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | (optional) 
 **fields** | [**string**] | The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: &#x60;fields=name,email,addresses.city&#x60;<br /><br />In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | (optional) 



### Response Type

[`GetTimeOffRequestsResponse`](../models/GetTimeOffRequestsResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TimeOffRequests | 
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
  const { data } = await apideck.hris.timeOffRequestsAll(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="timeOffRequestsDelete"></a>
# Delete Time Off Request


Method: **timeOffRequestsDelete**

```typescript
hrisApi.timeOffRequestsDelete(body)
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

[`DeleteTimeOffRequestResponse`](../models/DeleteTimeOffRequestResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TimeOffRequests | 
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
  const { data } = await apideck.hris.timeOffRequestsDelete(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="timeOffRequestsOne"></a>
# Get Time Off Request


Method: **timeOffRequestsOne**

```typescript
hrisApi.timeOffRequestsOne(body)
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

[`GetTimeOffRequestResponse`](../models/GetTimeOffRequestResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TimeOffRequests | 
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
  const { data } = await apideck.hris.timeOffRequestsOne(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)

<a name="timeOffRequestsUpdate"></a>
# Update Time Off Request


Method: **timeOffRequestsUpdate**

```typescript
hrisApi.timeOffRequestsUpdate(body)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeOffRequest** | [TimeOffRequest](../models/TimeOffRequest.md)|  |
 **id** | [**string**] | ID of the record you are acting upon. | 
 **consumerId** | [**string**] | ID of the consumer which you want to get or push data from | (optional) 
 **appId** | [**string**] | The ID of your Unify application | (optional) 
 **serviceId** | [**string**] | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | (optional) 
 **raw** | [**boolean**] | Include raw response. Mostly used for debugging purposes | (optional) defaults to false



### Response Type

[`UpdateTimeOffRequestResponse`](../models/UpdateTimeOffRequestResponse.md)



### HTTP response details
| Status code | Description |
|-------------|-------------|
**200** | TimeOffRequests | 
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
  timeOffRequest: {
    employee_id: '12345',
    policy_id: '12345',
    status: 'approved',
    description: 'Enjoying some sun.',
    start_date: '2022-04-01',
    end_date: '2022-04-01',
    request_date: '2022-03-21',
    request_type: 'vacation',
    approval_date: '2022-03-21',
    units: 'hours',
    amount: 3.5,
    notes: {
      employee: 'Relaxing on the beach for a few hours.',
      manager: 'Enjoy!'
    }
  }
}

try {
  const { data } = await apideck.hris.timeOffRequestsUpdate(params)
  console.log('API called successfully', data)
} catch (error) {
  console.error(error)
  return error.json()
}


```


[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


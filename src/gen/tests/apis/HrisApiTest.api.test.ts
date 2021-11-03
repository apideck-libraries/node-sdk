import fetch from 'node-fetch'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch')

jest.mock('node-fetch', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('HrisApi', () => {
  describe('#employeesAdd', () => {
    const endpoint = '/hris/employees'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'gusto',
        resource: 'Employees',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
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
      } as any
      const current = await hris.employeesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeesAll', () => {
    const endpoint = '/hris/employees'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'gusto',
        resource: 'Employees',
        operation: 'one',
        data: [
          {
            id: '12345',
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
                id: '12345',
                employee_id: '12345',
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
                compensations: [[Object]]
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
            ],
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          }
        ],
        meta: {
          items_on_page: 50,
          cursors: {
            previous: 'em9oby1jcm06OnBhZ2U6OjE=',
            current: 'em9oby1jcm06OnBhZ2U6OjI=',
            next: 'em9oby1jcm06OnBhZ2U6OjM='
          }
        },
        links: {
          previous: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
          current: 'https://unify.apideck.com/crm/companies',
          next: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {} as any
      const current = await hris.employeesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeesDelete', () => {
    const endpoint = '/hris/employees/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'gusto',
        resource: 'Employees',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await hris.employeesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeesOne', () => {
    const endpoint = '/hris/employees/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'gusto',
        resource: 'Employees',
        operation: 'one',
        data: {
          id: '12345',
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
              id: '12345',
              employee_id: '12345',
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
          ],
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await hris.employeesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeesUpdate', () => {
    const endpoint = '/hris/employees/{id}'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID'
    }
    const apideck = new Apideck({ ...config, basePath: basePath })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should call Apideck with expected params', async () => {
      const mockedResponse: Record<string, unknown> = {
        status_code: 200,
        status: 'OK',
        service: 'gusto',
        resource: 'Employees',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
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
      } as any
      const current = await hris.employeesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

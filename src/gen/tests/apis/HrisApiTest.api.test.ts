import fetch from 'node-fetch-commonjs'
import { Apideck } from '../../../'
const { Response } = jest.requireActual('node-fetch-commonjs')

jest.mock('node-fetch-commonjs', () => jest.fn())

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('HrisApi', () => {
  describe('#companiesAdd', () => {
    const endpoint = '/hris/companies'

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
        service: 'undefined',
        resource: 'Companies',
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
      } as any
      const current = await hris.companiesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesAll', () => {
    const endpoint = '/hris/companies'

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
        service: 'undefined',
        resource: 'Companies',
        operation: 'one',
        data: [
          {
            id: '12345',
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
            debtor_id: '12345',
            deleted: false,
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
      const current = await hris.companiesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesDelete', () => {
    const endpoint = '/hris/companies/{id}'

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
        service: 'undefined',
        resource: 'Companies',
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
      const current = await hris.companiesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesOne', () => {
    const endpoint = '/hris/companies/{id}'

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
        service: 'undefined',
        resource: 'Companies',
        operation: 'one',
        data: {
          id: '12345',
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
          debtor_id: '12345',
          deleted: false,
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
      const current = await hris.companiesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companiesUpdate', () => {
    const endpoint = '/hris/companies/{id}'

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
        service: 'undefined',
        resource: 'Companies',
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
      } as any
      const current = await hris.companiesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsAdd', () => {
    const endpoint = '/hris/departments'

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
        service: 'workday',
        resource: 'Departments',
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
        department: {
          name: 'R&amp;D',
          code: '2',
          description: 'R&amp;D'
        }
      } as any
      const current = await hris.departmentsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsAll', () => {
    const endpoint = '/hris/departments'

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
        service: 'workday',
        resource: 'Departments',
        operation: 'one',
        data: [
          {
            id: '12345',
            name: 'R&amp;D',
            code: '2',
            description: 'R&amp;D',
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
      const current = await hris.departmentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsDelete', () => {
    const endpoint = '/hris/departments/{id}'

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
        service: 'workday',
        resource: 'Departments',
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
      const current = await hris.departmentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsOne', () => {
    const endpoint = '/hris/departments/{id}'

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
        service: 'workday',
        resource: 'Departments',
        operation: 'one',
        data: {
          id: '12345',
          name: 'R&amp;D',
          code: '2',
          description: 'R&amp;D',
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
      const current = await hris.departmentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsUpdate', () => {
    const endpoint = '/hris/departments/{id}'

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
        service: 'workday',
        resource: 'Departments',
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
        department: {
          name: 'R&amp;D',
          code: '2',
          description: 'R&amp;D'
        }
      } as any
      const current = await hris.departmentsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

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
        service: 'sage-hr',
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
          languages: ['EN'],
          nationalities: ['US'],
          photo_url: 'https://unavatar.io/elon-musk',
          jobs: [
            {
              title: 'CEO',
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
        service: 'sage-hr',
        resource: 'Employees',
        operation: 'one',
        data: [
          {
            id: '12345',
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
              id: '12345',
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
            languages: ['EN'],
            nationalities: ['US'],
            photo_url: 'https://unavatar.io/elon-musk',
            jobs: [
              {
                id: '12345',
                employee_id: '12345',
                title: 'CEO',
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
            deleted: true,
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
        service: 'sage-hr',
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
        service: 'sage-hr',
        resource: 'Employees',
        operation: 'one',
        data: {
          id: '12345',
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
            id: '12345',
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
          languages: ['EN'],
          nationalities: ['US'],
          photo_url: 'https://unavatar.io/elon-musk',
          jobs: [
            {
              id: '12345',
              employee_id: '12345',
              title: 'CEO',
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
          deleted: true,
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
        service: 'sage-hr',
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
          languages: ['EN'],
          nationalities: ['US'],
          photo_url: 'https://unavatar.io/elon-musk',
          jobs: [
            {
              title: 'CEO',
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
      } as any
      const current = await hris.employeesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

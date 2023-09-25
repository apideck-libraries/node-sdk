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
        operation: 'add',
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
          status: 'active',
          company_number: '123456-AB',
          currency: 'USD',
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
        operation: 'all',
        data: [
          {
            id: '12345',
            legal_name: 'SpaceX',
            display_name: 'SpaceX',
            subdomain: 'company',
            status: 'active',
            company_number: '123456-AB',
            currency: 'USD',
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
        operation: 'delete',
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
          status: 'active',
          company_number: '123456-AB',
          currency: 'USD',
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
        operation: 'update',
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
          status: 'active',
          company_number: '123456-AB',
          currency: 'USD',
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
        operation: 'add',
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
        operation: 'all',
        data: [
          {
            id: '12345',
            parent_id: '22345',
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
        operation: 'delete',
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
          parent_id: '22345',
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
        operation: 'update',
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

  describe('#employeePayrollsAll', () => {
    const endpoint = '/hris/payrolls/employees/{employee_id}'

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
        operation: 'all',
        data: [
          {
            id: '12345',
            employee_id: '12345',
            company_id: '23456',
            processed: false,
            processed_date: '2022-04-08',
            check_date: '2022-04-08',
            start_date: '2022-04-08',
            end_date: '2022-04-21',
            totals: {
              company_debit: 27992.49,
              tax_debit: 8655.32,
              check_amount: 27966.23,
              net_pay: 19337.17,
              gross_pay: 27966.23,
              employer_taxes: 2038.93,
              employee_taxes: 6616.39,
              employer_benefit_contributions: 0,
              employee_benefit_deductions: 0
            },
            compensations: [
              {
                employee_id: '12345',
                net_pay: 2199.93,
                gross_pay: 3000,
                taxes: [[Object]],
                deductions: [[Object]],
                benefits: [[Object]]
              }
            ]
          }
        ]
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        employeeId: 'employee_id_example'
      } as any
      const current = await hris.employeePayrollsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeePayrollsOne', () => {
    const endpoint = '/hris/payrolls/employees/{employee_id}/payrolls/{payroll_id}'

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
          employee_id: '12345',
          company_id: '23456',
          processed: false,
          processed_date: '2022-04-08',
          check_date: '2022-04-08',
          start_date: '2022-04-08',
          end_date: '2022-04-21',
          totals: {
            company_debit: 27992.49,
            tax_debit: 8655.32,
            check_amount: 27966.23,
            net_pay: 19337.17,
            gross_pay: 27966.23,
            employer_taxes: 2038.93,
            employee_taxes: 6616.39,
            employer_benefit_contributions: 0,
            employee_benefit_deductions: 0
          },
          compensations: [
            {
              employee_id: '12345',
              net_pay: 2199.93,
              gross_pay: 3000,
              taxes: [
                {
                  name: 'CA State Income Tax',
                  employer: false,
                  amount: 1.97
                }
              ],
              deductions: [
                {
                  name: 'Company Car',
                  amount: 10.97
                }
              ],
              benefits: [
                {
                  name: 'Health Insurance',
                  employee_deduction: 142.94,
                  employer_contribution: 141.14
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        payrollId: 'payroll_id_example',
        employeeId: 'employee_id_example'
      } as any
      const current = await hris.employeePayrollsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#employeeSchedulesAll', () => {
    const endpoint = '/hris/schedules/employees/{employee_id}'

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
        operation: 'all',
        data: {
          employee: {
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
            partner: {
              id: '12345',
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
            ethnicity: 'African American',
            manager: {
              id: '12345',
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
            languages: ['EN'],
            nationalities: ['US'],
            photo_url: 'https://unavatar.io/elon-musk',
            timezone: 'Europe/London',
            source: 'lever',
            source_id: '12345',
            record_url: 'https://app.intercom.io/contacts/12345',
            jobs: [
              {
                id: '12345',
                employee_id: '12345',
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
            food_allergies: ['No allergies'],
            probation_period: {
              start_date: '2021-10-01',
              end_date: '2021-11-28'
            },
            tags: ['New'],
            row_version: '1-12345',
            deleted: true,
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          },
          schedules: [
            {
              id: '12345',
              start_date: '2022-04-08',
              end_date: '2022-04-21',
              work_pattern: {
                odd_weeks: {
                  hours_monday: 8,
                  hours_tuesday: 8,
                  hours_wednesday: 4,
                  hours_thursday: 7.5,
                  hours_friday: 4,
                  hours_saturday: 0,
                  hours_sunday: 0
                },
                even_weeks: {
                  hours_monday: 8,
                  hours_tuesday: 8,
                  hours_wednesday: 4,
                  hours_thursday: 7.5,
                  hours_friday: 4,
                  hours_saturday: 0,
                  hours_sunday: 0
                }
              }
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        employeeId: 'employee_id_example'
      } as any
      const current = await hris.employeeSchedulesAll(params)

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
        operation: 'add',
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
          ethnicity: 'African American',
          manager: {
            id: '12345',
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
          languages: ['EN'],
          nationalities: ['US'],
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
          food_allergies: ['No allergies'],
          probation_period: {
            start_date: '2021-10-01',
            end_date: '2021-11-28'
          },
          tags: ['New'],
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
        operation: 'all',
        data: [
          {
            id: '12345',
            first_name: 'Elon',
            last_name: 'Musk',
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
        operation: 'delete',
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
          partner: {
            id: '12345',
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
          ethnicity: 'African American',
          manager: {
            id: '12345',
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
          languages: ['EN'],
          nationalities: ['US'],
          photo_url: 'https://unavatar.io/elon-musk',
          timezone: 'Europe/London',
          source: 'lever',
          source_id: '12345',
          record_url: 'https://app.intercom.io/contacts/12345',
          jobs: [
            {
              id: '12345',
              employee_id: '12345',
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
          food_allergies: ['No allergies'],
          probation_period: {
            start_date: '2021-10-01',
            end_date: '2021-11-28'
          },
          tags: ['New'],
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
        operation: 'update',
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
          ethnicity: 'African American',
          manager: {
            id: '12345',
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
          languages: ['EN'],
          nationalities: ['US'],
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
          food_allergies: ['No allergies'],
          probation_period: {
            start_date: '2021-10-01',
            end_date: '2021-11-28'
          },
          tags: ['New'],
          row_version: '1-12345',
          deleted: true
        }
      } as any
      const current = await hris.employeesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#payrollsAll', () => {
    const endpoint = '/hris/payrolls'

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
        operation: 'all',
        data: [
          {
            id: '12345',
            company_id: '23456',
            processed: false,
            processed_date: '2022-04-08',
            check_date: '2022-04-08',
            start_date: '2022-04-08',
            end_date: '2022-04-21',
            totals: {
              company_debit: 27992.49,
              tax_debit: 8655.32,
              check_amount: 27966.23,
              net_pay: 19337.17,
              gross_pay: 27966.23,
              employer_taxes: 2038.93,
              employee_taxes: 6616.39,
              employer_benefit_contributions: 0,
              employee_benefit_deductions: 0
            },
            compensations: [
              {
                employee_id: '12345',
                net_pay: 2199.93,
                gross_pay: 3000,
                taxes: [[Object]],
                deductions: [[Object]],
                benefits: [[Object]]
              }
            ]
          }
        ]
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {} as any
      const current = await hris.payrollsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#payrollsOne', () => {
    const endpoint = '/hris/payrolls/{payroll_id}'

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
          company_id: '23456',
          processed: false,
          processed_date: '2022-04-08',
          check_date: '2022-04-08',
          start_date: '2022-04-08',
          end_date: '2022-04-21',
          totals: {
            company_debit: 27992.49,
            tax_debit: 8655.32,
            check_amount: 27966.23,
            net_pay: 19337.17,
            gross_pay: 27966.23,
            employer_taxes: 2038.93,
            employee_taxes: 6616.39,
            employer_benefit_contributions: 0,
            employee_benefit_deductions: 0
          },
          compensations: [
            {
              employee_id: '12345',
              net_pay: 2199.93,
              gross_pay: 3000,
              taxes: [
                {
                  name: 'CA State Income Tax',
                  employer: false,
                  amount: 1.97
                }
              ],
              deductions: [
                {
                  name: 'Company Car',
                  amount: 10.97
                }
              ],
              benefits: [
                {
                  name: 'Health Insurance',
                  employee_deduction: 142.94,
                  employer_contribution: 141.14
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
      const params = {
        payrollId: 'payroll_id_example'
      } as any
      const current = await hris.payrollsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#timeOffRequestsAdd', () => {
    const endpoint = '/hris/time-off-requests'

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
        service: 'bamboohr',
        resource: 'time-off-requests',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { hris } = apideck
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
      } as any
      const current = await hris.timeOffRequestsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#timeOffRequestsAll', () => {
    const endpoint = '/hris/time-off-requests'

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
        service: 'bamboohr',
        resource: 'time-off-requests',
        operation: 'all',
        data: [
          {
            id: '12345',
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
            },
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
      const current = await hris.timeOffRequestsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#timeOffRequestsDelete', () => {
    const endpoint = '/hris/time-off-requests/{id}'

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
        service: 'bamboohr',
        resource: 'time-off-requests',
        operation: 'delete',
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
      const current = await hris.timeOffRequestsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#timeOffRequestsOne', () => {
    const endpoint = '/hris/time-off-requests/{id}'

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
        service: 'bamboohr',
        resource: 'time-off-requests',
        operation: 'one',
        data: {
          id: '12345',
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
          },
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
      const current = await hris.timeOffRequestsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#timeOffRequestsUpdate', () => {
    const endpoint = '/hris/time-off-requests/{id}'

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
        service: 'bamboohr',
        resource: 'time-off-requests',
        operation: 'update',
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
      } as any
      const current = await hris.timeOffRequestsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

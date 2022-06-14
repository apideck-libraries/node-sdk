import fetch from 'node-fetch-commonjs'
const { Response } = jest.requireActual('node-fetch-commonjs')

jest.mock('node-fetch-commonjs', () => jest.fn())

import { Apideck } from '../../../'

const basePath = 'https://example.com'

const methodResponse = {
  All: {
    status: 'OK',
    data: []
  }
}

describe('AccountingApi', () => {
  describe('#balanceSheetOne', () => {
    const endpoint = '/accounting/balance-sheet'

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
        service: 'quickbooks',
        resource: 'BalanceSheets',
        operation: 'one',
        data: {
          id: '12345',
          report_name: 'BalanceSheet',
          start_date: '2017-01-01',
          assets: {
            total: 200000,
            current_assets: {
              total: 100000,
              accounts: [
                {
                  id: '1',
                  name: 'Accounts Receivable (A/R)',
                  value: 10000
                },
                {
                  id: '2',
                  name: 'Accounts Payable (A/P)',
                  value: 10000
                }
              ]
            },
            fixed_assets: {
              total: 100000,
              accounts: [
                {
                  id: '1',
                  name: 'Accounts Receivable (A/R)',
                  value: 10000
                },
                {
                  id: '2',
                  name: 'Accounts Payable (A/P)',
                  value: 10000
                }
              ]
            }
          },
          liabilities: {
            total: 200000,
            accounts: [
              {
                id: '1',
                name: 'Accounts Payable (A/P)',
                value: 10000
              }
            ]
          },
          equity: {
            total: 200000,
            items: [
              {
                id: '1',
                name: 'Retained Earnings',
                value: 10000
              }
            ]
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.balanceSheetOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#billsAdd', () => {
    const endpoint = '/accounting/bills'

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
        service: 'xero',
        resource: 'bills',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        bill: {
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
              latitude: 40.759211,
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
          },
          currency: 'USD',
          currency_rate: 0.69,
          tax_inclusive: true,
          bill_date: '2020-09-30',
          due_date: '2020-10-30',
          paid_date: '2020-10-30',
          po_number: '90000117',
          line_items: [
            {
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'expense_account',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344'
              },
              ledger_account: {
                id: '123456',
                nominal_code: 'N091',
                code: '453'
              },
              tax_rate: {
                id: '123456'
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
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.billsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#billsAll', () => {
    const endpoint = '/accounting/bills'

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
        service: 'xero',
        resource: 'bills',
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            supplier: {
              id: '12345',
              display_name: 'Windsurf Shop',
              company_name: 'The boring company',
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
                latitude: 40.759211,
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
            },
            currency: 'USD',
            currency_rate: 0.69,
            tax_inclusive: true,
            bill_date: '2020-09-30',
            due_date: '2020-10-30',
            paid_date: '2020-10-30',
            po_number: '90000117',
            line_items: [
              {
                id: '12345',
                row_id: '12345',
                code: '120-C',
                line_number: 1,
                description:
                  'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
                type: 'expense_account',
                tax_amount: 27500,
                total_amount: 27500,
                quantity: 1,
                unit_price: 27500.5,
                unit_of_measure: 'pc.',
                discount_percentage: 0.01,
                item: {
                  id: '12344',
                  code: '120-C',
                  name: 'Model Y'
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                tax_rate: {
                  id: '123456',
                  code: 'N-T',
                  name: 'GST on Purchases'
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
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345'
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.billsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#billsDelete', () => {
    const endpoint = '/accounting/bills/{id}'

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
        service: 'xero',
        resource: 'bills',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.billsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#billsOne', () => {
    const endpoint = '/accounting/bills/{id}'

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
        service: 'xero',
        resource: 'bills',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          supplier: {
            id: '12345',
            display_name: 'Windsurf Shop',
            company_name: 'The boring company',
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
              latitude: 40.759211,
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
          },
          currency: 'USD',
          currency_rate: 0.69,
          tax_inclusive: true,
          bill_date: '2020-09-30',
          due_date: '2020-10-30',
          paid_date: '2020-10-30',
          po_number: '90000117',
          line_items: [
            {
              id: '12345',
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'expense_account',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344',
                code: '120-C',
                name: 'Model Y'
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
                nominal_code: 'N091',
                code: '453'
              },
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases'
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
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.billsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#billsUpdate', () => {
    const endpoint = '/accounting/bills/{id}'

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
        service: 'xero',
        resource: 'bills',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        bill: {
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
              latitude: 40.759211,
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
          },
          currency: 'USD',
          currency_rate: 0.69,
          tax_inclusive: true,
          bill_date: '2020-09-30',
          due_date: '2020-10-30',
          paid_date: '2020-10-30',
          po_number: '90000117',
          line_items: [
            {
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'expense_account',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344'
              },
              ledger_account: {
                id: '123456',
                nominal_code: 'N091',
                code: '453'
              },
              tax_rate: {
                id: '123456'
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
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.billsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#companyInfoOne', () => {
    const endpoint = '/accounting/company-info'

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
        service: 'xero',
        resource: 'company-info',
        operation: 'one',
        data: {
          id: '12345',
          company_name: 'SpaceX',
          legal_name: 'SpaceX Inc.',
          sales_tax_number: '111.222.333',
          currency: 'USD',
          language: 'EN',
          fiscal_year_start_month: 'January',
          company_start_date: '2015-06-05',
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
              latitude: 40.759211,
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
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.companyInfoOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersAdd', () => {
    const endpoint = '/accounting/customers'

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
        service: 'xero',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        customer: {
          display_id: 'EMP00101',
          display_name: 'Windsurf Shop',
          company_name: 'SpaceX',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          status: 'active',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.customersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersAll', () => {
    const endpoint = '/accounting/customers'

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
        service: 'xero',
        resource: 'customers',
        operation: 'one',
        data: [
          {
            id: '12345',
            display_id: 'EMP00101',
            display_name: 'Windsurf Shop',
            company_name: 'SpaceX',
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
                latitude: 40.759211,
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
            notes: 'Some notes about this customer',
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
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases'
            },
            tax_number: 'US123945459',
            currency: 'USD',
            bank_accounts: [
              {
                iban: 'CH2989144532982975332',
                bic: 'AUDSCHGGXXX',
                bsb_number: '062-001',
                branch_identifier: '001',
                bank_code: 'BNH',
                account_number: '123465',
                account_name: 'SPACEX LLC',
                account_type: 'credit_card',
                currency: 'USD'
              }
            ],
            status: 'active',
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.customersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersDelete', () => {
    const endpoint = '/accounting/customers/{id}'

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
        service: 'xero',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.customersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersOne', () => {
    const endpoint = '/accounting/customers/{id}'

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
        service: 'xero',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345',
          display_id: 'EMP00101',
          display_name: 'Windsurf Shop',
          company_name: 'SpaceX',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456',
            code: 'N-T',
            name: 'GST on Purchases'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          status: 'active',
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.customersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#customersUpdate', () => {
    const endpoint = '/accounting/customers/{id}'

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
        service: 'xero',
        resource: 'customers',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        customer: {
          display_id: 'EMP00101',
          display_name: 'Windsurf Shop',
          company_name: 'SpaceX',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: [
            {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          status: 'active',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.customersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoiceItemsAdd', () => {
    const endpoint = '/accounting/invoice-items'

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
        service: 'xero',
        resource: 'invoice-items',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        invoiceItem: {
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          code: '120-C',
          sold: true,
          purchased: true,
          tracked: true,
          inventory_date: '2020-10-30',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
            }
          },
          purchase_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
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
          active: true,
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.invoiceItemsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoiceItemsAll', () => {
    const endpoint = '/accounting/invoice-items'

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
        service: 'xero',
        resource: 'invoice-items',
        operation: 'one',
        data: [
          {
            id: '123456',
            name: 'Model Y',
            description:
              'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
            code: '120-C',
            sold: true,
            purchased: true,
            tracked: true,
            inventory_date: '2020-10-30',
            type: 'inventory',
            sales_details: {
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              tax_inclusive: true,
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases'
              }
            },
            purchase_details: {
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              tax_inclusive: true,
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases'
              }
            },
            quantity: 1,
            unit_price: 27500.5,
            asset_account: {
              id: '123456',
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            income_account: {
              id: '123456',
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            expense_account: {
              id: '123456',
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            active: true,
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.invoiceItemsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoiceItemsDelete', () => {
    const endpoint = '/accounting/invoice-items/{id}'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoiceItemsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoiceItemsOne', () => {
    const endpoint = '/accounting/invoice-items/{id}'

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
        service: 'xero',
        resource: 'invoice-items',
        operation: 'one',
        data: {
          id: '123456',
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          code: '120-C',
          sold: true,
          purchased: true,
          tracked: true,
          inventory_date: '2020-10-30',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases'
            }
          },
          purchase_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases'
            }
          },
          quantity: 1,
          unit_price: 27500.5,
          asset_account: {
            id: '123456',
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          income_account: {
            id: '123456',
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          expense_account: {
            id: '123456',
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          active: true,
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoiceItemsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoiceItemsUpdate', () => {
    const endpoint = '/accounting/invoice-items/{id}'

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
        service: 'xero',
        resource: 'invoice-items',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        invoiceItem: {
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          code: '120-C',
          sold: true,
          purchased: true,
          tracked: true,
          inventory_date: '2020-10-30',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
            }
          },
          purchase_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
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
          active: true,
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.invoiceItemsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesAdd', () => {
    const endpoint = '/accounting/invoices'

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
        service: 'xero',
        resource: 'invoices',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        invoice: {
          type: 'service',
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_name: 'Windsurf Shop'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
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
          total: 27500,
          balance: 27500,
          deposit: 0,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'sales_item',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344'
              },
              tax_rate: {
                id: '123456'
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          template_id: '123456',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.invoicesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesAll', () => {
    const endpoint = '/accounting/invoices'

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
        service: 'xero',
        resource: 'invoices',
        operation: 'one',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            type: 'service',
            number: 'OIT00546',
            customer: {
              id: '12345',
              display_id: 'CUST00101',
              display_name: 'Windsurf Shop',
              company_name: 'The boring company'
            },
            invoice_date: '2020-09-30',
            due_date: '2020-10-30',
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
            total: 27500,
            balance: 27500,
            deposit: 0,
            customer_memo: 'Thank you for your business and have a great day!',
            line_items: [
              {
                id: '12345',
                row_id: '12345',
                code: '120-C',
                line_number: 1,
                description:
                  'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
                type: 'sales_item',
                tax_amount: 27500,
                total_amount: 27500,
                quantity: 1,
                unit_price: 27500.5,
                unit_of_measure: 'pc.',
                discount_percentage: 0.01,
                item: {
                  id: '12344',
                  code: '120-C',
                  name: 'Model Y'
                },
                tax_rate: {
                  id: '123456',
                  code: 'N-T',
                  name: 'GST on Purchases'
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
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
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
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
              latitude: 40.759211,
              longitude: '-73.984638',
              county: 'Santa Clara',
              contact_name: 'Elon Musk',
              salutation: 'Mr',
              phone_number: '111-111-1111',
              fax: '122-111-1111',
              email: 'elon@musk.com',
              website: 'https://elonmusk.com',
              row_version: '1-12345'
            },
            template_id: '123456',
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.invoicesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesDelete', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        service: 'xero',
        resource: 'invoices',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoicesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesOne', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        service: 'xero',
        resource: 'invoices',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          type: 'service',
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_id: 'CUST00101',
            display_name: 'Windsurf Shop',
            company_name: 'The boring company'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
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
          total: 27500,
          balance: 27500,
          deposit: 0,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              id: '12345',
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'sales_item',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344',
                code: '120-C',
                name: 'Model Y'
              },
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases'
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          template_id: '123456',
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.invoicesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#invoicesUpdate', () => {
    const endpoint = '/accounting/invoices/{id}'

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
        service: 'xero',
        resource: 'invoices',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        invoice: {
          type: 'service',
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_name: 'Windsurf Shop'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
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
          total: 27500,
          balance: 27500,
          deposit: 0,
          customer_memo: 'Thank you for your business and have a great day!',
          line_items: [
            {
              row_id: '12345',
              code: '120-C',
              line_number: 1,
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              type: 'sales_item',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0.01,
              item: {
                id: '12344'
              },
              tax_rate: {
                id: '123456'
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
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
            latitude: 40.759211,
            longitude: '-73.984638',
            county: 'Santa Clara',
            contact_name: 'Elon Musk',
            salutation: 'Mr',
            phone_number: '111-111-1111',
            fax: '122-111-1111',
            email: 'elon@musk.com',
            website: 'https://elonmusk.com',
            row_version: '1-12345'
          },
          template_id: '123456',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.invoicesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsAdd', () => {
    const endpoint = '/accounting/ledger-accounts'

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
        service: 'xero',
        resource: 'ledger-accounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
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
            id: '123456'
          },
          level: 1,
          active: true,
          status: 'active',
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            branch_identifier: '001',
            bank_code: 'BNH',
            account_number: '123465',
            account_name: 'SPACEX LLC',
            account_type: 'credit_card',
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
      } as any
      const current = await accounting.ledgerAccountsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsAll', () => {
    const endpoint = '/accounting/ledger-accounts'

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
        service: 'xero',
        resource: 'ledger-accounts',
        operation: 'one',
        data: [
          {
            id: '12345',
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
              code: 'N-T',
              name: 'GST on Purchases'
            },
            level: 1,
            active: true,
            status: 'active',
            header: true,
            bank_account: {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            },
            categories: [
              {
                id: '12345',
                name: 'Finance Charges Expense'
              }
            ],
            parent_account: {
              id: '12345',
              name: 'Bank Accounts',
              display_id: '1-1100'
            },
            sub_account: false,
            sub_accounts: [
              {
                id: '12345',
                account_sub_name: 'Petty Cash'
              }
            ],
            last_reconciliation_date: '2020-09-30',
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.ledgerAccountsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsDelete', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        service: 'xero',
        resource: 'ledger-accounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.ledgerAccountsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsOne', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        service: 'xero',
        resource: 'ledger-accounts',
        operation: 'one',
        data: {
          id: '12345',
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
            code: 'N-T',
            name: 'GST on Purchases'
          },
          level: 1,
          active: true,
          status: 'active',
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            branch_identifier: '001',
            bank_code: 'BNH',
            account_number: '123465',
            account_name: 'SPACEX LLC',
            account_type: 'credit_card',
            currency: 'USD'
          },
          categories: [
            {
              id: '12345',
              name: 'Finance Charges Expense'
            }
          ],
          parent_account: {
            id: '12345',
            name: 'Bank Accounts',
            display_id: '1-1100'
          },
          sub_account: false,
          sub_accounts: [
            {
              id: '12345',
              account_sub_name: 'Petty Cash'
            }
          ],
          last_reconciliation_date: '2020-09-30',
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.ledgerAccountsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#ledgerAccountsUpdate', () => {
    const endpoint = '/accounting/ledger-accounts/{id}'

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
        service: 'xero',
        resource: 'ledger-accounts',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
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
            id: '123456'
          },
          level: 1,
          active: true,
          status: 'active',
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            branch_identifier: '001',
            bank_code: 'BNH',
            account_number: '123465',
            account_name: 'SPACEX LLC',
            account_type: 'credit_card',
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
      } as any
      const current = await accounting.ledgerAccountsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsAdd', () => {
    const endpoint = '/accounting/payments'

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
        service: 'xero',
        resource: 'payments',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        payment: {
          currency: 'USD',
          currency_rate: 0.69,
          total_amount: 49.99,
          reference: '123456',
          payment_method: 'Credit Card',
          payment_method_reference: '123456',
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
            display_name: 'Windsurf Shop'
          },
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
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.paymentsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsAll', () => {
    const endpoint = '/accounting/payments'

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
        service: 'xero',
        resource: 'payments',
        operation: 'all',
        data: [
          {
            id: '123456',
            currency: 'USD',
            currency_rate: 0.69,
            total_amount: 49.99,
            reference: '123456',
            payment_method: 'Credit Card',
            payment_method_reference: '123456',
            accounts_receivable_account_type: 'Account',
            accounts_receivable_account_id: '123456',
            account: {
              id: '123456',
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            transaction_date: '2021-05-01T12:00:00.000Z',
            customer: {
              id: '12345',
              display_id: 'CUST00101',
              display_name: 'Windsurf Shop',
              company_name: 'The boring company'
            },
            reconciled: true,
            status: 'authorised',
            type: 'accounts_receivable',
            allocations: [
              {
                id: '123456',
                type: 'invoice',
                code: 'N091',
                amount: 49.99
              }
            ],
            note: 'Some notes about this payment',
            row_version: '1-12345',
            created_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2020-09-30T07:43:32.000Z'
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.paymentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsDelete', () => {
    const endpoint = '/accounting/payments/{id}'

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
        service: 'xero',
        resource: 'payments',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.paymentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsOne', () => {
    const endpoint = '/accounting/payments/{id}'

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
        service: 'xero',
        resource: 'payments',
        operation: 'one',
        data: {
          id: '123456',
          currency: 'USD',
          currency_rate: 0.69,
          total_amount: 49.99,
          reference: '123456',
          payment_method: 'Credit Card',
          payment_method_reference: '123456',
          accounts_receivable_account_type: 'Account',
          accounts_receivable_account_id: '123456',
          account: {
            id: '123456',
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          transaction_date: '2021-05-01T12:00:00.000Z',
          customer: {
            id: '12345',
            display_id: 'CUST00101',
            display_name: 'Windsurf Shop',
            company_name: 'The boring company'
          },
          reconciled: true,
          status: 'authorised',
          type: 'accounts_receivable',
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              code: 'N091',
              amount: 49.99
            }
          ],
          note: 'Some notes about this payment',
          row_version: '1-12345',
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.paymentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#paymentsUpdate', () => {
    const endpoint = '/accounting/payments/{id}'

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
        service: 'xero',
        resource: 'payments',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        payment: {
          currency: 'USD',
          currency_rate: 0.69,
          total_amount: 49.99,
          reference: '123456',
          payment_method: 'Credit Card',
          payment_method_reference: '123456',
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
            display_name: 'Windsurf Shop'
          },
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
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.paymentsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#suppliersAdd', () => {
    const endpoint = '/accounting/suppliers'

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
        service: 'xero',
        resource: 'payments',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        supplier: {
          company_name: 'SpaceX',
          display_name: 'Windsurf Shop',
          title: 'CEO',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          suffix: 'Jr.',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this supplier',
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
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          account: {
            id: '123456',
            nominal_code: 'N091',
            code: '453'
          },
          status: 'active',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.suppliersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#suppliersAll', () => {
    const endpoint = '/accounting/suppliers'

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
        service: 'xero',
        resource: 'suppliers',
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            company_name: 'SpaceX',
            display_name: 'Windsurf Shop',
            title: 'CEO',
            first_name: 'Elon',
            middle_name: 'D.',
            last_name: 'Musk',
            suffix: 'Jr.',
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
                latitude: 40.759211,
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
            notes: 'Some notes about this supplier',
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
                iban: 'CH2989144532982975332',
                bic: 'AUDSCHGGXXX',
                bsb_number: '062-001',
                branch_identifier: '001',
                bank_code: 'BNH',
                account_number: '123465',
                account_name: 'SPACEX LLC',
                account_type: 'credit_card',
                currency: 'USD'
              }
            ],
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases'
            },
            tax_number: 'US123945459',
            currency: 'USD',
            account: {
              id: '123456',
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            status: 'active',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345'
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.suppliersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#suppliersDelete', () => {
    const endpoint = '/accounting/suppliers/{id}'

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
        service: 'xero',
        resource: 'suppliers',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.suppliersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#suppliersOne', () => {
    const endpoint = '/accounting/suppliers/{id}'

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
        service: 'xero',
        resource: 'suppliers',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          company_name: 'SpaceX',
          display_name: 'Windsurf Shop',
          title: 'CEO',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          suffix: 'Jr.',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this supplier',
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
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          tax_rate: {
            id: '123456',
            code: 'N-T',
            name: 'GST on Purchases'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          account: {
            id: '123456',
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          status: 'active',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.suppliersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#suppliersUpdate', () => {
    const endpoint = '/accounting/suppliers/{id}'

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
        service: 'xero',
        resource: 'suppliers',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example',
        supplier: {
          company_name: 'SpaceX',
          display_name: 'Windsurf Shop',
          title: 'CEO',
          first_name: 'Elon',
          middle_name: 'D.',
          last_name: 'Musk',
          suffix: 'Jr.',
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
              latitude: 40.759211,
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
          notes: 'Some notes about this supplier',
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
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              branch_identifier: '001',
              bank_code: 'BNH',
              account_number: '123465',
              account_name: 'SPACEX LLC',
              account_type: 'credit_card',
              currency: 'USD'
            }
          ],
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          account: {
            id: '123456',
            nominal_code: 'N091',
            code: '453'
          },
          status: 'active',
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.suppliersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesAdd', () => {
    const endpoint = '/accounting/tax-rates'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
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
      } as any
      const current = await accounting.taxRatesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesAll', () => {
    const endpoint = '/accounting/tax-rates'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: [
          {
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
            row_version: '1-12345',
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

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.taxRatesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesDelete', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.taxRatesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesOne', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: {
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
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.taxRatesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#taxRatesUpdate', () => {
    const endpoint = '/accounting/tax-rates/{id}'

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
        service: 'xero',
        resource: 'tax-rates',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
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
      } as any
      const current = await accounting.taxRatesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

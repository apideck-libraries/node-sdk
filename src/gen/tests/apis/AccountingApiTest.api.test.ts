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

describe('AccountingApi', () => {
  describe('#attachmentsAll', () => {
    const endpoint = '/accounting/attachments/{reference_type}/{reference_id}'

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
        resource: 'PurchaseOrders',
        operation: 'all',
        data: [
          {
            id: '12345',
            display_id: 'sample ID',
            name: 'sample.jpg',
            mime_type: 'image/jpeg',
            size: 1810673,
            reference: {
              type: 'invoice',
              id: '12345'
            },
            description: 'A sample image',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const params = {
        referenceType: 'invoice',
        referenceId: '123456'
      } as any
      const current = await accounting.attachmentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#attachmentsDelete', () => {
    const endpoint = '/accounting/attachments/{reference_type}/{reference_id}/{id}'

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
        service: 'google-drive',
        resource: 'files',
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
        referenceType: 'invoice',
        referenceId: '123456',
        id: 'id_example'
      } as any
      const current = await accounting.attachmentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#attachmentsDownload', () => {
    const endpoint = '/accounting/attachments/{reference_type}/{reference_id}/{id}/download'

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
      const mockedResponse: Record<string, unknown> = {} as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        referenceType: 'invoice',
        referenceId: '123456',
        id: 'id_example'
      } as any
      const current = await accounting.attachmentsDownload(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#attachmentsOne', () => {
    const endpoint = '/accounting/attachments/{reference_type}/{reference_id}/{id}'

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
          id: '12345',
          display_id: 'sample ID',
          name: 'sample.jpg',
          mime_type: 'image/jpeg',
          size: 1810673,
          reference: {
            type: 'invoice',
            id: '12345'
          },
          description: 'A sample image',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        referenceType: 'invoice',
        referenceId: '123456',
        id: 'id_example'
      } as any
      const current = await accounting.attachmentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

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
          reports: [
            {
              id: '12345',
              report_name: 'BalanceSheet',
              start_date: '2017-01-01',
              end_date: '2017-01-01',
              currency: 'USD',
              assets: {
                account_id: '123456',
                code: '1100',
                name: 'Current assets',
                value: 1000,
                items: [{}]
              },
              liabilities: {
                account_id: '123456',
                code: '1100',
                name: 'Current assets',
                value: 1000,
                items: [{}]
              },
              equity: {
                account_id: '123456',
                code: '1100',
                name: 'Current assets',
                value: 1000,
                items: [{}]
              },
              net_assets: 1000,
              custom_mappings: {},
              updated_by: '12345',
              created_by: '12345',
              updated_at: '2020-09-30T07:43:32.000Z',
              created_at: '2020-09-30T07:43:32.000Z',
              uncategorized_items: [
                {
                  account_id: '123456',
                  code: '1100',
                  name: 'Current assets',
                  value: 1000,
                  items: []
                }
              ]
            }
          ]
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
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
            bill_number: '10001',
            supplier: {
              id: '12345',
              display_id: 'SUPP00101',
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
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                row_version: '1-12345',
                updated_by: '12345',
                created_by: '12345',
                created_at: '2020-09-30T07:43:32.000Z',
                updated_at: '2020-09-30T07:43:32.000Z'
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
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345',
            custom_mappings: {},
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
          bill_number: '10001',
          supplier: {
            id: '12345',
            display_id: 'SUPP00101',
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
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
                nominal_code: 'N091',
                code: '453'
              },
              row_version: '1-12345',
              updated_by: '12345',
              created_by: '12345',
              created_at: '2020-09-30T07:43:32.000Z',
              updated_at: '2020-09-30T07:43:32.000Z'
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
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345',
          custom_mappings: {},
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          status: 'active',
          legal_name: 'SpaceX Inc.',
          country: 'US',
          sales_tax_number: '111.222.333',
          automated_sales_tax: true,
          sales_tax_enabled: true,
          default_sales_tax: {
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
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
          },
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
          custom_mappings: {},
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

  describe('#creditNotesAdd', () => {
    const endpoint = '/accounting/credit-notes'

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
        resource: 'credit-notes',
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
        creditNote: {
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
          ],
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              amount: 49.99,
              allocation_id: '123456'
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
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.creditNotesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#creditNotesAll', () => {
    const endpoint = '/accounting/credit-notes'

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
        resource: 'credit-notes',
        operation: 'all',
        data: [
          {
            id: '123456',
            number: 'OIT00546',
            customer: {
              id: '12345',
              display_id: 'CUST00101',
              display_name: 'Windsurf Shop',
              name: 'Windsurf Shop',
              company_name: 'The boring company',
              email: 'boring@boring.com'
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
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
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
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                custom_fields: [[Object]],
                row_version: '1-12345',
                updated_by: '12345',
                created_by: '12345',
                created_at: '2020-09-30T07:43:32.000Z',
                updated_at: '2020-09-30T07:43:32.000Z'
              }
            ],
            allocations: [
              {
                id: '123456',
                type: 'invoice',
                code: 'N091',
                amount: 49.99,
                allocation_id: '123456'
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
            custom_mappings: {},
            custom_fields: [
              {
                id: '2389328923893298',
                name: 'employee_level',
                description: 'Employee Level',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.creditNotesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#creditNotesDelete', () => {
    const endpoint = '/accounting/credit-notes/{id}'

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
        resource: 'credit-notes',
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
      const current = await accounting.creditNotesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#creditNotesOne', () => {
    const endpoint = '/accounting/credit-notes/{id}'

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
        resource: 'credit-notes',
        operation: 'one',
        data: {
          id: '123456',
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_id: 'CUST00101',
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            company_name: 'The boring company',
            email: 'boring@boring.com'
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
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
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
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
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
              row_version: '1-12345',
              updated_by: '12345',
              created_by: '12345',
              created_at: '2020-09-30T07:43:32.000Z',
              updated_at: '2020-09-30T07:43:32.000Z'
            }
          ],
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              code: 'N091',
              amount: 49.99,
              allocation_id: '123456'
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
          custom_mappings: {},
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.creditNotesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#creditNotesUpdate', () => {
    const endpoint = '/accounting/credit-notes/{id}'

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
        resource: 'credit-notes',
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
        creditNote: {
          number: 'OIT00546',
          customer: {
            id: '12345',
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
          ],
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              amount: 49.99,
              allocation_id: '123456'
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
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.creditNotesUpdate(params)

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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
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
              code: 'N-T',
              name: 'GST on Purchases',
              rate: 10
            },
            tax_number: 'US123945459',
            currency: 'USD',
            account: {
              id: '123456',
              name: 'Bank account',
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
            custom_mappings: {},
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
          downstream_id: '12345',
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
            code: 'N-T',
            name: 'GST on Purchases',
            rate: 10
          },
          tax_number: 'US123945459',
          currency: 'USD',
          account: {
            id: '123456',
            name: 'Bank account',
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
          custom_mappings: {},
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.customersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsAdd', () => {
    const endpoint = '/accounting/departments'

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
        resource: 'departments',
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
        department: {
          parent_id: '12345',
          name: 'Sales',
          status: 'active',
          subsidiaries: [
            {
              name: 'SpaceX'
            }
          ],
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.departmentsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsAll', () => {
    const endpoint = '/accounting/departments'

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
        resource: 'subsidiaries',
        operation: 'all',
        data: [
          {
            id: '12345',
            parent_id: '12345',
            name: 'Sales',
            status: 'active',
            subsidiaries: [
              {
                id: '12345',
                name: 'SpaceX'
              }
            ],
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.departmentsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsDelete', () => {
    const endpoint = '/accounting/departments/{id}'

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
        resource: 'departments',
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
      const current = await accounting.departmentsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsOne', () => {
    const endpoint = '/accounting/departments/{id}'

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
        resource: 'subsidiaries',
        operation: 'one',
        data: {
          id: '12345',
          parent_id: '12345',
          name: 'Sales',
          status: 'active',
          subsidiaries: [
            {
              id: '12345',
              name: 'SpaceX'
            }
          ],
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.departmentsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#departmentsUpdate', () => {
    const endpoint = '/accounting/departments/{id}'

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
        resource: 'departments',
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
        department: {
          parent_id: '12345',
          name: 'Sales',
          status: 'active',
          subsidiaries: [
            {
              name: 'SpaceX'
            }
          ],
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.departmentsUpdate(params)

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
        invoiceItem: {
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'all',
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
            taxable: true,
            inventory_date: '2020-10-30',
            type: 'inventory',
            sales_details: {
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              tax_inclusive: true,
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              }
            },
            purchase_details: {
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              tax_inclusive: true,
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
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
            tracking_category: {
              id: '123456',
              name: 'New York'
            },
            active: true,
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
          taxable: true,
          inventory_date: '2020-10-30',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases',
              rate: 10
            }
          },
          purchase_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456',
              code: 'N-T',
              name: 'GST on Purchases',
              rate: 10
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
          tracking_category: {
            id: '123456',
            name: 'New York'
          },
          active: true,
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        invoiceItem: {
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'add',
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
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'all',
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
              name: 'Windsurf Shop',
              company_name: 'The boring company',
              email: 'boring@boring.com'
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
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                custom_fields: [[Object]],
                row_version: '1-12345',
                updated_by: '12345',
                created_by: '12345',
                created_at: '2020-09-30T07:43:32.000Z',
                updated_at: '2020-09-30T07:43:32.000Z'
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
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            custom_mappings: {},
            custom_fields: [
              {
                id: '2389328923893298',
                name: 'employee_level',
                description: 'Employee Level',
                value: 'Uses Salesforce and Marketo'
              }
            ],
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
        operation: 'delete',
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
            name: 'Windsurf Shop',
            company_name: 'The boring company',
            email: 'boring@boring.com'
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
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
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
              row_version: '1-12345',
              updated_by: '12345',
              created_by: '12345',
              created_at: '2020-09-30T07:43:32.000Z',
              updated_at: '2020-09-30T07:43:32.000Z'
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
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          custom_mappings: {},
          custom_fields: [
            {
              id: '2389328923893298',
              name: 'employee_level',
              description: 'Employee Level',
              value: 'Uses Salesforce and Marketo'
            }
          ],
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'update',
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
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.invoicesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#journalEntriesAdd', () => {
    const endpoint = '/accounting/journal-entries'

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
        resource: 'journal-entries',
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
        journalEntry: {
          title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
          currency_rate: 0.69,
          currency: 'USD',
          company_id: '12345',
          line_items: [
            {
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
                name: 'Windsurf Shop',
                email: 'boring@boring.com'
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
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
                name: 'Windsurf Shop',
                email: 'boring@boring.com'
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.journalEntriesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#journalEntriesAll', () => {
    const endpoint = '/accounting/journal-entries'

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
        resource: 'journal-entries',
        operation: 'all',
        data: [
          {
            id: '12345',
            title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
            currency_rate: 0.69,
            currency: 'USD',
            company_id: '12345',
            line_items: [
              {
                id: '12345',
                description:
                  'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
                tax_amount: 27500,
                sub_total: 27500,
                total_amount: 27500,
                type: 'debit',
                tax_rate: {
                  id: '123456',
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                tracking_category: {
                  id: '123456',
                  name: 'New York'
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                customer: {
                  id: '12345',
                  display_id: 'CUST00101',
                  display_name: 'Windsurf Shop',
                  name: 'Windsurf Shop',
                  company_name: 'The boring company',
                  email: 'boring@boring.com'
                },
                supplier: {
                  id: '12345',
                  display_id: 'SUPP00101',
                  display_name: 'Windsurf Shop',
                  company_name: 'The boring company',
                  address: [Object]
                },
                department_id: '12345',
                location_id: '12345'
              },
              {
                id: '12345',
                description:
                  'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
                tax_amount: 27500,
                sub_total: 27500,
                total_amount: 27500,
                type: 'debit',
                tax_rate: {
                  id: '123456',
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                tracking_category: {
                  id: '123456',
                  name: 'New York'
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                customer: {
                  id: '12345',
                  display_id: 'CUST00101',
                  display_name: 'Windsurf Shop',
                  name: 'Windsurf Shop',
                  company_name: 'The boring company',
                  email: 'boring@boring.com'
                },
                supplier: {
                  id: '12345',
                  display_id: 'SUPP00101',
                  display_name: 'Windsurf Shop',
                  company_name: 'The boring company',
                  address: [Object]
                },
                department_id: '12345',
                location_id: '12345'
              }
            ],
            memo: 'Thank you for your business and have a great day!',
            posted_at: '2020-09-30T07:43:32.000Z',
            journal_symbol: 'IND',
            tax_type: 'sales',
            tax_code: '1234',
            number: 'OIT00546',
            custom_mappings: {},
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.journalEntriesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#journalEntriesDelete', () => {
    const endpoint = '/accounting/journal-entries/{id}'

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
        resource: 'journal-entries',
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
      const current = await accounting.journalEntriesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#journalEntriesOne', () => {
    const endpoint = '/accounting/journal-entries/{id}'

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
        resource: 'journal-entries',
        operation: 'one',
        data: {
          id: '12345',
          title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
          currency_rate: 0.69,
          currency: 'USD',
          company_id: '12345',
          line_items: [
            {
              id: '12345',
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              tax_amount: 27500,
              sub_total: 27500,
              total_amount: 27500,
              type: 'debit',
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              tracking_category: {
                id: '123456',
                name: 'New York'
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
                nominal_code: 'N091',
                code: '453'
              },
              customer: {
                id: '12345',
                display_id: 'CUST00101',
                display_name: 'Windsurf Shop',
                name: 'Windsurf Shop',
                company_name: 'The boring company',
                email: 'boring@boring.com'
              },
              supplier: {
                id: '12345',
                display_id: 'SUPP00101',
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
              department_id: '12345',
              location_id: '12345'
            },
            {
              id: '12345',
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
              tax_amount: 27500,
              sub_total: 27500,
              total_amount: 27500,
              type: 'debit',
              tax_rate: {
                id: '123456',
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              tracking_category: {
                id: '123456',
                name: 'New York'
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
                nominal_code: 'N091',
                code: '453'
              },
              customer: {
                id: '12345',
                display_id: 'CUST00101',
                display_name: 'Windsurf Shop',
                name: 'Windsurf Shop',
                company_name: 'The boring company',
                email: 'boring@boring.com'
              },
              supplier: {
                id: '12345',
                display_id: 'SUPP00101',
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
              department_id: '12345',
              location_id: '12345'
            }
          ],
          memo: 'Thank you for your business and have a great day!',
          posted_at: '2020-09-30T07:43:32.000Z',
          journal_symbol: 'IND',
          tax_type: 'sales',
          tax_code: '1234',
          number: 'OIT00546',
          custom_mappings: {},
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.journalEntriesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#journalEntriesUpdate', () => {
    const endpoint = '/accounting/journal-entries/{id}'

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
        resource: 'journal-entries',
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
        journalEntry: {
          title: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
          currency_rate: 0.69,
          currency: 'USD',
          company_id: '12345',
          line_items: [
            {
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
                name: 'Windsurf Shop',
                email: 'boring@boring.com'
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
              description:
                'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
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
                name: 'Windsurf Shop',
                email: 'boring@boring.com'
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.journalEntriesUpdate(params)

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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'all',
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
              name: 'GST on Purchases',
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
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
            name: 'GST on Purchases',
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
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.ledgerAccountsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsAdd', () => {
    const endpoint = '/accounting/locations'

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
        resource: 'locations',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.locationsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsAll', () => {
    const endpoint = '/accounting/locations'

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
        resource: 'subsidiaries',
        operation: 'all',
        data: [
          {
            id: '12345',
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
                id: '12345',
                name: 'SpaceX'
              }
            ],
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.locationsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsDelete', () => {
    const endpoint = '/accounting/locations/{id}'

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
        resource: 'locations',
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
      const current = await accounting.locationsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsOne', () => {
    const endpoint = '/accounting/locations/{id}'

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
        resource: 'subsidiaries',
        operation: 'one',
        data: {
          id: '12345',
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
              id: '12345',
              name: 'SpaceX'
            }
          ],
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.locationsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#locationsUpdate', () => {
    const endpoint = '/accounting/locations/{id}'

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
        resource: 'locations',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.locationsUpdate(params)

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
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
              amount: 49.99,
              allocation_id: '123456'
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
          display_id: '123456',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
            downstream_id: '12345',
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
              name: 'Bank account',
              nominal_code: 'N091',
              code: '453'
            },
            transaction_date: '2021-05-01T12:00:00.000Z',
            customer: {
              id: '12345',
              display_id: 'CUST00101',
              display_name: 'Windsurf Shop',
              name: 'Windsurf Shop',
              company_name: 'The boring company',
              email: 'boring@boring.com'
            },
            supplier: {
              id: '12345',
              display_id: 'SUPP00101',
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
                code: 'N091',
                amount: 49.99,
                allocation_id: '123456'
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
            display_id: '123456',
            custom_mappings: {},
            updated_by: '12345',
            created_by: '12345',
            created_at: '2020-09-30T07:43:32.000Z',
            updated_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
          downstream_id: '12345',
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
            name: 'Bank account',
            nominal_code: 'N091',
            code: '453'
          },
          transaction_date: '2021-05-01T12:00:00.000Z',
          customer: {
            id: '12345',
            display_id: 'CUST00101',
            display_name: 'Windsurf Shop',
            name: 'Windsurf Shop',
            company_name: 'The boring company',
            email: 'boring@boring.com'
          },
          supplier: {
            id: '12345',
            display_id: 'SUPP00101',
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
              code: 'N091',
              amount: 49.99,
              allocation_id: '123456'
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
          display_id: '123456',
          custom_mappings: {},
          updated_by: '12345',
          created_by: '12345',
          created_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
            name: 'Windsurf Shop',
            email: 'boring@boring.com'
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
              amount: 49.99,
              allocation_id: '123456'
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
          display_id: '123456',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.paymentsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#profitAndLossOne', () => {
    const endpoint = '/accounting/profit-and-loss'

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
        resource: 'ProfitAndLosses',
        operation: 'one',
        data: {
          id: '12345',
          report_name: 'ProfitAndLoss',
          start_date: '2017-01-01',
          end_date: '2017-01-01',
          currency: 'USD',
          customer_id: '123',
          income: {
            total: 200000,
            records: [
              {
                id: '123',
                name: 'Income 1',
                amount: 10000
              },
              {
                id: '456',
                name: 'Income 2',
                amount: 20000
              }
            ]
          },
          expenses: {
            total: 200000,
            records: [
              {
                id: '123',
                name: 'Expense 1',
                amount: 10000
              },
              {
                id: '456',
                name: 'Expense 2',
                amount: 20000
              }
            ]
          },
          net_income: {
            total: 200000
          },
          net_operating_income: {
            total: 200000
          },
          gross_profit: {
            total: 200000
          },
          custom_mappings: {}
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {} as any
      const current = await accounting.profitAndLossOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#purchaseOrdersAdd', () => {
    const endpoint = '/accounting/purchase-orders'

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
        resource: 'PurchaseOrders',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.purchaseOrdersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#purchaseOrdersAll', () => {
    const endpoint = '/accounting/purchase-orders'

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
        resource: 'PurchaseOrders',
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            po_number: '90000117',
            reference: '123456',
            supplier: {
              id: '12345',
              display_id: 'SUPP00101',
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
                  code: 'N-T',
                  name: 'GST on Purchases',
                  rate: 10
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account',
                  nominal_code: 'N091',
                  code: '453'
                },
                custom_fields: [[Object]],
                row_version: '1-12345',
                updated_by: '12345',
                created_by: '12345',
                created_at: '2020-09-30T07:43:32.000Z',
                updated_at: '2020-09-30T07:43:32.000Z'
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
              name: 'Bank account',
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
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.purchaseOrdersAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#purchaseOrdersDelete', () => {
    const endpoint = '/accounting/purchase-orders/{id}'

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
        resource: 'PurchaseOrders',
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
      const current = await accounting.purchaseOrdersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#purchaseOrdersOne', () => {
    const endpoint = '/accounting/purchase-orders/{id}'

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
        resource: 'PurchaseOrders',
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          po_number: '90000117',
          reference: '123456',
          supplier: {
            id: '12345',
            display_id: 'SUPP00101',
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
                code: 'N-T',
                name: 'GST on Purchases',
                rate: 10
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account',
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
              row_version: '1-12345',
              updated_by: '12345',
              created_by: '12345',
              created_at: '2020-09-30T07:43:32.000Z',
              updated_at: '2020-09-30T07:43:32.000Z'
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
            name: 'Bank account',
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
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.purchaseOrdersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#purchaseOrdersUpdate', () => {
    const endpoint = '/accounting/purchase-orders/{id}'

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
        resource: 'PurchaseOrders',
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.purchaseOrdersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#subsidiariesAdd', () => {
    const endpoint = '/accounting/subsidiaries'

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
        resource: 'subsidiaries',
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
        subsidiary: {
          parent_id: '12345',
          name: 'SpaceX',
          status: 'active',
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.subsidiariesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#subsidiariesAll', () => {
    const endpoint = '/accounting/subsidiaries'

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
        resource: 'subsidiaries',
        operation: 'all',
        data: [
          {
            id: '12345',
            parent_id: '12345',
            name: 'SpaceX',
            status: 'active',
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
      const current = await accounting.subsidiariesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#subsidiariesDelete', () => {
    const endpoint = '/accounting/subsidiaries/{id}'

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
        resource: 'subsidiaries',
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
      const current = await accounting.subsidiariesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#subsidiariesOne', () => {
    const endpoint = '/accounting/subsidiaries/{id}'

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
        resource: 'subsidiaries',
        operation: 'one',
        data: {
          id: '12345',
          parent_id: '12345',
          name: 'SpaceX',
          status: 'active',
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { accounting } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await accounting.subsidiariesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#subsidiariesUpdate', () => {
    const endpoint = '/accounting/subsidiaries/{id}'

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
        resource: 'subsidiaries',
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
        subsidiary: {
          parent_id: '12345',
          name: 'SpaceX',
          status: 'active',
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.subsidiariesUpdate(params)

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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
              code: 'N-T',
              name: 'GST on Purchases',
              rate: 10
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
            payment_method: 'cash',
            channel: 'email',
            custom_mappings: {},
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            row_version: '1-12345',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
            code: 'N-T',
            name: 'GST on Purchases',
            rate: 10
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
          payment_method: 'cash',
          channel: 'email',
          custom_mappings: {},
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
        operation: 'all',
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
            custom_mappings: {},
            row_version: '1-12345',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z',
            pass_through: [
              {
                service_id: 'string',
                operation_id: 'string',
                extend_object: {},
                extend_paths: [[Object]]
              }
            ]
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
          custom_mappings: {},
          row_version: '1-12345',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
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
          row_version: '1-12345',
          pass_through: [
            {
              service_id: 'string',
              operation_id: 'string',
              extend_object: {},
              extend_paths: [
                {
                  path: '$.nested.property',
                  value: [Object]
                }
              ]
            }
          ]
        }
      } as any
      const current = await accounting.taxRatesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

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

describe('AccountingApi', () => {
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
          sales_tax_number: '111.222.333',
          currency: 'USD',
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
          company_name: 'SpaceX',
          first_name: 'Elon',
          last_name: 'Musk',
          individual: true,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
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
            company_name: 'SpaceX',
            first_name: 'Elon',
            last_name: 'Musk',
            individual: true,
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
            notes: 'Some notes about this customer',
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
            tax_rate: {
              id: '123456',
              code: 'N-T'
            },
            tax_number: 'US123945459',
            currency: 'USD',
            bank_accounts: {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            },
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
          company_name: 'SpaceX',
          first_name: 'Elon',
          last_name: 'Musk',
          individual: true,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456',
            code: 'N-T'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
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
          company_name: 'SpaceX',
          first_name: 'Elon',
          last_name: 'Musk',
          individual: true,
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
          notes: 'Some notes about this customer',
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
          tax_rate: {
            id: '123456'
          },
          tax_number: 'US123945459',
          currency: 'USD',
          bank_accounts: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
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
          code: '120-C',
          sold: true,
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
            }
          },
          quantity: 1,
          unit_price: 27500.5,
          income_account: {
            id: '123456'
          },
          expense_account: {
            id: '123456'
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
            code: '120-C',
            sold: true,
            name: 'Model Y',
            description:
              'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
            type: 'inventory',
            sales_details: {
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              tax_inclusive: true,
              tax_rate: {
                id: '123456',
                code: 'N-T'
              }
            },
            quantity: 1,
            unit_price: 27500.5,
            income_account: {
              id: '123456',
              name: 'Bank account'
            },
            expense_account: {
              id: '123456',
              name: 'Bank account'
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
          code: '120-C',
          sold: true,
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456',
              code: 'N-T'
            }
          },
          quantity: 1,
          unit_price: 27500.5,
          income_account: {
            id: '123456',
            name: 'Bank account'
          },
          expense_account: {
            id: '123456',
            name: 'Bank account'
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
          code: '120-C',
          sold: true,
          name: 'Model Y',
          description:
            'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
          type: 'inventory',
          sales_details: {
            unit_price: 27500.5,
            unit_of_measure: 'pc.',
            tax_inclusive: true,
            tax_rate: {
              id: '123456'
            }
          },
          quantity: 1,
          unit_price: 27500.5,
          income_account: {
            id: '123456'
          },
          expense_account: {
            id: '123456'
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
            id: '12345'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'submitted',
          currency: 'USD',
          tax_inclusive: true,
          sub_total: 27500,
          total_tax: 2500,
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
              type: 'Inventory',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0,
              item: {
                id: '12344'
              },
              tax_rate: {
                id: '123456'
              },
              ledger_account: {
                id: '123456'
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
          shipping_address: {
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
              company_name: 'The boring company'
            },
            invoice_date: '2020-09-30',
            due_date: '2020-10-30',
            po_number: '90000117',
            status: 'submitted',
            currency: 'USD',
            tax_inclusive: true,
            sub_total: 27500,
            total_tax: 2500,
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
                type: 'Inventory',
                tax_amount: 27500,
                total_amount: 27500,
                quantity: 1,
                unit_price: 27500.5,
                unit_of_measure: 'pc.',
                discount_percentage: 0,
                item: {
                  id: '12344',
                  code: '120-C',
                  name: 'Model Y'
                },
                tax_rate: {
                  id: '123456',
                  code: 'N-T'
                },
                ledger_account: {
                  id: '123456',
                  name: 'Bank account'
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
            shipping_address: {
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
            company_name: 'The boring company'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'submitted',
          currency: 'USD',
          tax_inclusive: true,
          sub_total: 27500,
          total_tax: 2500,
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
              type: 'Inventory',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0,
              item: {
                id: '12344',
                code: '120-C',
                name: 'Model Y'
              },
              tax_rate: {
                id: '123456',
                code: 'N-T'
              },
              ledger_account: {
                id: '123456',
                name: 'Bank account'
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
          shipping_address: {
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
            id: '12345'
          },
          invoice_date: '2020-09-30',
          due_date: '2020-10-30',
          po_number: '90000117',
          status: 'submitted',
          currency: 'USD',
          tax_inclusive: true,
          sub_total: 27500,
          total_tax: 2500,
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
              type: 'Inventory',
              tax_amount: 27500,
              total_amount: 27500,
              quantity: 1,
              unit_price: 27500.5,
              unit_of_measure: 'pc.',
              discount_percentage: 0,
              item: {
                id: '12344'
              },
              tax_rate: {
                id: '123456'
              },
              ledger_account: {
                id: '123456'
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
          shipping_address: {
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
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            id: '123456'
          },
          level: 1,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
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
            nominal_code: '091',
            classification: 'asset',
            type: 'bank',
            sub_type: 'CHECKING_ACCOUNT',
            name: 'Bank account',
            fully_qualified_name: 'Asset.Bank.Checking_Account',
            description: 'Main checking account',
            opening_balance: 75000,
            current_balance: 20000,
            currency: 'USD',
            tax_type: 'USD',
            tax_rate: {
              id: '123456',
              code: 'N-T'
            },
            level: 1,
            active: true,
            header: true,
            bank_account: {
              iban: 'CH2989144532982975332',
              bic: 'AUDSCHGGXXX',
              bsb_number: '062-001',
              bank_code: 'BNH',
              account_number: '123456789',
              account_name: 'SPACEX LLC'
            },
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
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            id: '123456',
            code: 'N-T'
          },
          level: 1,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
          },
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
          nominal_code: '091',
          classification: 'asset',
          type: 'bank',
          sub_type: 'CHECKING_ACCOUNT',
          name: 'Bank account',
          fully_qualified_name: 'Asset.Bank.Checking_Account',
          description: 'Main checking account',
          opening_balance: 75000,
          current_balance: 20000,
          currency: 'USD',
          tax_type: 'USD',
          tax_rate: {
            id: '123456'
          },
          level: 1,
          active: true,
          header: true,
          bank_account: {
            iban: 'CH2989144532982975332',
            bic: 'AUDSCHGGXXX',
            bsb_number: '062-001',
            bank_code: 'BNH',
            account_number: '123456789',
            account_name: 'SPACEX LLC'
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
          accounts_receivable_account_type: 'Account',
          accounts_receivable_account_id: '123456',
          transaction_date: '2021-05-01T12:00:00.000Z',
          customer: {
            id: '12345'
          },
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              amount: 49.99
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
            currency: 'USD',
            currency_rate: 0.69,
            total_amount: 49.99,
            reference: '123456',
            accounts_receivable_account_type: 'Account',
            accounts_receivable_account_id: '123456',
            transaction_date: '2021-05-01T12:00:00.000Z',
            customer: {
              id: '12345',
              display_id: 'CUST00101',
              company_name: 'The boring company'
            },
            allocations: [
              {
                id: '123456',
                type: 'invoice',
                amount: 49.99
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
          currency: 'USD',
          currency_rate: 0.69,
          total_amount: 49.99,
          reference: '123456',
          accounts_receivable_account_type: 'Account',
          accounts_receivable_account_id: '123456',
          transaction_date: '2021-05-01T12:00:00.000Z',
          customer: {
            id: '12345',
            display_id: 'CUST00101',
            company_name: 'The boring company'
          },
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              amount: 49.99
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
          accounts_receivable_account_type: 'Account',
          accounts_receivable_account_id: '123456',
          transaction_date: '2021-05-01T12:00:00.000Z',
          customer: {
            id: '12345'
          },
          allocations: [
            {
              id: '123456',
              type: 'invoice',
              amount: 49.99
            }
          ]
        }
      } as any
      const current = await accounting.paymentsUpdate(params)

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
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          tax_payable_account_id: '123456',
          tax_remitted_account_id: '123456',
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          tax_type: 'output_gst',
          original_tax_rate_id: '12345',
          active: true,
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
            id: '12345',
            name: '15% GST on Expenses',
            code: 'ABN',
            description: 'No ABN Withholding',
            effective_tax_rate: 10,
            total_tax_rate: 10,
            tax_payable_account_id: '123456',
            tax_remitted_account_id: '123456',
            components: [
              {
                name: 'City tax',
                rate: 10,
                compound: true
              }
            ],
            tax_type: 'output_gst',
            original_tax_rate_id: '12345',
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
          id: '12345',
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          tax_payable_account_id: '123456',
          tax_remitted_account_id: '123456',
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          tax_type: 'output_gst',
          original_tax_rate_id: '12345',
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
          name: '15% GST on Expenses',
          code: 'ABN',
          description: 'No ABN Withholding',
          effective_tax_rate: 10,
          total_tax_rate: 10,
          tax_payable_account_id: '123456',
          tax_remitted_account_id: '123456',
          components: [
            {
              name: 'City tax',
              rate: 10,
              compound: true
            }
          ],
          tax_type: 'output_gst',
          original_tax_rate_id: '12345',
          active: true,
          row_version: '1-12345'
        }
      } as any
      const current = await accounting.taxRatesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

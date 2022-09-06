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

describe('AtsApi', () => {
  describe('#applicantsAdd', () => {
    const endpoint = '/ats/applicants'

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
        service: 'lever',
        resource: 'Applicants',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        applicant: {
          position_id: '123',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          middle_name: 'D.',
          initials: 'EM',
          birthday: '2000-08-12',
          cover_letter:
            'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
          photo_url: 'https://unavatar.io/elon-musk',
          headline: 'PepsiCo, Inc, Central Perk',
          title: 'CEO',
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
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
          websites: [
            {
              id: '12345',
              url: 'http://example.com',
              type: 'primary'
            }
          ],
          social_links: [
            {
              id: '12345',
              url: 'https://www.twitter.com/apideck-io',
              type: 'twitter'
            }
          ],
          stage_id: '12345',
          recruiter_id: '12345',
          coordinator_id: '12345',
          applications: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          followers: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          sources: ['Job site'],
          confidential: false,
          anonymized: true,
          tags: ['New'],
          archived: false,
          owner_id: '54321',
          record_url: 'https://app.intercom.io/contacts/12345',
          deleted: true
        }
      } as any
      const current = await ats.applicantsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#applicantsAll', () => {
    const endpoint = '/ats/applicants'

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
        service: 'lever',
        resource: 'Applicants',
        operation: 'one',
        data: [
          {
            id: '12345',
            position_id: '123',
            name: 'Elon Musk',
            first_name: 'Elon',
            last_name: 'Musk',
            middle_name: 'D.',
            initials: 'EM',
            birthday: '2000-08-12',
            cover_letter:
              'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
            job_url: 'https://democompany.recruitee.com/o/example-talent-pool',
            photo_url: 'https://unavatar.io/elon-musk',
            headline: 'PepsiCo, Inc, Central Perk',
            title: 'CEO',
            emails: [
              {
                id: '123',
                email: 'elon@musk.com',
                type: 'primary'
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
            websites: [
              {
                id: '12345',
                url: 'http://example.com',
                type: 'primary'
              }
            ],
            social_links: [
              {
                id: '12345',
                url: 'https://www.twitter.com/apideck-io',
                type: 'twitter'
              }
            ],
            stage_id: '12345',
            recruiter_id: '12345',
            coordinator_id: '12345',
            applications: [
              'a0d636c6-43b3-4bde-8c70-85b707d992f4',
              'a98lfd96-43b3-4bde-8c70-85b707d992e6'
            ],
            followers: [
              'a0d636c6-43b3-4bde-8c70-85b707d992f4',
              'a98lfd96-43b3-4bde-8c70-85b707d992e6'
            ],
            sources: ['Job site'],
            source_id: '12345',
            confidential: false,
            anonymized: true,
            tags: ['New'],
            archived: false,
            last_interaction_at: '2020-09-30T07:43:32.000Z',
            owner_id: '54321',
            sourced_by: '12345',
            cv_url:
              'https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&amp;response-content-type=application%2Fpdf&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220514T235654Z&amp;X-Amz-Expires=36000&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f',
            record_url: 'https://app.intercom.io/contacts/12345',
            rejected_at: '2020-09-30T07:43:32.000Z',
            deleted: true,
            deleted_by: '12345',
            deleted_at: '2020-09-30T07:43:32.000Z',
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

      const { ats } = apideck
      const params = {} as any
      const current = await ats.applicantsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#applicantsOne', () => {
    const endpoint = '/ats/applicants/{id}'

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
        service: 'lever',
        resource: 'Applicants',
        operation: 'one',
        data: {
          id: '12345',
          position_id: '123',
          name: 'Elon Musk',
          first_name: 'Elon',
          last_name: 'Musk',
          middle_name: 'D.',
          initials: 'EM',
          birthday: '2000-08-12',
          cover_letter:
            'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...',
          job_url: 'https://democompany.recruitee.com/o/example-talent-pool',
          photo_url: 'https://unavatar.io/elon-musk',
          headline: 'PepsiCo, Inc, Central Perk',
          title: 'CEO',
          emails: [
            {
              id: '123',
              email: 'elon@musk.com',
              type: 'primary'
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
          websites: [
            {
              id: '12345',
              url: 'http://example.com',
              type: 'primary'
            }
          ],
          social_links: [
            {
              id: '12345',
              url: 'https://www.twitter.com/apideck-io',
              type: 'twitter'
            }
          ],
          stage_id: '12345',
          recruiter_id: '12345',
          coordinator_id: '12345',
          applications: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          followers: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          sources: ['Job site'],
          source_id: '12345',
          confidential: false,
          anonymized: true,
          tags: ['New'],
          archived: false,
          last_interaction_at: '2020-09-30T07:43:32.000Z',
          owner_id: '54321',
          sourced_by: '12345',
          cv_url:
            'https://recruitee-main.s3.eu-central-1.amazonaws.com/candidates/36615291/pdf_cv_38swhu4w42k1.pdf?response-content-disposition=inline&amp;response-content-type=application%2Fpdf&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAQYHB7CA5RLR4Y3ON%2F20220514%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220514T235654Z&amp;X-Amz-Expires=36000&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=72c0621f5976db75b54de487eb821a8e73480d7f2a6a4a9713ab997944b0561f',
          record_url: 'https://app.intercom.io/contacts/12345',
          rejected_at: '2020-09-30T07:43:32.000Z',
          deleted: true,
          deleted_by: '12345',
          deleted_at: '2020-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ats.applicantsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#jobsAll', () => {
    const endpoint = '/ats/jobs'

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
        service: 'lever',
        resource: 'Jobs',
        operation: 'one',
        data: [
          {
            id: '12345',
            slug: 'ceo',
            title: 'CEO',
            sequence: 3,
            visibility: ['public'],
            status: 'completed',
            code: '123-OC',
            language: 'EN',
            employment_terms: 'full-time',
            experience: 'Director/ Vice President',
            remote: true,
            requisition_id: 'abc123',
            department: {
              id: '12345',
              name: 'R&amp;D',
              code: '2',
              description: 'R&amp;D',
              updated_by: '12345',
              created_by: '12345',
              updated_at: '2020-09-30T07:43:32.000Z',
              created_at: '2020-09-30T07:43:32.000Z'
            },
            branch: {
              id: '123',
              name: 'HQ NY'
            },
            recruiters: ['a0d636c6-43b3-4bde-8c70-85b707d992f4'],
            hiring_managers: ['123456'],
            followers: [
              'a0d636c6-43b3-4bde-8c70-85b707d992f4',
              'a98lfd96-43b3-4bde-8c70-85b707d992e6'
            ],
            description: 'A description',
            description_html: 'string',
            blocks: [
              {
                title: 'string',
                content: 'string'
              }
            ],
            closing: 'The closing section of the job description',
            closing_html: 'string',
            closing_date: '2020-10-30',
            salary: {
              min: 8000,
              max: 10000,
              currency: 'USD'
            },
            url: 'string',
            job_portal_url: 'string',
            confidential: false,
            available_to_employees: false,
            tags: ['New'],
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
            record_url: 'https://app.intercom.io/contacts/12345',
            deleted: true,
            owner_id: '54321',
            published_at: '2020-09-30T07:43:32.000Z',
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

      const { ats } = apideck
      const params = {} as any
      const current = await ats.jobsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#jobsOne', () => {
    const endpoint = '/ats/jobs/{id}'

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
        service: 'lever',
        resource: 'Jobs',
        operation: 'one',
        data: {
          id: '12345',
          slug: 'ceo',
          title: 'CEO',
          sequence: 3,
          visibility: ['public'],
          status: 'completed',
          code: '123-OC',
          language: 'EN',
          employment_terms: 'full-time',
          experience: 'Director/ Vice President',
          remote: true,
          requisition_id: 'abc123',
          department: {
            id: '12345',
            name: 'R&amp;D',
            code: '2',
            description: 'R&amp;D',
            updated_by: '12345',
            created_by: '12345',
            updated_at: '2020-09-30T07:43:32.000Z',
            created_at: '2020-09-30T07:43:32.000Z'
          },
          branch: {
            id: '123',
            name: 'HQ NY'
          },
          recruiters: ['a0d636c6-43b3-4bde-8c70-85b707d992f4'],
          hiring_managers: ['123456'],
          followers: [
            'a0d636c6-43b3-4bde-8c70-85b707d992f4',
            'a98lfd96-43b3-4bde-8c70-85b707d992e6'
          ],
          description: 'A description',
          description_html: 'string',
          blocks: [
            {
              title: 'string',
              content: 'string'
            }
          ],
          closing: 'The closing section of the job description',
          closing_html: 'string',
          closing_date: '2020-10-30',
          salary: {
            min: 8000,
            max: 10000,
            currency: 'USD'
          },
          url: 'string',
          job_portal_url: 'string',
          confidential: false,
          available_to_employees: false,
          tags: ['New'],
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
          record_url: 'https://app.intercom.io/contacts/12345',
          deleted: true,
          owner_id: '54321',
          published_at: '2020-09-30T07:43:32.000Z',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { ats } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await ats.jobsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

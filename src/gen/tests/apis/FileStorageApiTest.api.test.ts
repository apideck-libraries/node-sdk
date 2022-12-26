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

describe('FileStorageApi', () => {
  describe('#driveGroupsAdd', () => {
    const endpoint = '/file-storage/drive-groups'

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
        resource: 'DriveGroups',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        driveGroup: {
          name: 'accounting',
          display_name: 'accounting',
          description: 'A description'
        }
      } as any
      const current = await fileStorage.driveGroupsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#driveGroupsAll', () => {
    const endpoint = '/file-storage/drive-groups'

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
        resource: 'DriveGroups',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'accounting',
            display_name: 'accounting',
            description: 'A description',
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

      const { fileStorage } = apideck
      const params = {} as any
      const current = await fileStorage.driveGroupsAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#driveGroupsDelete', () => {
    const endpoint = '/file-storage/drive-groups/{id}'

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
        resource: 'DriveGroups',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.driveGroupsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#driveGroupsOne', () => {
    const endpoint = '/file-storage/drive-groups/{id}'

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
        resource: 'DriveGroups',
        operation: 'one',
        data: {
          id: '12345',
          name: 'accounting',
          display_name: 'accounting',
          description: 'A description',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.driveGroupsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#driveGroupsUpdate', () => {
    const endpoint = '/file-storage/drive-groups/{id}'

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
        resource: 'DriveGroups',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        driveGroup: {
          name: 'accounting',
          display_name: 'accounting',
          description: 'A description'
        }
      } as any
      const current = await fileStorage.driveGroupsUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#drivesAdd', () => {
    const endpoint = '/file-storage/drives'

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
        resource: 'Drives',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        drive: {
          name: 'Project Resources',
          description: 'A description'
        }
      } as any
      const current = await fileStorage.drivesAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#drivesAll', () => {
    const endpoint = '/file-storage/drives'

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
        resource: 'Drives',
        operation: 'all',
        data: [
          {
            id: '12345',
            name: 'Project Resources',
            description: 'A description',
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

      const { fileStorage } = apideck
      const params = {} as any
      const current = await fileStorage.drivesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#drivesDelete', () => {
    const endpoint = '/file-storage/drives/{id}'

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
        resource: 'Drives',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.drivesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#drivesOne', () => {
    const endpoint = '/file-storage/drives/{id}'

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
        resource: 'Drives',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Project Resources',
          description: 'A description',
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.drivesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#drivesUpdate', () => {
    const endpoint = '/file-storage/drives/{id}'

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
        resource: 'Drives',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        drive: {
          name: 'Project Resources',
          description: 'A description'
        }
      } as any
      const current = await fileStorage.drivesUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesAll', () => {
    const endpoint = '/file-storage/files'

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
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            name: 'sample.jpg',
            description: 'A sample image',
            type: 'file',
            path: '/Documents/sample.jpg',
            mime_type: 'image/jpeg',
            downloadable: true,
            size: 1810673,
            owner: {
              id: '12345',
              email: 'hello@apideck.com',
              name: 'Elon Musk'
            },
            parent_folders: [
              {
                id: '12345',
                name: 'Personal'
              }
            ],
            parent_folders_complete: true,
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

      const { fileStorage } = apideck
      const params = {} as any
      const current = await fileStorage.filesAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesDelete', () => {
    const endpoint = '/file-storage/files/{id}'

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

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesDownload', () => {
    const endpoint = '/file-storage/files/{id}/download'

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

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesDownload(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesOne', () => {
    const endpoint = '/file-storage/files/{id}'

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
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          name: 'sample.jpg',
          description: 'A sample image',
          type: 'file',
          path: '/Documents/sample.jpg',
          mime_type: 'image/jpeg',
          downloadable: true,
          size: 1810673,
          owner: {
            id: '12345',
            email: 'hello@apideck.com',
            name: 'Elon Musk'
          },
          parent_folders: [
            {
              id: '12345',
              name: 'Personal'
            }
          ],
          parent_folders_complete: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.filesOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#filesSearch', () => {
    const endpoint = '/file-storage/files/search'

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
        operation: 'all',
        data: [
          {
            id: '12345',
            downstream_id: '12345',
            name: 'sample.jpg',
            description: 'A sample image',
            type: 'file',
            path: '/Documents/sample.jpg',
            mime_type: 'image/jpeg',
            downloadable: true,
            size: 1810673,
            owner: {
              id: '12345',
              email: 'hello@apideck.com',
              name: 'Elon Musk'
            },
            parent_folders: [
              {
                id: '12345',
                name: 'Personal'
              }
            ],
            parent_folders_complete: true,
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

      const { fileStorage } = apideck
      const params = {
        filesSearch: {
          query: 'logo jpg'
        }
      } as any
      const current = await fileStorage.filesSearch(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#foldersAdd', () => {
    const endpoint = '/file-storage/folders'

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
        resource: 'Folders',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        folder: {
          name: 'Documents',
          description: 'My Personal Documents',
          parent_folder_id: '1234',
          drive_id: '1234'
        }
      } as any
      const current = await fileStorage.foldersAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#foldersCopy', () => {
    const endpoint = '/file-storage/folders/{id}/copy'

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
        resource: 'Folders',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        folder: {
          name: 'Documents',
          parent_folder_id: '1234'
        }
      } as any
      const current = await fileStorage.foldersCopy(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#foldersDelete', () => {
    const endpoint = '/file-storage/folders/{id}'

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
        resource: 'Folders',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.foldersDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#foldersOne', () => {
    const endpoint = '/file-storage/folders/{id}'

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
        resource: 'Folders',
        operation: 'one',
        data: {
          id: '12345',
          name: 'Documents',
          description: 'My Personal Documents',
          path: '/Personal/Documents',
          size: 1810673,
          owner: {
            id: '12345',
            email: 'hello@apideck.com',
            name: 'Elon Musk'
          },
          parent_folders: [
            {
              id: '12345',
              name: 'Personal'
            }
          ],
          parent_folders_complete: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.foldersOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#foldersUpdate', () => {
    const endpoint = '/file-storage/folders/{id}'

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
        resource: 'Folders',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        folder: {
          name: 'Documents',
          description: 'My Personal Documents',
          parent_folder_id: '1234'
        }
      } as any
      const current = await fileStorage.foldersUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sharedLinksAdd', () => {
    const endpoint = '/file-storage/shared-links'

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
        service: 'dropbox',
        resource: 'Shared Links',
        operation: 'add',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        sharedLink: {
          download_url: 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg',
          target_id: 'string',
          scope: 'company',
          password: 'string'
        }
      } as any
      const current = await fileStorage.sharedLinksAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sharedLinksAll', () => {
    const endpoint = '/file-storage/shared-links'

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
        service: 'dropbox',
        resource: 'Shared Links',
        operation: 'all',
        data: [
          {
            url: 'https://www.box.com/s/vspke7y05sb214wjokpk',
            download_url: 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg',
            target_id: 'string',
            target: {
              id: '12345',
              name: 'sample.jpg',
              type: 'file'
            },
            scope: 'company',
            password_protected: true,
            password: 'string',
            expires_at: '2022-09-30T07:43:32.000Z',
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

      const { fileStorage } = apideck
      const params = {} as any
      const current = await fileStorage.sharedLinksAll(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sharedLinksDelete', () => {
    const endpoint = '/file-storage/shared-links/{id}'

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
        service: 'dropbox',
        resource: 'Shared Links',
        operation: 'delete',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.sharedLinksDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sharedLinksOne', () => {
    const endpoint = '/file-storage/shared-links/{id}'

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
        service: 'dropbox',
        resource: 'Shared Links',
        operation: 'one',
        data: {
          url: 'https://www.box.com/s/vspke7y05sb214wjokpk',
          download_url: 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg',
          target_id: 'string',
          target: {
            id: '12345',
            name: 'sample.jpg',
            type: 'file'
          },
          scope: 'company',
          password_protected: true,
          password: 'string',
          expires_at: '2022-09-30T07:43:32.000Z',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.sharedLinksOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#sharedLinksUpdate', () => {
    const endpoint = '/file-storage/shared-links/{id}'

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
        service: 'dropbox',
        resource: 'Shared Links',
        operation: 'update',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        sharedLink: {
          download_url: 'https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg',
          target_id: 'string',
          scope: 'company',
          password: 'string'
        }
      } as any
      const current = await fileStorage.sharedLinksUpdate(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#uploadSessionsAdd', () => {
    const endpoint = '/file-storage/upload-sessions'

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
        service: 'dropbox',
        resource: 'UploadSessions',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        uploadSession: {
          name: 'Documents',
          parent_folder_id: '1234',
          drive_id: '1234',
          size: 1810673
        }
      } as any
      const current = await fileStorage.uploadSessionsAdd(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#uploadSessionsDelete', () => {
    const endpoint = '/file-storage/upload-sessions/{id}'

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
        service: 'dropbox',
        resource: 'UploadSessions',
        operation: 'one',
        data: {
          id: '12345'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.uploadSessionsDelete(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#uploadSessionsFinish', () => {
    const endpoint = '/file-storage/upload-sessions/{id}/finish'

    const config = {
      apiKey: 'REPLACE_WITH_API_KEY',
      appId: 'REPLACE_WITH_APP_ID',
      consumerId: 'REPLACE_WITH_CONSUMER_ID',
      digest: 'REPLACE_WITH_DIGEST'
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
        operation: 'one',
        data: {
          id: '12345',
          downstream_id: '12345',
          name: 'sample.jpg',
          description: 'A sample image',
          type: 'file',
          path: '/Documents/sample.jpg',
          mime_type: 'image/jpeg',
          downloadable: true,
          size: 1810673,
          owner: {
            id: '12345',
            email: 'hello@apideck.com',
            name: 'Elon Musk'
          },
          parent_folders: [
            {
              id: '12345',
              name: 'Personal'
            }
          ],
          parent_folders_complete: true,
          updated_by: '12345',
          created_by: '12345',
          updated_at: '2020-09-30T07:43:32.000Z',
          created_at: '2020-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example',
        uploadSessionsFinish: {}
      } as any
      const current = await fileStorage.uploadSessionsFinish(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('#uploadSessionsOne', () => {
    const endpoint = '/file-storage/upload-sessions/{id}'

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
        service: 'dropbox',
        resource: 'UploadSessions',
        operation: 'one',
        data: {
          id: '12345',
          success: true,
          part_size: 1000000,
          parallel_upload_supported: true,
          uploaded_byte_range: '0-42',
          expires_at: '2022-09-30T07:43:32.000Z'
        }
      } as any

      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        Promise.resolve(new Response(JSON.stringify(mockedResponse)))
      )

      const { fileStorage } = apideck
      const params = {
        id: 'id_example'
      } as any
      const current = await fileStorage.uploadSessionsOne(params)

      expect(fetch).toHaveBeenCalledTimes(1)
    })
  })
})

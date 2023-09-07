import {defineStore} from 'pinia'

export const useStatusStore = defineStore('status', {
  state: () => {
    return {
      uploading: false,
      endPointUpdated: 0,
      uploadedFiles: []
    }
  }
})

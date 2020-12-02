import actions, { config, API_URL } from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    it('survey state should be sent to the api and submission status updated appropriately', async () => {
      const state = {
        name: 'john doe',
        goals: ['many'],
        diet: ['no'],
        dob: ''
      }
      const commitMock = jest.fn()

      axios.post.mockImplementationOnce(() => Promise.resolve('cool beans'))
      await actions.sendToApi({ commit: commitMock, state })
      expect(axios.post).toHaveBeenCalledWith(`${API_URL}/users`, { user: { ...state, diet: 'no' } }, config)
      expect(commitMock).toHaveBeenCalledWith('setSubmissionLoading')
      expect(commitMock).toHaveBeenCalledWith('setSubmissionSuccess')
    })

    it('rejected api submissions should trigger an error', async () => {
      const state = {
        name: 'john doe',
        goals: ['many'],
        diet: ['no'],
        dob: ''
      }
      const commitMock = jest.fn()
      axios.post.mockImplementationOnce(() => Promise.reject(new Error('uncool beans')))
      actions.sendToApi({ commit: commitMock, state }).catch(() => {
        expect(commitMock).toHaveBeenCalledWith('setSubmissionLoading')
        expect(commitMock).toHaveBeenCalledWith('setSubmissionError', 'an error occured')
      })
    })
  })
})

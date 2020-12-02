export const STATUS = {
  INITIAL: 'INITIAL',
  'IN-PROGRESS': 'IN-PROGRESS',
  ERROR: 'ERROR',
  OK: 'OK'
}

export const initialState = {
  name: '',
  goals: [],
  diet: [],
  dob: '',
  currentStep: 0,
  submissionStatus: STATUS.INITIAL,
  submissionError: ''

}

const state = () => ({
  ...initialState
})

export default state

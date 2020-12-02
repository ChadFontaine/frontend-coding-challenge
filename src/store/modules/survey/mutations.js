import { STATUS, initialState } from './state'

export default {
  setName (state, name) {
    state.name = name
  },
  addGoal (state, goal) {
    state.goals = [...state.goals, goal]
  },
  removeGoal (state, item) {
    state.goals = state.goals.filter(goal => goal !== item)
  },
  addDiet (state, diet) {
    state.diet = [...state.diet, diet]
  },
  removeDiet (state, item) {
    state.diet = state.diet.filter(diet => diet !== item)
  },
  setDOB (state, item) {
    state.dob = item
  },
  setCurrentStep (state, step) {
    state.currentStep = step
  },
  setSubmissionLoading (state) {
    state.submissionStatus = STATUS['IN-PROGRESS']
  },
  setSubmissionError (state, error) {
    state.submissionStatus = STATUS.ERROR
    state.submissionError = error
  },
  setSubmissionSuccess (state) {
    state.submissionStatus = STATUS.OK
  },
  resetSurvey (state) {
    Object.assign(state, initialState)
  }
}

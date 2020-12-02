import axios from 'axios'
export const API_URL = 'http://localhost:3000'
export const STEP_NAMES = ['Name', 'Goals', 'Diet', 'Dob', 'Success']
export const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export default {
  async sendToApi ({ commit, state }) {
    const body = {
      user: {
        name: state.name,
        goals: state.goals,
        diet: state.diet[0],
        dob: state.dob
      }
    }

    try {
      commit('setSubmissionLoading')
      await axios.post(`${API_URL}/users`, body, config)
      commit('setSubmissionSuccess')
    } catch (err) {
      if (err?.response?.data?.error) {
        commit('setSubmissionError', err.response.data.error)
      } else {
        commit('setSubmissionError', 'an error occured')
      }
      return Promise.reject(err)
    }
  },
  toggleGoal ({ commit, state }, goal) {
    if (state.goals.includes(goal)) {
      return commit('removeGoal', goal)
    }
    return commit('addGoal', goal)
  },
  toggleDiet ({ commit, state }, diet) {
    if (state.diet.includes(diet)) {
      return commit('removeDiet', diet)
    }
    return commit('addDiet', diet)
  },
  setCurrentStep ({ commit }, step) {
    const stepIndex = STEP_NAMES.indexOf(step)
    // TODO: handle if step is not found for whatever reason
    return commit('setCurrentStep', stepIndex + 1)
  }
}

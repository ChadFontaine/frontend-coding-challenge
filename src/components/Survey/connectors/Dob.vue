<script>
import ThvButton from '@/components/Shared/Button'
import DobInput from '@/components/Shared/DobInput'

export default {
  name: 'Dob',
  components: {
    DobInput,
    ThvButton
  },
  data () {
    return {
      dob: this.$store.getters['survey/dob']
    }
  },
  created () {
    this.$store.dispatch('survey/setCurrentStep', this.$options.name)
  },
  computed: {
    submissionError () {
      return this.$store.getters['survey/submissionError']
    },
    disableNext () {
      let under18 = this.$refs.DobInput && this.$refs.DobInput.ageError
      return (
        this.dob === '' || this.errors.items.length > 0 || under18 === true
      )
    },
    feedback () {
      if (this.$refs.DobInput && this.$refs.DobInput.ageError) {
        return 'You must be over 18'
      }
      // give priority to submission errors
      if (this.submissionError) return this.submissionError
      return this.errors.items.length > 0 ? this.errors.items[0].msg : ''
    }
  },
  methods: {
    async handleSurveySubmission () {
      try {
        await this.$store.dispatch('survey/sendToApi')
        this.$router.push('/success')
      } catch (err) {
        // error is already handled in the sendToApi action
      }
    },
    submit () {
      this.$refs.DobInput.handleSubmit()
      this.$validator.reset()
      this.$validator.validate().then(result => {
        if (result && !this.feedback) {
          this.$store.commit('survey/setDOB', this.dob)
          this.handleSurveySubmission()
        }
      })
    },
    back () {
      this.$router.push('/diet')
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__dob align-center">
        <h1>How old are you?</h1>
        <div class="spacer sp__top--sm"></div>
        <p class="body--large question-description">
          This helps us recommend the best test for you. We know it's a bit
          forward but our lips are sealed!
        </p>
        <div class="spacer sp__top--sm"></div>
        <dob-input
          class="align-center survey-input"
          v-model="dob"
          ref="DobInput"
          v-validate="'required'"
          data-vv-value-path="dob"
          :value="dob"
          name="dob"
          :error="errors.has('dob')"
          minAge="18"
          :feedback="feedback"
          @keyup.enter="submit"
          label=""
        ></dob-input>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button
              element="button"
              :disabled="disableNext"
              size="large"
              @click="submit"
              >Next</thv-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.survey-questions__dob .input__dob .input__group .input__dob__day,
.survey-questions__dob .input__dob .input__group .input__dob__month,
.survey-questions__dob .input__dob .input__group .input__dob__year {
  max-width: 300px;
}
.survey-questions__dob .input__feedback {
  text-align: left;
}
</style>

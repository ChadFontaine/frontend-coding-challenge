<script>
import ThvButton from '@/components/Shared/Button'
import ThrivalingImg from '@/assets/images/thrivaling.png'

const DATE_FORMAT = { day: 'numeric', month: 'numeric', year: 'numeric' }

export default {
  name: 'Success',
  created () {
    this.$store.dispatch('survey/setCurrentStep', this.$options.name)
  },
  components: {
    ThvButton,
    ThrivalingImg
  },
  methods: {
    startOver () {
      this.$store.commit('survey/resetSurvey')
      this.$router.push('/name')
    }
  },
  computed: {
    imgSrc () {
      return ThrivalingImg
    },
    surveyValues () {
      return [
        {
          name: 'Name',
          value: this.$store.getters['survey/name']
        },
        {
          name: 'Goals',
          value: this.$store.getters['survey/goals'].join(', ')
        },
        {
          name: 'Diet',
          value: this.$store.getters['survey/diet'][0]
        },
        {
          name: 'DOB',
          value: new Intl.DateTimeFormat('default', DATE_FORMAT).format(new Date(this.$store.getters['survey/dob']))
        }
      ]
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="spacer sp__top--xs"></div>
      <div class="survey-questions__goals align-center">
        <img :src="imgSrc" height="150px" />
        <div class="spacer sp__top--xs"></div>
        <h1>All done!</h1>
        <div class="spacer sp__top--xs"></div>
        <p>
          Thank you for completing the survey. The following results have been
          submitted:
        </p>
        <div class="spacer sp__top--sm"></div>
      </div>
      <section class="summary-card">
        <ul class="results">
          <li class="result-item" v-for="n in surveyValues" :key="n.name">
            <p class="result-label">{{ n.name }}</p>
            <p class="result-value">{{ n.value }}</p>
          </li>
        </ul>
        <thv-button
          class="align-center"
          element="button"
          size="large"
          @click="startOver"
          >Start over</thv-button
        >
      </section>
    </div>
  </div>
</template>

<style lang="css">
.summary-card {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0.375rem 1.25rem rgba(61, 66, 80, 0.18);
}
.result-label {
  color: #99a2b5;
  font-size: 14px;
  margin-bottom: 2px;
}
.result-value {
  color: #3d4250;
  font-size: 16px;
}
.result-item {
  margin-bottom: 20px;
}
.result-item:last-of-type {
  margin-bottom: 0px;
}
.results {
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

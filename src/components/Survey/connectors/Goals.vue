<script>
import CheckButton from '@/components/Survey/components/CheckButton'
import ThvButton from '@/components/Shared/Button'

export default {
  name: 'Goals',
  components: {
    ThvButton,
    CheckButton
  },
  // props: {
  //   name: {
  //     type: String,
  //     default: ''
  //   }
  // },
  data () {
    return {
      goals: {
        improveEnergy: {
          name: 'Energy'
        },
        improveFitness: {
          name: 'Fitness'
        },
        improveLongTermHealth: {
          name: 'Long-term health'
        },
        improveMood: {
          name: 'Mood'
        },
        improveSleep: {
          name: 'Sleep'
        },
        improveWeight: {
          name: 'Weight'
        }
      }
    }
  },
  created () {
    this.$store.dispatch('survey/setCurrentStep', this.$options.name)
  },
  methods: {
    toggleGoal (goal) {
      this.$store.dispatch('survey/toggleGoal', goal)
    },
    submit () {
      if (this.minGoalsSelected) {
        this.$router.push('/diet')
      }
    },
    back () {
      this.$router.push('/name')
    },
    isSelected (value) {
      return this.$store.getters['survey/goals'].includes(value)
    }
  },
  computed: {
    name () {
      return this.$store.getters['survey/name']
    },
    minGoalsSelected () {
      return (
        this.$store.getters['survey/goals'].length > 0 &&
        this.$store.getters['survey/goals'].length <= 4
      )
      // TODO TIDY THIS UP
    },
    maxGoalsSelected () {
      return this.$store.getters['survey/goals'].length === 4
      // TODO CREATE CONSTANTS FOR MIN AND MAX
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button
          v-for="(goal, key) in goals"
          :key="key"
          :value="goal.name"
          :id="goal.name"
          :text="goal.name"
          :disabled="maxGoalsSelected && !isSelected(goal.name)"
          :selected="isSelected(goal.name)"
          v-on:handleToggle="toggleGoal"
        ></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button
              element="button"
              size="large"
              :disabled="!minGoalsSelected"
              @click="submit"
              >Next</thv-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

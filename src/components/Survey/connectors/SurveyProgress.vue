<script>
import ProgressBar from '@/components/Shared/ProgressBar'
import { STEP_NAMES } from '../../../store/modules/survey/actions'

export default {
  name: 'SurveyProgress',
  data () {
    return {
      stages: STEP_NAMES
    }
  },
  computed: {
    currentStep () {
      return this.$store.getters['survey/currentStep']
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<template>
  <div class="progress-bar-container">
    <progress-bar
      :currentStep="currentStep"
      :totalSteps="stages.length"
    ></progress-bar>
  </div>
</template>

<style lang="css">
.progress-bar-container {
  display: flex;
  flex-wrap: nowrap;
  width: 80px;
  align-items: center;
}
</style>


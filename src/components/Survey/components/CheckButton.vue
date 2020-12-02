<script>
export default {
  name: 'CheckButton',
  props: {
    text: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    onCheckToggle () {
      this.$emit('handleToggle', this.value)
    }
  }
}
</script>

<template>
  <div>
    <input
      type="checkbox"
      :id="id"
      :value="value"
      :checked="selected"
      :disabled="disabled"
      class="visibility-hidden"
      tabindex="0"
      @change="onCheckToggle"
    />
    <label
      :for="id"
      class="check-button check-button__text body--large"
      :class="{
        'check-button--selected': selected,
        'check-button--disabled': disabled
      }"
      >{{ text }}</label
    >
  </div>
</template>

<style lang="css">
.check-button {
  background: #fff;
  border: 1px solid #ced0d9;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: 400;
  transition: 0.2s;
  padding: 0 10px;
  border-radius: 0.25rem;
}
.visibility-hidden {
  opacity: 0;
}
@media (min-width: 768px) {
  .check-button {
    height: 120px;
    margin-bottom: 20px;
  }
}

.check-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
}

/* .check-button:focus {
  box-shadow: 0 0 3px 3px rgba(62, 202, 221, 0.5);
  outline: none;
} */

/* labels are by default not focussable fields */
input[type="checkbox"]:focus + label.check-button {
  box-shadow: 0 0 3px 3px rgba(62, 202, 221, 0.5);
  outline: none;
}

.check-button--selected {
  border: 2px solid #3ecadd;
  background: #f4fcfd;
  box-shadow: none;
}

.check-button--disabled {
  border: 1px solid #e5e7f1;
  background: #fff;
  box-shadow: none;
  color: #ced0d9;
}

.check-button--disabled:hover {
  outline: none;
}

.check-button__text {
  color: #3d4250;
}
</style>

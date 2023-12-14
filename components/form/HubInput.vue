<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  modelValue: {
            type: String,
            default: '',
            required: true
        }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label :for="props.name">{{props.name.charAt(0).toUpperCase() + props.name.slice(1)}}.</label>
  <input
      :id="props.name"
      :type="props.type"
      :value="modelValue"
      :name="props.name"
      :required="props.required"
      :placeholder="`enter ${props.name}`"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<style lang="scss">
label {
  @include font(1.6,null,medium)
}
input{
  background: none;
  border-width: 0 0 0.1rem 0;
  margin-bottom: 2rem;
  padding: 1rem 0;
  color: var(--color-accent);
}
</style>

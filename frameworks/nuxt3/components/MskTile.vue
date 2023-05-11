<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'MskTile',
  props: {
    class: {
      type: String,
      default: '',
    },
    kind: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'outline', 'ghost'].includes(value)
      },
    },
    clickable: {
      type: String,
      default: 'none',
      validator: (value: string) => {
        return ['none', 'link', 'button'].includes(value)
      },
    },
    href: {
      type: String,
      default: '/',
    },
  },
  setup: (props) => ({
    classComputed: computed(() => ({
      [props.class]: props.class !== undefined,
      'msk-tile': true,
      'msk-tile-clickable': props.clickable !== 'none',
      [`msk-tile-${props.kind}`]: true,
    })),
  }),
})
</script>

<template>
  <div class="msk-tile-wrapper">
    <a v-if="clickable === 'link'" :class="classComputed" :href="href">
      <slot />
    </a>
    <a v-if="clickable === 'button'" :class="classComputed" :href="href">
      <slot />
    </a>
    <div v-else :class="classComputed">
      <slot />
    </div>
  </div>
</template>

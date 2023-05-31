<template>
  <li class="msk-header-app-nav-li">
    <a
      class="msk-header-app-nav-item"
      :class="{ active: active }"
      :href="props.path"
      tabindex="0"
    >
      <span class="msk-header-app-nav-item-text">{{ props.name }}</span>
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  path: String,
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
    <button class="msk-header-controls-button" :class="{ active: active }">
        <span class="msk-icon">{{ props.icon }}</span>
    </button>
</template>

<script setup>
const props = defineProps({
    icon: String,
    active: Boolean,
});
</script>

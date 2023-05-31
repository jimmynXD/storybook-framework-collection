<script setup lang="ts">
import MskHeader from '@/components/MskHeader/MskHeader.vue'
import { routes } from 'vue-router/auto/routes'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header> -->
  <msk-header :navItems="routes" productName="something" />

  <RouterView />
</template>

<style>
@import '@mskcc/fundamentals/css/styles-all.css';
@import '@mskcc/components/css/styles-all.css';
</style>

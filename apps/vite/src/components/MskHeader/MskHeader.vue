<template>
  <div class="msk-header">
    <a class="msk--skip-to-content" :href="skipHref" tabindex="0">
      Skip to main content
    </a>
    <div
      class="msk-header-container"
      :class="{
        'msk-header-container-2400': maxWidth === 'max',
        'msk-header-container-fluid': maxWidth === 'fluid',
      }"
    >
      <div class="msk-header-content">
        <div class="msk-header-product">
          <slot name="product">
            <a class="msk-header-product-link" :href="logoHref">
              <span class="msk-header-product-logo-container">
                <slot name="logo">
                  <img class="msk-header-product-logo" :src="logoSrc" />
                </slot>
              </span>
              <span class="msk-header-product-name">
                <slot name="productName">{{ productName }}</slot>
              </span>
            </a>
          </slot>
        </div>
        <div class="msk-header-app-menu">
          <slot name="appMenu">
            <ul ref="ulref" v-if="navItems" class="msk-header-app-nav">
              <li
                v-for="(nav, navIndex) in navItems"
                :key="navIndex"
                class="msk-header-app-nav-li"
              >
                <a
                  class="msk-header-app-nav-item"
                  :href="nav.path"
                  tabindex="0"
                >
                  <span class="msk-header-app-nav-item-text">{{
                    nav.name
                  }}</span>
                </a>
              </li>
            </ul>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { routes } from 'vue-router/auto/routes'

const widthTypes = ['default', 'max', 'fluid']

export default defineComponent({
  name: 'MskHeader',
  props: {
    skipHref: {
      type: String,
      default: 'javascript: void;',
    },
    logoHref: {
      type: String,
      default: '/',
    },
    logoSrc: {
      type: String,
      default:
        'https://cdn.jsdelivr.net/npm/@mskcc/fundamentals@latest/dist/logo/assets/logo-arrow-sans-medium-navy.svg',
    },
    productName: {
      type: String,
      default: 'Product Name',
    },
    maxWidth: {
      type: String,
      validator: (val: string) => widthTypes.includes(val),
      default: 'default',
    },
    // use types from routes
    navItems: {
      type: Array as () => typeof routes,
    },
    controlItems: {
      type: Array,
    },
  },
})
</script>

<style lang="scss">
.msk-header-app-nav {
  margin-right: 52px;
}

.msk-header-app-menu {
  position: relative;
}

.msk-header-app-nav-overflow {
  position: absolute;
  right: 0;
}

.wip-overflow {
  position: fixed;
  right: 0;
  top: 0;
  padding: 2rem;
  background-color: #ff0000;
  color: #ffffff;
}
</style>

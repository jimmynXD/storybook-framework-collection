<template>
  <div class="msk-galaxy">
    <div class="msk-world">
      <slot name="header" />
      <div :class="`msk-layout-${layout}`">
        <div :class="`msk-layout-${layout}`">
          <div
            :class="`msk-layout-${layout}-slot msk-layout-${layout}-slot-main`"
          >
            <div :class="`msk-layout-${layout}-slot-container`">
              <div :class="`msk-layout-${layout}-slot-content`"><slot /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="msk-layout-bottom-slot">
      only show footer
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/* Bookworm layout
 * 2400px max • 12 columns • 1 slot
 * Bookworm is a wide central container for dense applications.
 *
 * Potato layout
 * 144px max • 12 columns • 1 slot
 * The Potato layout is a single slot container that uses all
 * 12 columns.
 *
 * Sarge layout
 * 1440px max • 12 columns • 1 slot
 * The Sarge layout focuses the user by skipping 2 of the 12
 * columns when content does not flow very much horizontally.
 */
export default defineComponent({
  name: 'MskPageLayout',
  props: {
    layout: {
      type: String,
      validator: (value: string) =>
        ['sarge', 'bookworm', 'potato'].includes(value),
      default: 'bookworm',
    },
  },
})
</script>

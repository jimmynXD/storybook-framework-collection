<script setup></script>

<template>
  <MskPageLayout layout="bookworm">
    <MskTile kind="default">
      <div class="msk-tile-content">
        <h3>Title</h3>
        <p>Content goes here</p>
      </div>
    </MskTile>
  </MskPageLayout>
</template>

<style lang="scss">
@import '@mskcc/components/scss/tile.scss';

.msk-tile-content {
  padding: 1rem;
}
</style>

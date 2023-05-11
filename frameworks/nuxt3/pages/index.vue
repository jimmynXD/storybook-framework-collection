<script setup></script>

<template>
  <PageLayout layout="bookworm">
    <MskTile kind="default">
      <div class="msk-tile-content">
        <h3>Title</h3>
        <p>Content goes here</p>
      </div>
    </MskTile>
  </PageLayout>
</template>

<style lang="scss">
@import '@mskcc/components/scss/tile.scss';

.msk-tile-content {
  padding: 1rem;
}
</style>

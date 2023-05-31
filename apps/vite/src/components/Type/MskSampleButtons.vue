<template>
    <div>
        <div>
            <CvButton kind="primary">
                Button label
            </CvButton>

            <CvButton kind="primary" class="msk-button-icon-left">
                <span class="msk-icon">add</span>
                Left icon
            </CvButton>

            <CvButton kind="primary" class="msk-button-icon-top">
                Top icon
                <span class="msk-icon">calendar_today</span>
            </CvButton>

            <CvButton kind="primary" class="msk-button-icon-right">
                Right icon
                <span class="msk-icon">add</span>
            </CvButton>

            <CvButton kind="primary" class="bx--btn-icon-only">
                <span class="msk-icon">chat_bubble</span>
                <span class="msk-sr-only">Write your own button description for screen readers</span>
            </CvButton>
        </div>
    </div>
</template>

<script>
import { CvButton } from '@carbon/vue';
export default {
    name: 'SampleCheckbox',
    components: {
        CvButton
    }
};
</script>

<style lang="scss">
</style>

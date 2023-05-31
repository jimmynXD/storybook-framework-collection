<template>
    <fieldset className="bx--fieldset">
        <CvCheckbox
            value="none"
            v-for="item in languages"
            :key="item.id"
            :label="item.labelText"
        />
    </fieldset>
</template>

<script>
import { CvCheckbox } from '@carbon/vue';

export default {
    name: 'MskSampleCheckbox',
    components: {
        CvCheckbox,
    },
    data: function () {
        return {
            languages: [
                {
                    labelText: 'English',
                    count: 597,
                },
                {
                    labelText: 'Spanish',
                    count: 152,
                },
                {
                    labelText: 'Russian',
                    count: 95,
                },
                {
                    labelText: 'Chinese (Simplified)',
                    count: 24,
                },
                {
                    labelText: 'Hebrew',
                    count: 7,
                },
                {
                    labelText: 'Yiddish',
                    count: 6,
                },
                {
                    labelText: 'Arabic',
                    count: 5,
                },
                {
                    labelText: 'Polish',
                    count: 5,
                },
                {
                    labelText: 'Korean',
                    count: 4,
                },
                {
                    labelText: 'Chinese (Traditional)',
                    count: 3,
                },
                {
                    labelText: 'Greek',
                    count: 1,
                },
                {
                    labelText: 'Turkish',
                    count: 1,
                },
                {
                    labelText: 'German',
                    count: 1,
                },
                {
                    labelText: 'Italian',
                    count: 1,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
fieldset {
    border: none;
}
</style>

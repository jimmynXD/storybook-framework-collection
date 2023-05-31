<template>
    <div>
        <CvSlider
            :disabled="!msksans"
            v-model="slider.h1"
            :label="`H1 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.h2"
            :label="`H2 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            :disabled="!msksans"
            v-model="slider.h3"
            :label="`H3 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.h4"
            :label="`H4 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.h5"
            :label="`H5 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.h6"
            :label="`H6 ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.p"
            :label="`P ${title} ${unit.toUpperCase()}`"
            :max="max"
            :min="min"
            :step="step"
        />
    </div>
</template>
<script>
import { CvSlider } from '@carbon/vue';
export default {
    name: 'MskExampleStyleSlider',
    components: {
        CvSlider,
    },
    props: {
        name: {
            type: String,
            default: 'fontSize',
        },
        unit: {
            type: String,
            default: '',
        },
        step: {
            type: String,
            default: '1',
        },
        h1: {
            type: String,
            default: '38',
        },
        h2: {
            type: String,
            default: '32',
        },
        h3: {
            type: String,
            default: '26',
        },
        h4: {
            type: String,
            default: '22',
        },
        h5: {
            type: String,
            default: '18',
        },
        h6: {
            type: String,
            default: '16',
        },
        p: {
            type: String,
            default: '18',
        },
        min: {
            type: String,
            default: '12',
        },
        max: {
            type: String,
            default: '60',
        },
        msksans: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            slider: {
                p: this.p || '16',
                h1: this.h1 || '38',
                h2: this.h2 || '32',
                h3: this.h3 || '26',
                h4: this.h4 || '22',
                h5: this.h5 || '18',
                h6: this.h6 || '16',
            },
        };
    },

    watch: {
        slider: {
            handler: function (values) {
                this.$store.commit('styles/updateStyles', {
                    ...this.getStyleValues(values, ''),
                });
                this.$emit('updateStyles', this.styleVars);
            },
            deep: true,
        },

        '$store.state.styles': {
            handler: function (values) {
                if (values) {
                    this.mappedStoreValues(values);
                }
            },
            deep: true,
        },
    },

    computed: {
        title() {
            return this.name
                .split(/\.?(?=[A-Z])/)
                .join(' ')
                .toUpperCase();
        },
        getStyleName() {
            return this.title.split(' ').join('-').toLowerCase();
        },
        styleVars() {
            return this.getStyleValues(this.slider, this.unit);
        },
    },

    methods: {
        getStyleValues(values, unit = '') {
            return {
                [`--h1-${this.getStyleName}`]: `${values.h1}${unit}`,
                [`--h2-${this.getStyleName}`]: `${values.h2}${unit}`,
                [`--h3-${this.getStyleName}`]: `${values.h3}${unit}`,
                [`--h4-${this.getStyleName}`]: `${values.h4}${unit}`,
                [`--h5-${this.getStyleName}`]: `${values.h5}${unit}`,
                [`--h6-${this.getStyleName}`]: `${values.h6}${unit}`,
                [`--p-${this.getStyleName}`]: `${values.p}${unit}`,
            };
        },

        mappedStoreValues(storeValues) {
            const styles = {
                h1: storeValues[`--h1-${this.getStyleName}`] || this.slider.h1,
                h2: storeValues[`--h2-${this.getStyleName}`] || this.slider.h2,
                h3: storeValues[`--h3-${this.getStyleName}`] || this.slider.h3,
                h4: storeValues[`--h4-${this.getStyleName}`] || this.slider.h4,
                h5: storeValues[`--h5-${this.getStyleName}`] || this.slider.h5,
                h6: storeValues[`--h6-${this.getStyleName}`] || this.slider.h6,
                p: storeValues[`--p-${this.getStyleName}`] || this.slider.p,
            };

            this.slider = styles;

            this.$emit('updateStyles', this.styleVars);
        },
    },

    mounted() {
        this.mappedStoreValues(this.$store.state.styles);
    },
};
</script>

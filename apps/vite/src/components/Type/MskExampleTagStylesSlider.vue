<template>
    <div>
        <CvSlider
            :disabled="!msksans"
            v-model="slider.weight"
            label="Weight"
            max="900"
            min="100"
            step="1"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.width"
            label="Width"
            max="1000"
            min="1"
            step="1"
        />
        <CvSlider
            :disabled="!msksans"
            v-model="slider.fontSize"
            label="Font size PX"
            max="60"
            min="12"
            step="1"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.lineHeight"
            label="Line height"
            max="3.00"
            min="0.5"
            step="0.05"
        />
        <CvSlider
            class="dsm-wider-field"
            :disabled="!msksans"
            v-model="slider.letterSpacing"
            label="Letter spacing REM"
            max="0.25"
            min="-0.25"
            step="0.01"
        />
    </div>
</template>
<script>
import { CvFormGroup, CvSlider } from '@carbon/vue';
export default {
    name: 'ExampleTagStylesSlider',
    components: {
        CvSlider,
        CvFormGroup,
    },
    props: {
        name: {
            type: String,
            default: 'h1',
        },
        fontSize: {
            type: String,
            default: '16',
        },
        lineHeight: {
            type: String,
            default: '1',
        },
        letterSpacing: {
            type: String,
            default: '0',
        },
        weight: {
            type: String,
            default: '400',
        },
        width: {
            type: String,
            default: '1000',
        },
        msksans: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            slider: {
                fontSize: this.fontSize || '16',
                lineHeight: this.lineHeight || '1',
                letterSpacing: this.letterSpacing || '0',
                weight: this.weight || '400',
                width: this.width || '1000',
            },
        };
    },

    watch: {
        slider: {
            handler: function (values) {
                this.$store.commit('styles/updateStyles', {
                    ...this.getStyleValues(values, false),
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
        styleVars() {
            return this.getStyleValues(this.slider);
        },
    },

    methods: {
        getStyleValues(values, unit = true) {
            const fontUnit = !unit ? '' : 'px';
            const letterSpacingUnit = !unit ? '' : 'em';
            return {
                [`--${this.name}-font-size`]: `${values.fontSize}${fontUnit}`,
                [`--${this.name}-line-height`]: `${values.lineHeight}`,
                [`--${this.name}-letter-spacing`]: `${values.letterSpacing}${letterSpacingUnit}`,
                [`--${this.name}-weight`]: `${values.weight}`,
                [`--${this.name}-width`]: `${values.width}`,
            };
        },

        mappedStoreValues(storeValues) {
            const styles = {
                fontSize:
                    storeValues[`--${this.name}-font-size`] ||
                    this.slider.fontSize,
                lineHeight:
                    storeValues[`--${this.name}-line-height`] ||
                    this.slider.lineHeight,
                letterSpacing:
                    storeValues[`--${this.name}-letter-spacing`] ||
                    this.slider.letterSpacing,
                weight:
                    storeValues[`--${this.name}-weight`] || this.slider.weight,
                width: storeValues[`--${this.name}-width`] || this.slider.width,
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

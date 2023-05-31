<template>
  <div>
    <page-layout :layout="layout" class="dsm-tooltip-demo">
      <div class="msk-layout-bookworm-slot msk-layout-bookworm-slot-main">
        <div class="msk-layout-bookworm-slot-container">
          <div class="msk-layout-bookworm-slot-content dsm-type-page">
            <aside class="msk-layout-bookworm-slot dsm-type-slot-left">
              <div class="msk-layout-bookworm-slot-container">
                <div class="msk-layout-bookworm-slot-content">
                  <cv-text-area
                    label="Sample text"
                    v-model="message"
                    placeholder="Sample text"
                    :light="light"
                  />

                  <CvCheckbox
                    id="msksans"
                    value="msksans"
                    label="MSK Sans"
                    v-model="msksans"
                  />
                  <div>
                    <cv-accordion ref="acc">
                      <cv-accordion-item>
                        <template slot="title"> Font Size </template>
                        <template slot="content">
                          <MskExampleStyleSlider
                            :msksans="msksans"
                            name="fontSize"
                            unit="px"
                            min="12"
                            max="60"
                            step="1"
                            @updateStyles="
                              (vars) => updateStyles('fontSize', vars)
                            "
                          />
                        </template>
                      </cv-accordion-item>

                      <cv-accordion-item>
                        <template slot="title"> Font Weight </template>
                        <template slot="content">
                          <MskExampleStyleSlider
                            :msksans="msksans"
                            name="weight"
                            unit=""
                            p="400"
                            h1="400"
                            h2="400"
                            h3="400"
                            h4="500"
                            h5="500"
                            h6="500"
                            max="900"
                            min="100"
                            step="1"
                            @updateStyles="
                              (vars) => updateStyles('fontWeight', vars)
                            "
                          />
                        </template>
                      </cv-accordion-item>

                      <cv-accordion-item>
                        <template slot="title"> Line Height </template>
                        <template slot="content">
                          <MskExampleStyleSlider
                            :msksans="msksans"
                            name="lineHeight"
                            unit=""
                            p="1.7"
                            h1="1"
                            h2="1"
                            h3="1.4"
                            h4="1.5"
                            h5="1.5"
                            h6="1.6"
                            max="3.00"
                            min="0.5"
                            step="0.05"
                            @updateStyles="
                              (vars) => updateStyles('lineHeight', vars)
                            "
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> Letter Spacing </template>
                        <template slot="content">
                          <MskExampleStyleSlider
                            :msksans="msksans"
                            name="letterSpacing"
                            unit="em"
                            p="0"
                            h1="0"
                            h2="0"
                            h3="0"
                            h4="0"
                            h5="0"
                            h6="0"
                            max="0.25"
                            min="-0.25"
                            step="0.01"
                            @updateStyles="
                              (vars) => updateStyles('letterSpacing', vars)
                            "
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> Margins </template>
                        <template slot="content">
                          <CvFormGroup>
                            <template slot="label">h1 margin: x 0</template>
                            <template slot="content">
                              <CvSlider
                                class="dsm-wider-field"
                                :disabled="!msksans"
                                v-model="extraStyles.h1VerticalMargin"
                                label="h1 vertical margin"
                                max="2"
                                min="0"
                                step="0.01"
                              />
                            </template>
                          </CvFormGroup>
                          <CvFormGroup>
                            <template slot="label">
                              .msk-margins margin-top
                            </template>
                            <template slot="content">
                              <CvSlider
                                :disabled="!msksans"
                                v-model="extraStyles.hxpluspMargin"
                                label="hx + p"
                                max="40"
                                min="0"
                                step="1"
                              />
                              <CvSlider
                                :disabled="!msksans"
                                v-model="extraStyles.marginsStarH"
                                label="* + hx"
                                max="40"
                                min="0"
                                step="1"
                              />
                              <CvSlider
                                :disabled="!msksans"
                                v-model="extraStyles.marginsStarStar"
                                label="* + *"
                                max="40"
                                min="0"
                                step="1"
                              />
                              <CvSlider
                                :disabled="!msksans"
                                v-model="extraStyles.marginsP"
                                label="p"
                                max="40"
                                min="0"
                                step="1"
                              />
                              <CvSlider
                                :disabled="!msksans"
                                v-model="extraStyles.marginsList"
                                label="ul ul, li + li"
                                max="40"
                                min="0"
                                step="1"
                              />
                            </template>
                          </CvFormGroup>
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> P </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="p"
                            fontSize="18"
                            lineHeight="1.7"
                            weight="400"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('p', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H1 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h1"
                            fontSize="38"
                            lineHeight="1"
                            weight="400"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h1', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H2 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h2"
                            fontSize="32"
                            lineHeight="1"
                            weight="400"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h2', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H3 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h3"
                            fontSize="26"
                            lineHeight="1.4"
                            weight="400"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h3', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H4 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h4"
                            fontSize="22"
                            lineHeight="1.5"
                            weight="500"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h4', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H5 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h5"
                            fontSize="18"
                            lineHeight="1.5"
                            weight="500"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h5', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                      <cv-accordion-item>
                        <template slot="title"> H6 </template>
                        <template slot="content">
                          <MskExampleTagStylesSlider
                            :msksans="msksans"
                            name="h6"
                            fontSize="16"
                            lineHeight="1.5"
                            weight="500"
                            width="1000"
                            @updateStyles="(vars) => updateStyles('h6', vars)"
                          />
                        </template>
                      </cv-accordion-item>
                    </cv-accordion>
                  </div>
                </div>
              </div>
            </aside>

            <div class="dsm-type-slot-main" :style="injectVars">
              <div class="msk--display-2 dsm-display-heading">Reading</div>

              <div :class="appliedFontMargins">
                <h1>History & Milestones</h1>
                <p>{{ message }}</p>
                <p>
                  Memorial Sloan Kettering Cancer Center was founded in 1884 as
                  New York Cancer Hospital on Manhattan’s Upper West Side by a
                  group that included John J. Astor and his wife, Charlotte. In
                  1899, the name was changed to General Memorial Hospital for
                  the Treatment of Cancer and Allied Diseases. In 1916, the word
                  “General” was dropped and the new name became Memorial
                  Hospital for the Treatment of Cancer and Allied Diseases.
                </p>
                <p>
                  In 1936, the hospital began a move to our present location on
                  York Avenue, on land donated by John D. Rockefeller, Jr., and
                  the new Memorial Hospital opened in 1939. The building, which
                  was reconstructed between 1970 and 1973, stands on the site
                  today.
                </p>

                <h2>Patient Care</h2>
                <p>
                  According to US News & World Report, Memorial Sloan Kettering
                  has ranked as one of the top two hospitals for cancer care in
                  the country for more than 30 years and among the nation’s top
                  pediatric hospitals for cancer care.
                </p>
                <p>
                  In addition, the 2019 Best Doctors issue of New York magazine
                  recognizes more cancer physicians from Memorial Sloan
                  Kettering than from any other hospital in the New York
                  metropolitan area.
                </p>
                <p>
                  Our physicians have an extraordinary depth and breadth of
                  experience in diagnosing and treating all forms of the
                  disease, from the most common to the rarest. Each year, they
                  treat more than 400 different subtypes of cancer. This level
                  of specialization can have an often dramatic effect on a
                  patient’s chances for a cure or control of his or her cancer.
                </p>

                <h3>State-of-the-Art Diagnostics</h3>
                <p>
                  Memorial Sloan Kettering’s radiologists use state-of-the-art
                  imaging technology to detect cancer, and our pathologists have
                  unsurpassed experience in using advanced methods to accurately
                  diagnose cancer. They issued more than 200,000 pathology
                  reports in 2020 to determine a precise diagnosis and the
                  extent of disease (known as staging) to guide decisions on the
                  best course of treatment.
                </p>

                <h4>Surgical Expertise</h4>
                <p>
                  Our surgeons perform more cancer operations at Memorial Sloan
                  Kettering than doctors at any other hospital in the nation.
                  Because of their sole focus on cancer, our surgeons can often
                  use advanced surgical techniques that result in a better
                  quality of life for patients. Over the years, they have
                  pioneered many surgical innovations, including minimally
                  invasive surgery for the treatment of many cancers.
                </p>
                <p>
                  In 1960, a new corporate entity — Memorial Sloan Kettering
                  Cancer Center — was formed to coordinate and guide the overall
                  policy for Memorial Hospital and the Sloan Kettering
                  Institute, and in 1980 these entities were unified into a
                  single institution, with a single president and CEO.
                </p>

                <h5>Pioneering Radiation Therapy</h5>
                <p>
                  Our radiation oncologists are developing and putting into
                  clinical practice leading-edge technologies and techniques in
                  radiation therapy. They pioneered intensity-modulated
                  radiation therapy, which allows higher, more-effective doses
                  of radiation to be delivered to tumors while minimizing
                  exposure to surrounding healthy tissues and organs. MSK’s
                  radiation oncologists also offer proton therapy, a highly
                  precise form of radiation therapy. They have been at the
                  forefront of developing the guidelines for this sophisticated
                  treatment.
                </p>
                <p>
                  Over the years, we have continued to expand our outpatient
                  facilities and services to meet the growing needs of our
                  patients, physicians, and researchers.
                </p>

                <h6>
                  Clinical Scientist Fellows will be given the opportunity to:
                </h6>
                <ul>
                  <li>
                    receive state-of-the-art mentored clinical research training
                  </li>
                  <li>
                    enrollment in the Clinical Research Methodology Curriculum
                  </li>
                  <li>
                    Patients who have undergone a stem cell transplant or
                    received CAR T therapy within the last two years
                  </li>
                  <li>
                    coursework in Gerstner Sloan Kettering’s Master of Science
                    in Clinical and Translational Cancer Research program
                  </li>
                </ul>
                <p>
                  Our radiation oncologists are developing and putting into
                  clinical practice leading-edge technologies and techniques in
                  radiation therapy. They pioneered intensity-modulated
                  radiation therapy, which allows higher, more-effective doses
                  of radiation to be delivered to tumors while minimizing
                  exposure to surrounding healthy tissues and organs. MSK’s
                  radiation oncologists also offer proton therapy, a highly
                  precise form of radiation therapy. They have been at the
                  forefront of developing the guidelines for this sophisticated
                  treatment.
                </p>

                <div class="msk--display-2 dsm-display-heading">Headings</div>

                <h1>Heading level</h1>
                <h2>Heading level</h2>
                <h3>Heading level</h3>
                <h4>Heading level</h4>
                <h5>Heading level</h5>
                <h6>Heading level</h6>
                <p>Base paragraph</p>
              </div>

              <div class="msk--display-4 dsm-display-heading">
                International Reading
              </div>

              <InternationalReading :class="appliedFontMargins" />

              <div class="msk--display-4 dsm-display-heading">
                International Heading
              </div>

              <InternationalHeading :class="appliedFontMargins" />

              <div class="msk--display-2 dsm-display-heading">
                Mixed components
              </div>
              <div :class="appliedFontMargins">
                <div>
                  <MskSampleCheckbox />
                  <MskSampleLinks />
                </div>
              </div>
              <div :class="appliedFont">
                <div>
                  <MskSampleButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </page-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  InternationalHeading,
  InternationalReading,
  MskExampleStyleSlider,
  MskExampleTagStylesSlider,
  MskSampleButtons,
  MskSampleCheckbox,
  MskSampleLinks,
} from '@/components/Type'
import {
  CvCarbonAccordion,
  CvCarbonAccordionItem,
  CvTextArea,
  CvCheckbox,
  CvFormGroup,
  CvSlider,
} from '@carbon/vue'

export default defineComponent({
  name: 'Type',
  data() {
    return {
      layout: 'potato',
      light: true,
      msksans: true,
      message: '',
      extraStyles: {
        h1VerticalMargin: '0.67',
        marginsStarH: '32',
        marginsStarStar: '12',
        marginsP: '16',
        marginsList: '8',
        hxpluspMargin: '8',
      },
      styles: {},
    }
  },

  watch: {
    extraStyles: {
      handler: function (values) {
        this.$store.commit('styles/updateTagValues', {
          name: 'extraStyles',
          values: { ...values },
        })
      },
      deep: true,
    },
    msksans: {
      handler: function (value) {
        this.$store.commit('styles/updateMskSans', value)
      },
    },
  },

  computed: {
    injectVars() {
      const vars = []
      for (const [key, value] of Object.entries(this.styles)) {
        vars.push(`${key}: ${value};`)
      }

      return `
                ${vars.join(' ')}
                --h1-vertical-margin: ${this.extraStyles.h1VerticalMargin}em;
                --hxplusp-margin: ${this.extraStyles.hxpluspMargin}px;
                --margins-star-h: ${this.extraStyles.marginsStarH}px;
                --margins-star-star: ${this.extraStyles.marginsStarStar}px;
                --margins-p: ${this.extraStyles.marginsP}px;
                --margins-list: ${this.extraStyles.marginsList}px;
            `
    },
    appliedFont() {
      return {
        'apply-msk-sans': this.msksans,
      }
    },
    appliedFontMargins() {
      return {
        'apply-msk-sans': this.msksans,
        'msk-margins': true,
        'msk-legible-section': true,
      }
    },
  },
  head: {
    title: 'Type Sample - Memorial Sloan Kettering Cancer Center - MSK',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Typography experiments',
      },
    ],
  },

  methods: {
    updateStyles: function (name, value) {
      this.styles = { ...this.styles, ...value }
    },
  },
  mounted() {
    const storeStyles = this.$store.state.styles['extraStyles']
    this.msksans = this.$store.state.styles.msksans
    if (storeStyles?.h1VerticalMargin) {
      this.extraStyles = { ...storeStyles }
    }
  },
})
</script>

<style lang="scss">
@import '@mskcc/fundamentals/src/_variables.scss';

@import 'breakpoint-sass';
@import 'breakpoint-slicer';

$filter-margin: 24px;

.rtl {
  direction: rtl;
}

.msk-layout-bookworm-slot-main {
  font-family: inherit;
  // font-family: 'MSK Sans Web';
}

.dsm-type-page-shell {
  margin-top: 2px;
}

.dsm-type-page {
  display: flex;
}

.cv-accordion {
  .cv-accordion-item {
    .bx--accordion__title {
      font-weight: 500;
      font-size: 16px;
    }
    .bx--accordion__content {
      background-color: #f2f4f8;
      margin: 0;
      padding-right: 10px;
    }

    &.bx--accordion__item--active {
      .bx--accordion__heading {
        background-color: #f2f4f8;
      }
    }
  }
}

.dsm-type-slot-left {
  height: 100vh;
  overflow: auto;
  padding-bottom: 2rem;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  width: $msk--3-of-12;

  @include from(8) {
    flex: 0 1 auto;
    margin-right: $filter-margin;
    width: $msk--3-of-12;
  }

  @include from(11) {
    width: $msk--3-of-12;
  }

  .bx--slider-container {
    width: 100%;
  }

  .bx--slider {
    min-width: 7rem;
  }

  .bx--slider__range-label {
    display: none;
  }
}

.dsm-wider-field .bx--slider-text-input {
  width: 5rem;
}

.dsm-type-slot-main {
  background-color: #fff;
  padding: 2rem;

  @include from(8) {
    flex: 0 1 auto;
    width: calc($msk--9-of-12 - $filter-margin);
  }
  @include from(11) {
    width: $msk--9-of-12;
  }
}

.apply-msk-sans {
  font-family: 'MSK Sans Web';
}

.dsm-display-heading {
  background-color: $msk--cool-gray-30;
  letter-spacing: 0.02rem;
  line-height: 1.15;
  margin: 2rem 0 !important;
}

.apply-msk-sans {
  font-family: 'MSK Sans Web';
  h1 {
    margin: var(--h1-vertical-margin) 0 !important;
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    font-size: var(--h1-font-size);
    font-variation-settings: 'wght' var(--h1-weight), 'wdth' var(--h1-width);
  }

  h2 {
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    font-size: var(--h2-font-size);
    font-variation-settings: 'wght' var(--h2-weight), 'wdth' var(--h2-width);
  }
  h3 {
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    font-size: var(--h3-font-size);
    font-variation-settings: 'wght' var(--h3-weight), 'wdth' var(--h3-width);
  }
  h4 {
    letter-spacing: var(--h4-letter-spacing);
    line-height: var(--h4-line-height);
    font-size: var(--h4-font-size);
    font-variation-settings: 'wght' var(--h4-weight), 'wdth' var(--h4-width);
  }
  h5 {
    letter-spacing: var(--h5-letter-spacing);
    line-height: var(--h5-line-height);
    font-size: var(--h5-font-size);
    font-variation-settings: 'wght' var(--h5-weight), 'wdth' var(--h5-width);
  }
  h6 {
    letter-spacing: var(--h6-letter-spacing);
    line-height: var(--h6-line-height);
    font-size: var(--h6-font-size);
    font-variation-settings: 'wght' var(--h6-weight), 'wdth' var(--h6-width);
  }
  p {
    letter-spacing: var(--p-letter-spacing);
    line-height: var(--p-line-height);
    font-size: var(--p-font-size);
    font-variation-settings: 'wght' var(--p-weight), 'wdth' var(--p-width);
  }

  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: var(--hxplusp-margin);
  }

  &.msk-margins * + * {
    margin-top: var(--margins-star-star) !important;
  }

  &.msk-margins * + h1,
  &.msk-margins * + h2,
  &.msk-margins * + h3,
  &.msk-margins * + h4,
  &.msk-margins * + h5,
  &.msk-margins * + h6 {
    margin-top: var(--margins-star-h) !important;
  }

  &.msk-margins p {
    margin-top: var(--margins-p) !important;
  }

  &.msk-margins ul ul,
  &.msk-margins ul ol,
  &.msk-margins ol ol,
  &.msk-margins ol ul,
  &.msk-margins li + li,
  &.msk-margins dd + dd {
    margin-top: var(--margins-list) !important;
  }
}

.cv-form-group {
  background-color: #fff;
  padding: 10px;
}
.msk-layout-potato-container {
  padding: 0px;
  max-width: 100%;
}
</style>

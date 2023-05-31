<template>
    <div>
        <ul>
            <li>
                <cv-link href="javascript:void(0)" class="msk-link"
                    >Link</cv-link
                >
            </li>
            <li>
                <cv-link href="javascript:void(0)" class="msk-link">
                    Link with icon <span class="msk-icon">open_in_new</span>
                </cv-link>
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-underline"
                    >Underline link</cv-link
                >
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-underline"
                >
                    Underline link with icon
                    <span class="msk-icon">open_in_new</span>
                </cv-link>
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-gray"
                    >Link gray</cv-link
                >
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-gray"
                >
                    Link gray with icon
                    <span class="msk-icon">open_in_new</span>
                </cv-link>
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-underline msk-link-gray"
                    >Link gray underline</cv-link
                >
            </li>
            <li>
                <cv-link
                    href="javascript:void(0)"
                    class="msk-link msk-link-underline msk-link-gray"
                >
                    Link gray underline link
                    <span class="msk-icon">open_in_new</span>
                </cv-link>
            </li>
        </ul>
        <p>
            Please fill out the form below to refer your patient with ease and
            efficiency. We will reach out within one business day or less. If
            you
            <a class="msk-link" href="javascript:void(0)">would prefer</a> to
            contact us directly or if this is urgent, you can email us at
            <a class="msk-link" href="javascript:void(0)"
                >referapatient@mskcc.org</a
            >. You call also call our dedicated physician access number at
            <a class="msk-link" href="javascript:void(0)">833-503-1737</a>,
            which is available 7 days a week between
            <a class="msk-link" href="javascript:void(0)"
                >8:00 a.m. and 6:00 p.m.<span class="msk-icon"
                    >open_in_new</span
                ></a
            >, EST.
        </p>
    </div>
</template>

<script>
import { CvLink } from '@carbon/vue';

export default {
    name: 'MskSampleLinks',
    components: { CvLink },
};
</script>
<style lang="scss">
// @import 'carbon-components/scss/components/link/_link.scss';
</style>

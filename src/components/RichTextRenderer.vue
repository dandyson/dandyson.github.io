<template>
  <div class="border-t border-gray-500 pt-4" v-html="renderedContent"></div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderOptions from '../services/renderOptions';

export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    renderedContent() {
      const htmlString = documentToHtmlString(this.content, renderOptions);
      return htmlString;
    }
  }
};
</script>

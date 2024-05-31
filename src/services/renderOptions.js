// src/services/renderOptions.js
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_3]: (node, next) => `<h3 class="text-3xl font-semibold mt-8 mb-2">${next(node.content)}</h3>`,
    [BLOCKS.HEADING_4]: (node, next) => `<h3 class="text-2xl font-semibold mt-8 mb-2">${next(node.content)}</h3>`,
    [BLOCKS.HEADING_5]: (node, next) => `<h3 class="text-xl font-bold mt-8 mb-2">${next(node.content)}</h3>`,
    [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-4">${next(node.content)}</p>`,
    [BLOCKS.UL_LIST]: (node, next) => `<ul class="list-disc list-inmb-4">${next(node.content)}</ul>`,
    [BLOCKS.OL_LIST]: (node, next) => `<ol class="list-decimal list-inmb-4">${next(node.content)}</ol>`,
    [BLOCKS.LIST_ITEM]: (node, next) => `<li class="mb-2">${next(node.content)}</li>`,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, description } = node.data.target.fields;
      return `<img class="my-4" src="${file.url}" alt="${description ? description : ''}" />`;
    },
    [INLINES.HYPERLINK]: (node, next) => {
      return `<a href="${node.data.uri}" class="text-blue-600 hover:underline">${next(node.content)}</a>`;
    },
    [INLINES.BOLD]: (node, next) => `<b>${next(node.content)}</b>`,
  },
};

export default renderOptions;

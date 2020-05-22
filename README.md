# vue-flex-waterfall

[![Version](https://img.shields.io/npm/v/vue-flex-waterfall.svg?style=flat-square)](https://www.npmjs.com/package/vue-flex-waterfall)
[![License](https://img.shields.io/npm/l/vue-flex-waterfall.svg?style=flat-square)](LICENSE)

A horizontal sorting waterfall layout component for Vue.js, realized by flex layout.

Refer to [CSS masonry with flexbox, :nth-child(), and order](https://tobiasahlin.com/blog/masonry-with-css/).

[中文文档](README-ZH.md)

## Demo

[Vue Flex Waterfall Demo](https://tsuk1ko.github.io/vue-flex-waterfall/)

[Source code of demo](demo/src/App.vue)

## Installation

```bash
npm i vue-flex-waterfall
```

## Usage

### Vue project

```html
<vue-flex-waterfall
  col="4"
  col-spacing="15"
  :break-at="{ 900: 3, 600: 2, 300: 1 }"
>
  <!-- items -->
</vue-flex-waterfall>
```

```js
import VueFlexWaterfall from 'vue-flex-waterfall';

export default {
  // ...
  components: {
    VueFlexWaterfall,
    // ...
  },
  // ...
}
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/vue-flex-waterfall@1.0/dist/vue-flex-waterfall.min.js"></script>
```

## Props

### height

Type: `Number | String`

Default: `null`

You can specify the height of the container. If not, height will be calculated automatically.

The unit is *px* when it is a number.

### col

Type: `Number | String`

Default: `1`

Default number of column. Use the `break-at` prop to specify breakpoints for this value.

### col-spacing

Type: `Number | String`

Default: `0`

Column spacing. The unit is *px* when it is a number.

### break-at

Type: `Object`

Default: `null`

This object allows you to specify how the number of columns will change based on the width of the viewport. Setting this option to `{ 900: 3 }` for example will adjust the number of columns to 3 when the viewport change and is <= 900px.

### break-by-container

Type: `Boolean`

Default: `false`

When enable, the breakpoints will be based on the container width instead of the window width.

## Events

### order-update

Will be emited after `order` of slot elements are updated.

## Methods

### updateOrder

You can call this method to trigger `order` updating.

How to call component method: [Vue.js Guide - Accessing Child Component Instances & Child Elements](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements)

## Tips

1. You can set `margin-bottom` style for slot elements to control their vertical spacing.
2. You can set `align-content` style for vue-flex-waterfall component to control column alignment.

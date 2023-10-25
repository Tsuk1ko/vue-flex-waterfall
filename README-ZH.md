# vue-flex-waterfall

[![Version](https://img.shields.io/npm/v/vue-flex-waterfall.svg?style=flat-square)](https://www.npmjs.com/package/vue-flex-waterfall)
[![License](https://img.shields.io/npm/l/vue-flex-waterfall.svg?style=flat-square)](LICENSE)

用 flex 实现的横向排序的瀑布流布局 Vue 3 组件

原理见 [纯 CSS 实现横向排序的瀑布流式布局](https://jessieji.com/2019/pure-css-masonry)

> 如果你使用 Vue 2，那么请使用 [v1](https://github.com/Tsuk1ko/vue-flex-waterfall/tree/v1)

## Demo

[Vue Flex Waterfall Demo](https://tsuk1ko.github.io/vue-flex-waterfall/)

[Demo 源码](src/App.vue)

## 安装

### 需求

Vue ^3.0.0

### Node

```bash
npm i vue-flex-waterfall
```

### 浏览器

#### UNPKG

```html
<script src="https://unpkg.com/vue-flex-waterfall@2"></script>
```

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/vue-flex-waterfall@2"></script>
```

## 使用

```vue
<template>
  <VueFlexWaterfall
    align-content="center"
    col="4"
    col-spacing="16"
    :break-at="{ 900: 3, 600: 2, 300: 1 }"
  >
    <!-- items -->
  </VueFlexWaterfall>
</template>

<script setup>
import { VueFlexWaterfall } from 'vue-flex-waterfall';
</script>
```

## 参数

### align-content

类型：`String`

默认值：`undefined`

等同于容器的 *align-content* CSS 变量

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)

### height

类型：`Number | String`

默认值：`undefined`

你可以手动指定容器高度，当不指定时，会自动计算高度

给定一个数字时其单位为 *px*

### col

类型：`Number | String`

默认值：`1`

默认列数，使用 `break-at` 参数可以指定不同宽度下的列数

### col-spacing

类型：`Number | String`

默认值：`0`

列间距，给定一个数字时其单位为 *px*，请注意其表现与 `align-content` 有关

### break-at

类型：`Object`

默认值：`{}`

给定一个对象来指定不同宽度下的列数，例如 `{ 900: 3 }` 则表示当宽度 <= 900px 时将会变为 3 列

### break-by-container

类型：`Boolean`

默认值：`false`

为`true`时，`break-at` 将使用瀑布流容器宽度，而不是 window 宽度

## 事件

### order-updated

插槽中元素的 `order` 属性被更新后触发

## 方法

### updateOrder

调用该方法可以手动触发 `order` 更新

如何调用组件方法：见 Vue 文档 - [ref](https://v3.cn.vuejs.org/api/special-attributes.html#ref)

## 提示

1. 你可以通过给瀑布流内元素设置 `margin-bottom` 样式来控制其垂直间距
2. 你可以通过设置组件的 `align-content` 参数来改变列对齐方式
3. 如果瀑布流内有图片等会因加载或内容更新导致内容高度变化的元素，请在高度变动后重新调用 `updateOrder()`，或提前固定元素大小

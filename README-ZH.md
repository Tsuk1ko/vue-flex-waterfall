# vue-flex-waterfall

[![Version](https://img.shields.io/npm/v/vue-flex-waterfall.svg?style=flat-square)](https://www.npmjs.com/package/vue-flex-waterfall)
[![License](https://img.shields.io/npm/l/vue-flex-waterfall.svg?style=flat-square)](LICENSE)

用 flex 实现的横向排序的瀑布流布局 vue 组件

原理见 [纯 CSS 实现横向排序的瀑布流式布局](https://jessieji.com/2019/pure-css-masonry)

## Demo

[Vue Flex Waterfall Demo](https://tsuk1ko.github.io/vue-flex-waterfall/)

[Demo 源码](demo/src/App.vue)

## 安装

```bash
npm i vue-flex-waterfall
```

## 使用

### Vue 项目

```html
<vue-flex-waterfall
  :col="4"
  :col-spacing="15"
  :break-at="{ 900: 3, 600: 2, 300: 1 }"
  :break-by-container="false"
  @order-update="onOrderUpdate"
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

### 浏览器

```html
<script src="https://cdn.jsdelivr.net/npm/vue-flex-waterfall@1.0/dist/vue-flex-waterfall.min.js"></script>
```

## 参数

### col

类型：`Number`

默认值：`1`

默认列数，使用 `break-at` 参数可以指定不同宽度下的列数

### col-spacing

类型：`Number | String`

默认值：`0`

列间距，给定一个数字时其单位为 *px*

### break-at

类型：`Object`

默认值：`null`

给定一个对象来指定不同宽度下的列数，例如 `{ 900: 3 }` 则表示当宽度 <= 900px 时将会变为 3 列

### break-by-container

类型：`Boolean`

默认值：`false`

为`true`时，`break-at` 将使用瀑布流容器宽度，而不是 window 宽度

## 事件

### order-update

插槽中元素的 order 属性被更新后触发

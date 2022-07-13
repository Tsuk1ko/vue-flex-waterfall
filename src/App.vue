<template>
  <vue-flex-waterfall
    class="mdui-container mdui-m-b-4 mdui-p-a-0"
    align-content="center"
    col="5"
    col-spacing="15"
    :break-at="breakAt"
    :break-by-container="true"
    @order-updated="onOrderUpdated"
  >
    <div class="item" v-for="(item, index) in items" :key="item.i" :style="{ height: `${item.h}px` }">
      <i class="mdui-icon material-icons close" @click="deleteItem(index)">close</i>
      <div class="num">{{ item.i }}</div>
      <div class="width mdui-m-t-1">
        <input
          class="mdui-text-center mdui-text-color-white width-input"
          type="number"
          min="100"
          placeholder="Width (px)"
          v-model="item.h"
        />
        <span class="unit">px</span>
      </div>
    </div>
    <div class="item new" @click="items.push({ i: nextI++, h: 200 })">
      <div class="num">+</div>
    </div>
  </vue-flex-waterfall>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueFlexWaterfall } from '.';
// import { VueFlexWaterfall } from '..';
// import { VueFlexWaterfall } from 'vue-flex-waterfall';

let nextI = 15;
const items = ref(
  [300, 250, 200, 150, 300, 200, 250, 260, 200, 150, 265, 205, 150, 150].map((h, i) => ({ i: i + 1, h })),
);
const breakAt = (() => {
  const obj: Record<string, number> = {};
  for (let i = 1; i <= 4; i++) {
    obj[200 * (i + 1) + 15 * i] = i;
  }
  return obj;
})();

console.log('breakAt', breakAt);

function deleteItem(i: number) {
  items.value.splice(i, 1);
}

function onOrderUpdated() {
  console.log('order updated', Date.now());
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input:focus {
  outline-width: 0;
}
.item {
  position: relative;
  width: 200px;
  border-radius: 4px;
  background-color: #a1cbfa;
  border: 1px solid #4290e2;
  margin-bottom: 15px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100px;
}
.item.new {
  background-color: transparent;
  border-style: dashed;
  color: #a1cbfa;
  cursor: pointer;
  height: 200px;
}
.item .num {
  font-size: 50px;
  user-select: none;
  flex-basis: 100%;
}
.item .unit {
  user-select: none;
}
.item.new .num {
  font-size: 80px;
}
.item .width {
  font-size: 20px;
}
.item .width-input {
  max-width: 50px;
  border: none;
  border-bottom: #fff solid 1px;
  padding: 0;
  background-color: transparent;
  vertical-align: center;
}
.item .close {
  position: absolute;
  right: 10px;
  top: 10px;
  user-select: none;
  cursor: pointer;
  transition: all 0.1s;
}
.item .close:hover {
  color: #eee;
}
</style>

<template>
  <div id="app">
    <vue-flex-waterfall
      class="mdui-container mdui-m-b-4 mdui-p-a-0"
      col="5"
      col-spacing="15"
      :break-at="breakAt"
      :break-by-container="true"
      @order-update="onOrderUpdate"
      style="align-content: center;"
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
          px
        </div>
      </div>
      <div class="item new" @click="items.push({ i: nextI++, h: 200 })">
        <div class="num">+</div>
      </div>
    </vue-flex-waterfall>
  </div>
</template>

<script>
import VueFlexWaterfall from '../..';

export default {
  name: 'App',
  components: {
    VueFlexWaterfall,
  },
  data: () => ({
    items: [300, 250, 200, 150, 300, 200, 250, 260, 200, 150, 265, 205, 150, 150].map((h, i) => ({ i: i + 1, h })),
    nextI: 15,
    breakAt: (() => {
      const obj = {};
      for (let i = 1; i <= 4; i++) {
        obj[200 * (i + 1) + 15 * i] = i;
      }
      return obj;
    })(),
  }),
  methods: {
    deleteItem(i) {
      this.items.splice(i, 1);
    },
    onOrderUpdate() {
      console.log('order updated');
    },
  },
  created() {
    console.log('break-at', JSON.parse(JSON.stringify(this.breakAt)));
  },
};
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

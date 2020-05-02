<template>
  <div id="app" class="mdui-text-center">
    <div class="mdui-m-y-4">
      <div class="mdui-typo-display-2">Vue Flex Waterfall Demo</div>
      <div class="mdui-typo mdui-m-t-1">
        GitHub:
        <a
          href="https://github.com/Tsuk1ko/vue-flex-waterfall"
          target="_blank"
        >Tsuk1ko/vue-flex-waterfall</a>
      </div>
      <p
        class="mdui-typo-subheading"
      >Try to add, delete or modify some blocks, and resize the window!</p>
    </div>
    <vue-flex-waterfall
      class="mdui-container mdui-m-b-4"
      :col="4"
      :col-spacing="15"
      :break-at="breakAt"
      @order-update="onOrderUpdate"
    >
      <div
        class="item"
        v-for="(item, index ) in items"
        :key="item.i"
        :style="{ height: `${item.h}px` }"
      >
        <i class="mdui-icon material-icons close" @click="deleteItem(index)">close</i>
        <div class="num">{{ item.i }}</div>
        <div class="width mdui-m-t-1">
          <input
            class="mdui-text-center mdui-text-color-white width-input"
            type="number"
            min="100"
            placeholder="Width (px)"
            v-model="item.h"
          /> px
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
    breakAt: {
      900: 3,
      600: 2,
      300: 1,
    },
  }),
  methods: {
    deleteItem(i) {
      this.items.splice(i, 1);
    },
    onOrderUpdate() {
      console.log('order updated');
    },
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
  width: calc((100% - 45px) / 4);
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
@media screen and (max-width: 900px) {
  .item {
    width: calc((100% - 30px) / 3);
  }
}
@media screen and (max-width: 600px) {
  .item {
    width: calc((100% - 15px) / 2);
  }
}
@media screen and (max-width: 300px) {
  .item {
    width: 100%;
  }
}
</style>

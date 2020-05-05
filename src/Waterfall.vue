<template>
  <div class="vue-flex-waterfall" ref="container" :style="{ height: validContainerHeight }">
    <slot></slot>
    <div
      class="vue-flex-waterfall-split"
      v-for="i in validCol - 1"
      :key="`split-${i}`"
      :style="{ order: i, width: validColSpacing }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'VueFlexWaterfall',
  props: {
    col: {
      type: Number,
      default: 1,
    },
    colSpacing: {
      type: [Number, String],
      default: 0,
    },
    breakAt: {
      type: Object,
      default: () => ({}),
    },
    breakByContainer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      containerHeight: 0,
      orders: [],
      winWidth: 0,
      observer: new MutationObserver(this.updateOrder),
    };
  },
  watch: {
    validCol() {
      this.updateOrder();
    },
    validSortedBreakAt: {
      handler() {
        this.updateOrder();
      },
      deep: true,
    },
  },
  computed: {
    validCol() {
      const col = this.col < 1 ? 1 : this.col;
      const breakPoint = this.validSortedBreakAt.find(([w]) => this.winWidth && this.winWidth <= w);
      return Math.floor(breakPoint ? breakPoint[1] : col);
    },
    validColSpacing() {
      const cs = this.colSpacing;
      if (typeof cs === 'number') return `${cs}px`;
      return cs;
    },
    validContainerHeight() {
      return this.containerHeight > 0 ? `${this.containerHeight}px` : '';
    },
    validSortedBreakAt() {
      const valid = [];
      Object.entries(this.breakAt).forEach(([k, v]) => {
        const ikv = [parseInt(k) || 0, parseInt(v) || 0];
        if (Math.min(...ikv) > 0) valid.push(ikv);
      });
      valid.length ? this.addResizeListener() : this.removeResizeListener();
      return valid.sort(([w1], [w2]) => w1 - w2);
    },
  },
  methods: {
    items() {
      return (this.$slots.default || []).map(({ elm }) => {
        const { marginTop, marginBottom } = window.getComputedStyle(elm);
        const ph = elm.getBoundingClientRect().height + parseFloat(marginTop) + parseFloat(marginBottom);
        return { elm, ph };
      });
    },
    updateOrder(emitEvent = true) {
      this.stopObserve();
      this.containerHeight = 0;
      const colsHeight = Array(this.validCol).fill(0);
      const items = this.items();
      items.forEach(({ elm, ph }) => {
        const minI = colsHeight.indexOf(Math.min(...colsHeight));
        elm.style.order = minI + 1;
        colsHeight[minI] += ph;
      });
      this.containerHeight = Math.max(...colsHeight);
      this.$nextTick(() => {
        this.startObserve();
        emitEvent && this.$emit('order-update');
      });
    },
    updateWidth() {
      this.winWidth = this.breakByContainer ? this.$refs.container.clientWidth : window.innerWidth;
    },
    startObserve() {
      this.observer.observe(this.$refs.container, { attributes: true, childList: true, subtree: true });
    },
    stopObserve() {
      this.observer && this.observer.disconnect();
    },
    addResizeListener() {
      window.addEventListener('resize', this.updateWidth);
    },
    removeResizeListener() {
      window.removeEventListener('resize', this.updateWidth);
    },
  },
  mounted() {
    this.updateOrder(false);
  },
  beforeDestroy() {
    this.stopObserve();
    this.removeResizeListener();
  },
};
</script>

<style scoped>
.vue-flex-waterfall {
  display: flex;
  align-content: flex-start;
  flex-flow: column wrap;
}
.vue-flex-waterfall-split {
  flex-basis: 100%;
}
</style>

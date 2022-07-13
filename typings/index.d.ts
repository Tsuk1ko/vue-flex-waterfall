import type { DefineComponent } from 'vue';

export interface VueFlexWaterfallProps {
  /**
   * You can specify the height of the container. If not, height will be calculated automatically.
   * The unit is *px* when it is a number.
   */
  height?: number | string;
  /**
   * Equal to *align-content* CSS value of the container.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content}
   */
  alignContent?: string;
  /**
   * Default number of column. Use the `break-at` prop to specify breakpoints for this value.
   */
  col?: number | string;
  /**
   * Column spacing. The unit is *px* when it is a number.
   */
  colSpacing?: number | string;
  /**
   * This object allows you to specify how the number of columns will change based on the width of the viewport.  
   * Setting this option to `{ 900: 3 }` for example will adjust the number of columns to 3 when the viewport change and is <= 900px.
   */
  breakAt?: Record<string, number>;
  /**
   * When enable, the breakpoints will be based on the container width instead of the window width.
   */
  breakByContainer?: boolean;
}

type Empty = Record<string, never>;

export const VueFlexWaterfall: DefineComponent<
  VueFlexWaterfallProps,
  Empty,
  Empty,
  Empty,
  {
    /**
     * You can call this method to trigger `order` updating.
     * @param emitEvent Whether to trigger the `order-updated` event
     */
    updateOrder(emitEvent?: boolean): Promise<void>;
  }
>;

export type VueFlexWaterfall = InstanceType<typeof VueFlexWaterfall>;

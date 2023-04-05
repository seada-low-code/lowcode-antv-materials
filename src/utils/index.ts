import { Axis } from '@antv/g2plot';
import { AxisExtra } from '@/types';

export const getAxis = (axis: Axis, extra: AxisExtra) => {
  // 不展示轴信息
  if (!extra.showAxis) {
    return false;
  }
  if (axis === false) return false;
  if (!extra.showTitle) {
    return { ...axis, title: null };
  }
  return axis;
};

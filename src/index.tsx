import * as _Annotation from './components/Annotation';
import * as _Util from '@antv/util';

export const Annotation = _Annotation;
export const Util = _Util;

export { default as Chart } from './components/Chart';
export { default as View } from './components/View';

export { default as Tooltip } from './components/Tooltip';
export { default as Legend } from './components/Legend';
export { default as Coordinate } from './components/Coordinate';
export { default as Axis } from './components/Axis';

export { default as Area } from './geometry/Area';
export { default as Edge } from './geometry/Edge';
export { default as Heatmap } from './geometry/Heatmap';
export { default as Interval } from './geometry/Interval';
export { default as Line } from './geometry/Line';
export { default as Point } from './geometry/Point';
export { default as Polygon } from './geometry/Polygon';
export { default as Schema } from './geometry/Schema';
export { default as BaseGeom } from './geometry/Base';


export { default as Geom } from './geometry';

// 兼容
export { default as Coord } from './components/Coordinate/coord';

export { default as G2Function } from './components/G2Function';
export { default as Interaction } from './components/Interaction';

export { default as createPlot } from './createPlot';
export { default as useView } from './hooks/useChartView';
export { default as useRootChart } from './hooks/useChartInstance';

export { withView } from './context/view';
export { withChartInstance } from './context/root';

// 注册主题
export { getTheme, registerTheme } from '@antv/g2/esm/theme';

export * from '@antv/g2/esm/core';



export const version = process.env.__VERSION__;
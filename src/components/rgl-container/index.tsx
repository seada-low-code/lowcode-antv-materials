import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import './index.scss';

// 响应式网格布局
const ResponsiveReactGridLayout = WidthProvider(Responsive);

// export class RGLContainer extends React.Component {
//   onGridLayoutChange(layout) {
//     this.props._leaf?.setPropValue(
//       'layout',
//       layout.filter((item) => item.i),
//     );
//   }

//   render() {
//     const { layout, _leaf, children } = this.props;
//     const childNodes = [];

//     this.props.children.forEach((child, index) => {
//       const item = layout[index];
//       childNodes.push(
//         <div key={item.i} data-grid={{ w: item.w, h: item.h, x: item.x, y: item.y }}>
//           {child}
//         </div>,
//       );
//     });

//     return (
//       <ResponsiveReactGridLayout
//         layouts={layout}
//         onLayoutChange={(e) => this.onGridLayoutChange(e)}
//       >
//         hihihi
//         {childNodes}
//       </ResponsiveReactGridLayout>
//     );
//   }
// }

export interface RGLContainerProps {
  layout: ReactGridLayout.Layout[];
  children?: React.ReactNode;
}

const RGLContainer: React.FC<RGLContainerProps> = ({ layout, children }) => {
  // const layout = [
  //   { i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
  //   { i: 'dark-magician', x: 1, y: 0, w: 1, h: 1 },
  //   { i: 'kuriboh', x: 2, y: 0, w: 1, h: 1 },
  //   { i: 'spell-caster', x: 3, y: 0, w: 1, h: 1 },
  //   { i: 'summoned-skull', x: 4, y: 0, w: 1, h: 1 },
  // ];
  const renderChildren = () => {
    // 如果是一个数组
    if (Array.isArray(children) && children.length > 0) {
      const childNodes = [];
      children.forEach((item, index) => {});
    }
    return children;
  };
  return (
    <ResponsiveReactGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
    >
      {renderChildren()}
    </ResponsiveReactGridLayout>
  );
};

export default RGLContainer;

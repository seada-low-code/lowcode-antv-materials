import React from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import './index.scss';
import { IPublicModelNode } from '@alilc/lowcode-types';

// 响应式网格布局
const MyGridLayout = WidthProvider(GridLayout);

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
  _leaf?: IPublicModelNode;
  __designMode?: 'design' | 'preview';
}

/**
 * 将组件拖拽到这个容器里面
 */
const RGLContainer: React.FC<RGLContainerProps> = ({ layout, children, _leaf }) => {
  const renderChildren = () => {
    if (Array.isArray(children) && children.length > 0) {
      return children.map((child, index) => {
        const { key } = child;
        const item = layout[index];
        return (
          <div
            key={key}
            data-grid={{ w: item?.w || 12, h: item?.h || 4, x: item?.x || 0, y: item?.y || 0 }}
          >
            {child}
          </div>
        );
      });
    }
    return null;
  };

  const handleLayoutChange = (layoutData) => {
    // 布局改变了，需要反映到magnetic-container的属性变化
    console.log('布局改变了:', layoutData);
  };

  return (
    <MyGridLayout layout={layout} cols={12} rowHeight={100} onLayoutChange={handleLayoutChange}>
      {renderChildren()}
    </MyGridLayout>
  );
};

export default RGLContainer;

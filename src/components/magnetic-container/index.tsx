/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { IPublicModelNode } from '@alilc/lowcode-types';
import ReactGridLayout from 'react-grid-layout';
import RGLContainer from '../rgl-container';

// export default class MagneticContainer extends React.Component {
//   static nextX = -3;

//   render() {
//     let { layout = [], children, _leaf = {} } = this.props;

//     // 设置MagneticContainer为RGLContainer, 预览态无_leaf
//     // _leaf.isRGLContainer = true;

//     // TODO: 临时方案，设置父元素为RGLContainer
//     // _leaf.parent.isRGLContainer = true;

//     if (layout.length < children.length) {
//       const child = children[children.length - 1];
//       layout.push({
//         i: child.key || 'placeholder',
//         x: MagneticContainer.nextX % 12,
//         y: Infinity,
//         w: 3,
//         h: 3,
//       });
//       MagneticContainer.nextX += 3;
//     }

//     // 去掉 placeholder
//     if (children[0].props.className === 'lc-container-placeholder') {
//       children = [];
//     }

//     return (
//       <div className="vc-rootcontent" style={{ height: '100vh' }}>
//         <RGLContainer layout={layout} _leaf={_leaf}>
//           {children}
//         </RGLContainer>
//       </div>
//     );
//   }
// }

export interface MagneticContainerProps {
  _leaf?: IPublicModelNode;
  __designMode?: 'design' | 'preview';
  layout: ReactGridLayout.Layout[];
  children?: React.ReactNode;
}

const MagneticContainer: React.FC<MagneticContainerProps> = ({
  layout = [],
  children,
  _leaf,
  __designMode,
}) => {
  const layoutRef = useRef<ReactGridLayout.Layout[]>(layout);
  const lastChildrenLen = useRef(0);

  // 预览态没有_leaf
  if (__designMode === 'design') {
    _leaf.isRGLContainer = true;
    _leaf.parent.isRGLContainer = true;
  }

  // useEffect(() => {
  //   // 当children改变的时候，同时需要更改layout
  //   if (!Array.isArray(children)) return;
  //   const childrenLen = children.length;
  //   if (lastChildrenLen.current > children.length) {
  //     console.log('删除了节点');
  //     // 删除了节点
  //     lastChildrenLen.current = childrenLen;
  //     // 找到节点对应的layout并删除掉
  //   } else if (lastChildrenLen.current < children.length) {
  //     console.log('增加了节点');
  //     const child = children[children.length - 1];
  //     // 增加了节点
  //     lastChildrenLen.current = childrenLen;
  //     // 添加layout
  //     layoutRef.current.push({
  //       i: child.key, // id
  //       x: 0,
  //       y: children.length,
  //       w: 12,
  //       h: 4,
  //     });
  //   }
  // }, [children]);

  if (Array.isArray(children) && layout.length < children.length) {
    // 设置新增加的children的layout属性
    const child = children[children.length - 1];
    layout.push({
      i: child.key, // id
      x: 0,
      y: children.length,
      w: 12,
      h: 4,
    });
  }
  return (
    <div style={{ height: '100vh' }}>
      <RGLContainer layout={layout}>{children}</RGLContainer>
    </div>
  );
};

export default MagneticContainer;

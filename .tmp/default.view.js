

export { default } from '/Users/haloworld/Project/lowcode-antv-materials/src/index.tsx';

import * as componentInstances from '/Users/haloworld/Project/lowcode-antv-materials/src/index.tsx';

import '/Users/haloworld/Project/lowcode-antv-materials/src/index.scss'

export * from '/Users/haloworld/Project/lowcode-antv-materials/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!true;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}
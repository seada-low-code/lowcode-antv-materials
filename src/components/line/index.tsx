import React from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface LineProps {
  dataSource: IDataSource;
  displayType: 'line' | 'curve' | 'step';
  xField: LineConfig['xField'];
  yField: LineConfig['yField'];
}

const Line: React.FC<LineProps> = ({ xField, yField, dataSource, displayType, ...rest }) => {
  const data = useData(dataSource);

  const { stepType } = (rest as LineConfig) || {};

  return (
    <AntVLine
      data={data}
      xField={xField}
      yField={yField}
      {...rest}
      smooth={displayType === 'curve'}
      stepType={displayType === 'step' ? stepType || 'hv' : null}
    />
  );
};

Line.displayName = 'Line';
export default Line;

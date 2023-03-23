import React from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface LineProps {
  dataSource: IDataSource;
  xField: string;
  yField: string;
  padding?: LineConfig['padding'];
}

const Line: React.FC<LineProps> = ({ xField, yField, dataSource, ...rest }) => {
  const data = useData(dataSource);

  return <AntVLine data={data} xField={xField} yField={yField} {...rest} />;
};

Line.displayName = 'Line';
export default Line;

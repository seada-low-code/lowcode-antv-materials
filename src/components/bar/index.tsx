import React from 'react';
import { Bar as AntVBar, BarConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface BarProps {
  dataSource: IDataSource;
  xField: BarConfig['xField'];
  yField: BarConfig['yField'];
  seriesField?: BarConfig['seriesField'];
}

const Bar: React.FC<BarProps> = ({ xField, yField, dataSource, ...rest }) => {
  const data = useData(dataSource);

  return <AntVBar data={data} xField={xField} yField={yField} {...rest} />;
};

Bar.displayName = 'Bar';
export default Bar;

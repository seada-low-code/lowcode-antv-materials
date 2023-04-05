import React from 'react';
import { Bar as AntVBar, BarConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface BarProps {
  dataSource: IDataSource;
  xField: BarConfig['xField'];
  yField: BarConfig['yField'];
  seriesField?: BarConfig['seriesField'];
  showLegend?: boolean;
  legend?: BarConfig['legend'];
  showLabel?: boolean;
  label?: BarConfig['label'];
}

const Bar: React.FC<BarProps> = ({
  xField,
  yField,
  dataSource,
  showLegend,
  legend,
  showLabel,
  label,
  ...rest
}) => {
  const data = useData(dataSource);

  return (
    <AntVBar
      data={data}
      xField={xField}
      yField={yField}
      legend={showLegend ? legend : false}
      label={showLabel ? label || {} : undefined}
      {...rest}
    />
  );
};

Bar.displayName = 'Bar';
export default Bar;

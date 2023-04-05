import React from 'react';
import { Bar as AntVBar, BarConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { AxisExtra, IDataSource } from '@/types';
import { getAxis } from '@/utils';

export interface BarProps {
  dataSource: IDataSource;
  xField: BarConfig['xField'];
  yField: BarConfig['yField'];
  seriesField?: BarConfig['seriesField'];
  showLegend?: boolean;
  legend?: BarConfig['legend'];
  showLabel?: boolean;
  label?: BarConfig['label'];
  xAxisExtra?: AxisExtra;
  yAxisExtra?: AxisExtra;
  xAxis?: BarConfig['xAxis'];
  yAxis?: BarConfig['yAxis'];
}

const Bar: React.FC<BarProps> = ({
  xField,
  yField,
  dataSource,
  showLegend,
  legend,
  showLabel,
  label,
  xAxisExtra,
  yAxisExtra,
  xAxis,
  yAxis,
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
      xAxis={getAxis(xAxis, xAxisExtra)}
      yAxis={getAxis(yAxis, yAxisExtra)}
      {...rest}
    />
  );
};

Bar.displayName = 'Bar';
export default Bar;

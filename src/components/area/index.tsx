import React from 'react';
import { Area as AntVArea, AreaConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { AxisExtra, IDataSource } from '@/types';
import { getAxis } from '@/utils';

export interface BarProps {
  dataSource: IDataSource;
  xField: AreaConfig['xField'];
  yField: AreaConfig['yField'];
  seriesField?: AreaConfig['seriesField'];
  showLegend?: boolean;
  legend?: AreaConfig['legend'];
  showLabel?: boolean;
  label?: AreaConfig['label'];
  xAxisExtra?: AxisExtra;
  yAxisExtra?: AxisExtra;
  xAxis?: AreaConfig['xAxis'];
  yAxis?: AreaConfig['yAxis'];
}

const Area: React.FC<BarProps> = ({
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
    <div>
      <AntVArea
        data={data}
        xField={xField}
        yField={yField}
        legend={showLegend ? legend : false}
        label={showLabel ? label || {} : undefined}
        xAxis={getAxis(xAxis, xAxisExtra)}
        yAxis={getAxis(yAxis, yAxisExtra)}
        {...rest}
      />
    </div>
  );
};

Area.displayName = 'Area';
export default Area;

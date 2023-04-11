import React from 'react';
import { Column as AntVColumn, ColumnConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { AxisExtra, IDataSource } from '@/types';
import { getAxis } from '@/utils';

export interface ColumnProps {
  dataSource: IDataSource;
  xField: ColumnConfig['xField'];
  yField: ColumnConfig['yField'];
  showLegend?: boolean;
  legend?: ColumnConfig['legend'];
  showLabel?: boolean;
  label?: ColumnConfig['label'];
  xAxisExtra?: AxisExtra;
  yAxisExtra?: AxisExtra;
  xAxis?: ColumnConfig['xAxis'];
  yAxis?: ColumnConfig['yAxis'];
}

const Column: React.FC<ColumnProps> = ({
  dataSource,
  xField,
  yField,
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
      <AntVColumn
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

Column.displayName = 'Column';

export default Column;

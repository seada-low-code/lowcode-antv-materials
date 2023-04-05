import React from 'react';
import { Column as AntVColumn, ColumnConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface ColumnProps {
  dataSource: IDataSource;
  xField: ColumnConfig['xField'];
  yField: ColumnConfig['yField'];
  showLegend?: boolean;
  legend?: ColumnConfig['legend'];
  showLabel?: boolean;
  label?: ColumnConfig['label'];
}

const Column: React.FC<ColumnProps> = ({
  dataSource,
  xField,
  yField,
  showLegend,
  legend,
  showLabel,
  label,
  ...rest
}) => {
  console.log(showLabel, label);
  const data = useData(dataSource);

  return (
    <AntVColumn
      data={data}
      xField={xField}
      yField={yField}
      legend={showLegend ? legend : false}
      label={showLabel ? label || {} : undefined}
      {...rest}
    />
  );
};

Column.displayName = 'Column';

export default Column;

import React from 'react';
import { Column as AntVColumn, ColumnConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface ColumnProps {
  dataSource: IDataSource;
  xField: ColumnConfig['xField'];
  yField: ColumnConfig['yField'];
}

const Column: React.FC<ColumnProps> = ({ dataSource, xField, yField, ...rest }) => {
  const data = useData(dataSource);

  return <AntVColumn data={data} xField={xField} yField={yField} {...rest} />;
};

Column.displayName = 'Column';

export default Column;

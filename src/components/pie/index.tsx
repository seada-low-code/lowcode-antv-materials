import React from 'react';
import { Pie as AntVPie, PieConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface PieProps {
  dataSource: IDataSource;
  angleField: PieConfig['angleField'];
  colorField: PieConfig['colorField'];
}

const Pie: React.FC<PieProps> = ({ dataSource, angleField = '', colorField = '', ...rest }) => {
  const data = useData(dataSource);

  return <AntVPie data={data} angleField={angleField} colorField={colorField} {...rest} />;
};

Pie.displayName = 'Pie';
export default Pie;

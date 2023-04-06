import React from 'react';
import { Pie as AntVPie, PieConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { IDataSource } from '@/types';

export interface PieProps {
  dataSource: IDataSource;
  angleField: PieConfig['angleField'];
  colorField: PieConfig['colorField'];
  showLegend?: boolean;
  legend?: PieConfig['legend'];
  showLabel?: boolean;
  label?: PieConfig['label'];
}

const Pie: React.FC<PieProps> = ({
  dataSource,
  angleField = '',
  colorField = '',
  showLegend,
  legend,
  showLabel,
  label,
  ...rest
}) => {
  const data = useData(dataSource);

  return (
    <div>
      <AntVPie
        data={data}
        angleField={angleField}
        colorField={colorField}
        legend={showLegend ? legend : false}
        label={showLabel ? label || {} : undefined}
        {...rest}
      />
    </div>
  );
};

Pie.displayName = 'Pie';
export default Pie;

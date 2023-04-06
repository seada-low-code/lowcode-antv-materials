import React from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';
import { useData } from '@/hooks/data';
import { AxisExtra, IDataSource } from '@/types';
import { getAxis } from '@/utils';

export interface LineProps {
  dataSource: IDataSource;
  displayType: 'line' | 'curve' | 'step';
  xField: LineConfig['xField'];
  yField: LineConfig['yField'];
  stepType?: LineConfig['stepType'];
  showLegend?: boolean;
  legend?: LineConfig['legend'];
  showLabel?: boolean;
  label?: LineConfig['label'];
  showPoint?: boolean;
  point?: LineConfig['point'];
  xAxisExtra?: AxisExtra;
  yAxisExtra?: AxisExtra;
  xAxis?: LineConfig['xAxis'];
  yAxis?: LineConfig['yAxis'];
}

const Line: React.FC<LineProps> = ({
  xField,
  yField,
  stepType,
  dataSource,
  displayType,
  showLegend,
  legend,
  showLabel,
  label,
  showPoint,
  point,
  xAxisExtra,
  yAxisExtra,
  xAxis,
  yAxis,
  ...rest
}) => {
  const data = useData(dataSource);

  console.log('rest:', rest);

  return (
    <div>
      <AntVLine
        data={data}
        xField={xField}
        yField={yField}
        legend={showLegend ? legend : false}
        label={showLabel ? label || {} : undefined}
        point={showPoint ? point : undefined}
        xAxis={getAxis(xAxis, xAxisExtra)}
        yAxis={getAxis(yAxis, yAxisExtra)}
        {...rest}
        smooth={displayType === 'curve'}
        stepType={displayType === 'step' ? stepType || 'hv' : null}
      />
    </div>
  );
};

Line.displayName = 'Line';
export default Line;

import { FunctionComponent } from "react";

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value && payload?.value?.slice(11, payload.value.length)}
        </text>
      </g>
    );
};

export default CustomizedAxisTick;
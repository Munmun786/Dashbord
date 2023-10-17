import React from "react";
import { Pie } from "@ant-design/charts";
import styled from "styled-components";

export default function PieChartBar() {
  const Wrapper = styled.div`
    margin: 0px -20px;
  `;
  const pieChartData = [
    {
      type: "Monthly",
      value: 40,
    },
    {
      type: "Quaterly",
      value: 25,
    },
    {
      type: "Half-Yearly",
      value: 22,
    }];
  const config = {
    appendPadding: 90,
    data: pieChartData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.7,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: null
  };
  return (
    <>
      <Wrapper>
        <div style={{ width: "100%", maxWidth: "468px" }}>
          <Pie {...config} />
        </div>
      </Wrapper>
    </>
  );
}

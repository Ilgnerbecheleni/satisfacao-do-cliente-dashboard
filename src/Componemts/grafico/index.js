import { Chart } from "react-google-charts";

import React from 'react'

export default function Bar({ bom , otimo , regular}) {

    const data = [
        ["Element", "Satisfação", { role: "style" }],
        ["Ruim", bom, "blue"], // RGB value
        ["Bom", otimo, "gold"], // English color name
        ["Ótimo", regular, "green"], // English color name
       // CSS-style declaration
      ];



  return (
    <div>
  <Chart chartType="ColumnChart" width="90%" height="400px" data={data} />
    </div>
  )
}

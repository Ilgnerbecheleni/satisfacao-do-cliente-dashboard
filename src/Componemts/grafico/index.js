import { Chart } from "react-google-charts";

import React from 'react'

export default function Bar({ bom , otimo , ruim}) {

    const data = [
        ["Element", "Satisfação", { role: "style" }],
        ["Ruim", ruim, "red"], // RGB value
        ["Bom", bom, "gold"], // English color name
        ["Ótimo", otimo, "green"], // English color name
       // CSS-style declaration
      ];



  return (
    <div>
  <Chart chartType="ColumnChart" width="90%" height="400px" data={data} />
  <div>

  </div>
    </div>
  )
}

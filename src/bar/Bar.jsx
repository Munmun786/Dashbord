import React from 'react'
import {ResponsiveContainer, BarChart,Bar, XAxis} from "recharts"
const Array =[
    {
        name:"jan",
        stock:10,
    },
    {
        name:"feb"
        ,
        stock:20,
    },
    {
        name:"mar"
        ,
        stock:30,
    },
    {
        name:"apl"
        ,
        stock:15,
    },
    {
        name:"may"
        ,
        stock:17,
    },
    {
        name:"jun",
        stock:13,
    },
    {
        name:"july",
        stock:25,
    },
    {
        name:"aug",
        stock:22,
    },
    {
        name:"sep",
        stock:28,
    },
    {
        name:"oct",
        stock:50,
    },
    {
        name:"nav",
        stock:32,
    },
    {
        name:"dec",
        stock:30,
    },
]

const Bars = () => {




  return (
    <div>
    <ResponsiveContainer width="100%" aspect={2.5}>
        <BarChart data={Array} >
           <XAxis dataKey="name"/>
            <Bar dataKey="stock"  fill='#8883d8' style={{}}/>
        </BarChart>
    </ResponsiveContainer>
</div>
  )
}

export default Bars;

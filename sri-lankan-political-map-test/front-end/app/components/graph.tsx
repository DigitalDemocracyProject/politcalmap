import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
export default function Graph(props: { graphData: number[]; id: any; axis1: any; axis2: any; }){
    const divRef = useRef(null);
    const graphData = props.graphData;
    const id = props.id;
    const axis1 = props.axis1;
    const axis2 = props.axis2;
    const margin = {top: 60, right: 60, bottom: 60, left: 60},
        width = 600 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
//transparent/mixed color graph
/*
    useEffect(()=>{
        // append the svg object to the body of the page
        const svg = d3.select(divRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
            if (axis1==="x") {
                //x axis labels
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "blue")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate(0, ' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Liberatarian');
                svg.append("rect")
                   .attr("x", width/2)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "orange")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width+',' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Authoritarian'); 
           }else if (axis1==="y") {
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "silver")
                   .attr("opacity", 0.5)
               svg.append('g')
                   .attr('transform', 'translate(0, ' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Neo-liberal');
                svg.append("rect")
                   .attr("x", width/2)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "pink")
                   .attr("opacity", 0.5)
               svg.append('g')
                   .attr('transform', 'translate('+width+',' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Socialist'); 
           }else {
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "green")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate(0, ' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Conservative');
                svg.append("rect")
                   .attr("x", width/2)
                   .attr("y", 0)
                   .attr("width", width/2)
                   .attr("height", height)
                   .attr("fill", "yellow")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width+',' + height/2 + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Progressive'); 
           }
           if (axis2==="z") {
                svg.append("rect")
                    .attr("x", 0)
                    .attr("y", height/2)
                    .attr("width", width)
                    .attr("height", height/2)
                    .attr("fill", "green")
                    .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Conservative');
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width)
                   .attr("height", height/2)
                   .attr("fill", "yellow")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+',' + '-10)')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Progressive'); 
           }else if (axis2==="y") {
                svg.append("rect")
                    .attr("x", 0)
                    .attr("y", height/2)
                    .attr("width", width)
                    .attr("height", height/2)
                    .attr("fill", "silver")
                    .attr("opacity", 0.5)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Neo-liberal');
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width)
                   .attr("height", height/2)
                   .attr("fill", "pink")
                   .attr("opacity", 0.5)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+',' + '-10)')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Socialist'); 
           }else {
                svg.append("rect")
                    .attr("x", 0)
                    .attr("y", height/2)
                    .attr("width", width)
                    .attr("height", height/2)
                    .attr("fill", "blue")
                    .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Liberatarian');
                svg.append("rect")
                   .attr("x", 0)
                   .attr("y", 0)
                   .attr("width", width)
                   .attr("height", height/2)
                   .attr("fill", "orange")
                   .attr("opacity", 0.25)
               svg.append('g')
                   .attr('transform', 'translate('+width/2+',' + '-10)')
                   .append('text')
                   .attr('text-anchor', 'middle')
                   .text('Authoritarian'); 
           }
        // Add X axis
        const x = d3.scaleLinear()
            .domain([-6, 6])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", `translate(0, ${height/2})`)
            .style("stroke", "black")
            .call(d3.axisBottom(x).tickFormat(d=>d === 0 ? "" : `${d}`));
        // Add Y axis
        const y = d3.scaleLinear()
            .domain([-6, 6])
            .range([ height, 0]);
        svg.append("g")
            .attr("transform", `translate(${width/2}, 0)`)
            .style("stroke", "black")
            .call(d3.axisLeft(y).tickFormat(d=>d === 0 ? "" : `${d}`));
        // Add point/coordinate
        svg.selectAll("circle")
            .data([graphData])
            .enter()
            .append("circle")
            .attr("cx", d => x(d[0]))
            .attr("cy", d => y(d[1]))
            .attr("r", 5)
            .attr("fill", "red");
        return (() => {
            d3.selectAll("svg").remove();
        });
    }, [graphData])
*/
//solid/separate colors
    useEffect(()=>{
        // append the svg object to the body of the page
        const svg = d3.select(divRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
            if (axis1==="x") {
                //x axis labels
                svg.append("rect")
                .attr("x", 0)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "blue")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate(0, ' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Liberatarian');
            svg.append("rect")
                .attr("x", width/2)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "orange")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width+',' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Authoritarian'); 
        }else if (axis1==="y") {
                svg.append("rect")
                .attr("x", 0)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "silver")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate(0, ' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Neo-liberal');
                svg.append("rect")
                .attr("x", width/2)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "pink")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width+',' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Socialist'); 
        }else {
                svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "green")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate(0, ' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Conservative');
            svg.append("rect")
                .attr("x", width/2)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "yellow")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width+',' + height/2 + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Progressive'); 
        }
        if (axis2==="z") {
            svg.append("rect")
                .attr("x", width/2)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "green")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Conservative');
            svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "yellow")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+',' + '-10)')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Progressive'); 
        }else if (axis2==="y") {
            svg.append("rect")
                .attr("x", width/2)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "silver")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Neo-liberal');
            svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "pink")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+',' + '-10)')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Socialist'); 
        }else {
            svg.append("rect")
                .attr("x", width/2)
                .attr("y", height/2)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "blue")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+ ', ' + (height+15) + ')')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Liberatarian');
                svg.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", width/2)
                .attr("height", height/2)
                .attr("fill", "orange")
                .attr("opacity", 0.5)
            svg.append('g')
                .attr('transform', 'translate('+width/2+',' + '-10)')
                .append('text')
                .attr('text-anchor', 'middle')
                .text('Authoritarian'); 
        }
        // Add X axis
        const x = d3.scaleLinear()
            .domain([-6, 6])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", `translate(0, ${height/2})`)
            .style("stroke", "black")
            .call(d3.axisBottom(x).tickFormat(d=>d === 0 ? "" : `${d}`));
        // Add Y axis
        const y = d3.scaleLinear()
            .domain([-6, 6])
            .range([ height, 0]);
        svg.append("g")
            .attr("transform", `translate(${width/2}, 0)`)
            .style("stroke", "black")
            .call(d3.axisLeft(y).tickFormat(d=>d === 0 ? "" : `${d}`));
        // Add point/coordinate
        svg.selectAll("circle")
            .data([graphData])
            .enter()
            .append("circle")
            .attr("cx", d => x(d[0]))
            .attr("cy", d => y(d[1]))
            .attr("r", 5)
            .attr("fill", "red");
        return (() => {
            d3.selectAll("svg").remove();
        });
    }, [graphData])
    return <div id={id} ref={divRef}></div>;
}
// Initialize Mermaid
mermaid.initialize({ startOnLoad: true });

// Token Distribution Pie Chart
const tokenomicsChart = new Chart(document.getElementById('tokenomicsChart'), {
    type: 'pie',
    data: {
        labels: ['Carbon Offsets', 'Market'],
        datasets: [{
            data: [30, 20],
            backgroundColor: ['#4CAF50', '#2196F3'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true }
        }
    }
});

// Technology Architecture Flowchart
document.getElementById('tech-arch').innerHTML = `
graph LR
    A[User] --> B[Polygon Network]
    B --> C[KTX System]
    C --> D[Carbon Offsets]
    C --> E[Payment Processing]
`;

// Market Roadmap Gantt Chart
document.getElementById('gantt-chart').innerHTML = `
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Phase 1
    Enhance Transparency    :active, 2025-01-01, 180d
    section Phase 2
    Partnerships & Pilots   :2025-07-01, 180d
    section Phase 3
    Market Growth          :2026-01-01, 360d
`;

// Risk Matrix Quadrant Chart
const riskData = [
    { name: 'Regulatory', x: 0.9, y: 0.9 },
    { name: 'Market Saturation', x: 0.8, y: 0.7 },
    { name: 'Carbon Volatility', x: 0.6, y: 0.5 },
    { name: 'Network Congestion', x: 0.4, y: 0.4 }
];

const svg = d3.select("#risk-matrix")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);

const xScale = d3.scaleLinear().domain([0, 1]).range([50, 350]);
const yScale = d3.scaleLinear().domain([0, 1]).range([350, 50]);

// Draw quadrants
svg.append("line").attr("x1", 200).attr("y1", 0).attr("x2", 200).attr("y2", 400).style("stroke", "#ccc");
svg.append("line").attr("x1", 0).attr("y1", 200).attr("x2", 400).attr("y2", 200).style("stroke", "#ccc");

// Plot points
svg.selectAll("circle")
    .data(riskData)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 8)
    .style("fill", "#ff6b6b");

// Initialize mindmaps
const swotData = {
    "t": "LTSC",
    "d": 0,
    "c": [
        { "t": "Strengths", "d": 1, "c": [
            { "t": "First-mover" },
            { "t": "Dual utility" },
            { "t": "300+ companies" }
        ]},
        { "t": "Weaknesses", "d": 1, "c": [
            { "t": "Transparency issues" },
            { "t": "Single supplier" },
            { "t": "Untested adoption" }
        ]},
        { "t": "Opportunities", "d": 1, "c": [
            { "t": "DeFi integrations" },
            { "t": "Article 6 markets" },
            { "t": "Banking partnerships" }
        ]},
        { "t": "Threats", "d": 1, "c": [
            { "t": "Market saturation" },
            { "t": "Regulations" },
            { "t": "Price volatility" }
        ]}
    ]
};

const geoData = {
    "t": "Global Markets",
    "d": 0,
    "c": [
        { "t": "Primary", "d": 1, "c": [
            { "t": "Kenya" },
            { "t": "Indonesia" }
        ]},
        { "t": "Secondary", "d": 1, "c": [
            { "t": "Vietnam" },
            { "t": "Philippines" }
        ]},
        { "t": "Future", "d": 1, "c": [
            { "t": "Brazil" },
            { "t": "Nigeria" },
            { "t": "India" }
        ]}
    ]
};

// Render mindmaps
markmap.autoLoader.renderAll();

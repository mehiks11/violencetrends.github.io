const nat_data = [
    {
        "Year": "2010",
        "Deaths": 16242,
        "Population": 307568593,
        "Rate": 5.280773255
    },
    {
        "Year": "2011",
        "Deaths": 16230,
        "Population": 310929825,
        "Rate": 5.219827336
    },
    {
        "Year": "2012",
        "Deaths": 16679,
        "Population": 313204900,
        "Rate": 5.3252679
    },
    {
        "Year": "2013",
        "Deaths": 16121,
        "Population": 315993715,
        "Rate": 5.101683747
    },
    {
        "Year": "2014",
        "Deaths": 15872,
        "Population": 318301008,
        "Rate": 4.986474941
    },
    {
        "Year": 2015,
        "Deaths": 17793,
        "Population": 320635163,
        "Rate": 5.549297786
    },
    {
        "Year": "2016",
        "Deaths": 19362,
        "Population": 322941311,
        "Rate": 5.995516628
    },
    {
        "Year": "2017",
        "Deaths": 19510,
        "Population": 324985539,
        "Rate": 6.003344044
    },
    {
        "Year": "2018",
        "Deaths": 18830,
        "Population": 326687501,
        "Rate": 5.7639181
    },
    {
        "Year": "2019",
        "Deaths": 19141,
        "Population": 328239523,
        "Rate": 5.831412325
    },
]

const margin = 60;
const CHART_WIDTH = 1200;
const CHART_HEIGHT = 601;

const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.2);
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);


x.domain([nat_data].map((d) => d.Year));
y.domain([4, 7]);

const chartContainer = d3
    .select('.natrates')
    .select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT)

const chart = chartContainer.append('g')

chart
    .selectAll('.bar')
    .data(nat_data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('fill', '#42C7A0')
    .attr('stroke-width', 1.5)
    .attr('width', (CHART_WIDTH - 90) / 10)
    .attr('height', (data) => CHART_HEIGHT - y(data.Year))
    .attr('x', (data, i) => i * 120)
    .attr('y', (data) => y(data.Rate))
//text labels on bars

chartContainer.selectAll("text")
    .data(nat_data)
    .enter()
    .append("text")
    .text(function (d) { return Math.round(d.Rate * 100) / 100 })
    .attr('x', (data, i) => i * 120 + 40)
    .attr('y', (data) => y(data.Rate) + 20)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "white")


// absolute deaths
// x.domain([nat_data].map((d) => d.Year));
y.domain([15000, 20000]);

const chartContainer2 = d3
    .select('.natabs')
    .select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT)

const chart2 = chartContainer2.append('g')

chart2
    .selectAll('.bar')
    .data(nat_data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('fill', '#42C7A0')
    .attr('stroke-width', 1.5)
    .attr('width', (CHART_WIDTH - 90) / 10)
    .attr('height', (data) => (CHART_HEIGHT - y(data.Year)) * (-1))
    .attr('x', (data, i) => i * 120)
    .attr('y', (data) => y(data.Deaths))
//text labels on bars

chartContainer2.selectAll("text")
    .data(nat_data)
    .enter()
    .append("text")
    .text(function (d) { return Math.round(d.Deaths * 100) / 100 })
    .attr('x', (data, i) => i * 120 + 35)
    .attr('y', (data) => y(data.Deaths) + 20)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "white")


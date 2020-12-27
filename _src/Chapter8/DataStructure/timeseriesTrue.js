lib('cdf-env.js');

var render_timeseriesTrue = {
  type: "cccLineChart",
  name: "render_timeseriesTrue",
  priority: 5,
  parameters: [],
  executeAtStart: true,
  htmlObject: "${h:timeseriesTrue}",
  preExecution: function() {
    var cd = this.chartDefinition;
    
    var cdProps = {
        // Main plot
        dotsVisible: true,
        line_interpolate: 'cardinal',
        area_interpolate: 'cardinal',
        dot_shapeSize:  7,
        nullInterpolationMode: 'linear',
        plotFrame_strokeStyle: '#bbbbbb',

        // Cartesian axes
        baseAxisGrid:   true,
        baseAxisTicks:   false,
        baseAxisMinorTicks:   false,
        orthoAxisTicks:   true,
        orthoAxisTicks_strokeStyle: '#bbbbbb',
        orthoAxisMinorTicks:   false,
        orthoAxisGrid:   true,
        baseAxisOffset: 0,
        axisGrid_strokeStyle: '#F7F8F9',
        baseAxisRuleVisible: false,
        orthoAxisRule_strokeStyle: '#bbbbbb',
        baseAxisRule_strokeStyle: '#bbbbbb',
    
        // Panels
        legend: true,
       
         // Chart/Interaction
        animate:    true,
        selectable: true,
        hoverable:  true,
    
        // Color axes
        colors: ['#005CA7', '#FFC20F', '#333333', '#68AC2D']
    };
    
    $.extend(true, cd, cdProps);
} ,
  listeners: [],
  chartDefinition:  {
    dataAccessId: "timeseriesTrue",
    path: "/public/Ctools Book Samples/Chapter 8/DataStructure/seriesInRowsFalse.cda",
    height: 200,
    extensionPoints: [],
    colors: [],
    animate: true,
    baseAxisDomainRoundMode: "tick",
    baseAxisDomainScope: "global",
    baseAxisGrid: false,
    baseAxisMinorTicks: true,
    baseAxisOffset: 0,
    baseAxisOverlappedLabelsMode: "hide",
    baseAxisTicks: true,
    baseAxisTickUnitMax: "Infinity",
    baseAxisTickUnitMin: "0",
    baseAxisTitleFont: "12px sans-serif",
    baseAxisTitleMargins: "0",
    baseAxisTooltipAutoContent: "value",
    baseAxisTooltipEnabled: true,
    baseAxisVisible: true,
    baseAxisZeroLine: true,
    clearSelectionMode: "emptySpaceClick",
    clickable: true,
    clickAction: function(s){
    console.log(s);
} ,
    color2AxisColors: [],
    color2AxisLegendClickMode: "toggleVisible",
    color2AxisLegendVisible: true,
    compatVersion: 2,
    contentMargins: "0",
    contentPaddings: "0",
    crosstabMode: true,
    ctrlSelectMode: true,
    dataIgnoreMetadataLabels: false,
    dataSeparator: "~",
    dotsVisible: false,
    groupedLabelSep: " ~ ",
    hoverable: false,
    ignoreNulls: true,
    isMultiValued: false,
    leafContentOverflow: "auto",
    legend: true,
    legendClickMode: "toggleVisible",
    legendFont: "10px sans-serif",
    legendItemPadding: "2.5",
    legendMargins: "0",
    legendMarkerSize: 15,
    legendPaddings: "5",
    legendPosition: "bottom",
    legendTextMargin: 6,
    legendVisible: true,
    margins: "3",
    measuresIndexes: [],
    multiChartColumnsMax: 3,
    multiChartIndexes: [],
    multiChartOverflow: "grow",
    multiChartSingleColFillsHeight: true,
    multiChartSingleRowFillsHeight: true,
    nullInterpolationMode: "none",
    orientation: "vertical",
    ortho2AxisDomainRoundMode: "tick",
    ortho2AxisDomainScope: "global",
    ortho2AxisGrid: false,
    ortho2AxisMinorTicks: true,
    ortho2AxisOffset: 0,
    ortho2AxisOverlappedLabelsMode: "hide",
    ortho2AxisTicks: true,
    ortho2AxisTickUnitMax: "Infinity",
    ortho2AxisTickUnitMin: "0",
    ortho2AxisTitleFont: "12px sans-serif",
    ortho2AxisTitleMargins: "0",
    ortho2AxisVisible: true,
    ortho2AxisZeroLine: true,
    orthoAxisDomainRoundMode: "tick",
    orthoAxisDomainScope: "global",
    orthoAxisGrid: false,
    orthoAxisMinorTicks: true,
    orthoAxisOffset: 0,
    orthoAxisOverlappedLabelsMode: "hide",
    orthoAxisTicks: true,
    orthoAxisTickUnitMax: "Infinity",
    orthoAxisTickUnitMin: "0",
    orthoAxisTitleFont: "12px sans-serif",
    orthoAxisTitleMargins: "0",
    orthoAxisVisible: true,
    orthoAxisZeroLine: true,
    paddings: "0",
    plot2: false,
    plot2AreasVisible: false,
    plot2ColorAxis: 2,
    plot2DotsVisible: true,
    plot2LinesVisible: true,
    plot2NullInterpolationMode: "none",
    plot2OrthoAxis: 1,
    plot2Series: [],
    plot2SeriesIndexes: -1,
    plot2Stacked: false,
    plot2ValuesFont: "10px sans-serif",
    plot2ValuesMask: "{value}",
    plot2ValuesVisible: false,
    plotFrameVisible: true,
    pointingMode: "near",
    readers: [],
    selectable: false,
    seriesInRows: false,
    smallContentMargins: "0",
    smallContentPaddings: "0",
    smallMargins: "2%",
    smallPaddings: "0",
    smallTitleFont: "14px sans-serif",
    smallTitleMargins: "0",
    smallTitlePaddings: "0",
    smallTitlePosition: "top",
    timeSeries: true,
    timeSeriesFormat: "%y-%b",
    titleFont: "14px sans-serif",
    titleMargins: "0",
    titlePaddings: "0",
    titlePosition: "top",
    tooltipEnabled: true,
    tooltipFade: true,
    tooltipFollowMouse: false,
    tooltipHtml: true,
    tooltipOpacity: 0.9,
    trendAreasVisible: false,
    trendColorAxis: 2,
    trendDotsVisible: false,
    trendLinesVisible: true,
    trendOrthoAxis: 1,
    trendStacked: false,
    trendValuesAnchor: "right",
    trendValuesFont: "10px sans-serif",
    trendValuesVisible: false,
    valuesFont: "10px sans-serif"
  }
};



cgg.render(render_timeseriesTrue);

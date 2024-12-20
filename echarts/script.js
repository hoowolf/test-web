// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// var option;
// myChart.showLoading();
// $.getJSON('less.json', function (graph) {
//   myChart.hideLoading();
//   graph.nodes.forEach(function (node) {
//     node.label = {
//       show: node.symbolSize > 30
//     };
//   });
//   option = {
//     title: {
//       text: 'Les Miserables',
//       subtext: 'Default layout',
//       top: 'bottom',
//       left: 'right'
//     },
//     tooltip: {},
//     legend: [
//       {
//         // selectedMode: 'single',
//         data: graph.categories.map(function (a) {
//           return a.name;
//         })
//       }
//     ],
//     animationDuration: 1500,
//     animationEasingUpdate: 'quinticInOut',
//     series: [
//       {
//         name: 'Les Miserables',
//         type: 'graph',
//         legendHoverLink: false,
//         layout: 'none',
//         data: graph.nodes,
//         links: graph.links,
//         categories: graph.categories,
//         roam: true,
//         label: {
//           position: 'right',
//           formatter: '{b}'
//         },
//         lineStyle: {
//           color: 'source',
//           curveness: 0.3
//         },
//         emphasis: {
//           focus: 'adjacency',
//           lineStyle: {
//             width: 10
//           }
//         }
//       }
//     ]
//   };
//   myChart.setOption(option);
// });

// option && myChart.setOption(option);
// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
// 初始化图表实例
var myChart = echarts.init(document.getElementById('main'));
var option;

myChart.showLoading();
$.get('les.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.symbolSize = 5;
  });
  option = {
    title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        selectedMode: 'single',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'force',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right'
        },
        force: {
          repulsion: 100
        }
      }
    ]
  };
  myChart.setOption(option);
});

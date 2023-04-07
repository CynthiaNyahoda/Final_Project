const renderChart = (data, labels, chartType, chartTitle) => {
  const ctx = document.getElementById(`${chartType}-chart`).getContext("2d");
  const chart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [
        {
          label: chartTitle,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: chartTitle,
      },
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          generateLabels: function(chart) {
            const data = chart.data;
            const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
            const labels = data.labels.map((label, index) => {
              const value = data.datasets[0].data[index];
              return {
                text: `${label}: ${value}`,
                fillStyle: data.datasets[0].backgroundColor[index],
                strokeStyle: data.datasets[0].borderColor[index],
                lineWidth: 1,
                pointStyle: 'circle',
                index: index
              };
            });
            labels.push({
              text: `Total Expenses: ${total}`,
              fillStyle: '#fff',
              strokeStyle: '#000',
              lineWidth: 1,
              pointStyle: 'circle'
            });
            return labels;
          }
        }
      }
    },
  });
};

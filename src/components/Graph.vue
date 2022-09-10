<template>
  <Line :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: "BarChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Income",
            backgroundColor: "#8fffe9",
            borderColor: "#99F6E4",
            pointBorderWidth: 1,
            pointRadius: 5,
            borderWidth: 3,
            data: [],
          },
          {
            label: "Expense",
            backgroundColor: "#f471bb",
            borderColor: "#FBCFE8",
            pointBorderWidth: 1,
            pointRadius: 5,
            borderWidth: 3,
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 2 | 2,
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 16,
              },
              padding: 8,
            },
            align: "end",
            padding: 24,
          },
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value) {
                return "$ " + value;
              },
              font: {
                size: 14,
              },
              color: "white",
            },
            beginAtZero: true,
          },
          x: {
            ticks: {
              font: {
                size: 14,
              },
              color: "white",
            },
          },
        },
      },
    };
  },
  methods: {
    getMonthlyIncome(monthIndex) {
      var income = null;
      if (!this.monthlyTransactions[monthIndex].length > 0) return;
      for (var i = 0; i < this.monthlyTransactions[monthIndex].length; i++) {
        if (this.monthlyTransactions[monthIndex][i].type === "income") {
          income += this.monthlyTransactions[monthIndex][i].amount;
        }
      }
      return income;
    },
    getMonthlyExpense(monthIndex) {
      var expense = null;
      if (!this.monthlyTransactions[monthIndex].length > 0) return;
      for (var i = 0; i < this.monthlyTransactions[monthIndex].length; i++) {
        if (this.monthlyTransactions[monthIndex][i].type === "expense") {
          expense += this.monthlyTransactions[monthIndex][i].amount;
        }
      }
      return expense;
    },
    incomeData() {
      var income = [];
      for (var i = 0; i < 12; i++) {
        income.push(this.getMonthlyIncome(i));
      }
      return income;
    },
    expenseData() {
      var income = [];
      for (var i = 0; i < 12; i++) {
        income.push(this.getMonthlyExpense(i));
      }
      return income;
    },
  },
  computed: {
    monthlyTransactions() {
      return this.$store.getters.getMonthly;
    },
  },
  mounted() {
    this.chartData.datasets[0].data = this.incomeData();
    this.chartData.datasets[1].data = this.expenseData();
  },
  watch: {
    monthlyTransactions(newBalance, oldBalance) {
      if (newBalance != oldBalance) {
        this.chartData.datasets[0].data = this.incomeData();
        this.chartData.datasets[1].data = this.expenseData();
      }
    },
  },
};
</script>

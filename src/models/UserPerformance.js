class UserPerformance {
  constructor(performanceData, kindData) {
    this.performanceData = performanceData;
    this.kindData = kindData;

    this.labels = {
      cardio: "Cardio",
      energy: "Énergie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    this.order = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Énergie",
      "Cardio",
    ];
  }

  format() {
    const formatted = this.performanceData.map((item) => ({
      kind: this.labels[this.kindData[item.kind]],
      value: item.value,
    }));

    return formatted.sort(
      (a, b) => this.order.indexOf(a.kind) - this.order.indexOf(b.kind),
    );
  }
}

export default UserPerformance;

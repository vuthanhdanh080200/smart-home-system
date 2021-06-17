import "firebase/firestore";

class Timer {
  constructor(isOn, beginDate, endDate) {
    this.isOn = isOn;
    this.beginDate = beginDate;
    this.endDate = endDate;
  }
}

var timerConverter = {
  toFirestore: function (timer) {
    return {
      isOn: timer.isOn,
      beginDate: timer.beginDate,
      endDate: timer.endDate,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Timer(data.isOn, data.beginDate, data.endDate);
  },
};

export { Timer, timerConverter };

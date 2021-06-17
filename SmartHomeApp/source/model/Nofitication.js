import "firebase/firestore";

class Nofitication {
  constructor(content, date) {
    this.content = content;
    this.date = date;
  }
}

var notificationConverter = {
  toFirestore: function (notification) {
    return {
      content: notification.content,
      date: notification.date,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Nofitication(data.content, data.date);
  },
};

export { Nofitication, notificationConverter };

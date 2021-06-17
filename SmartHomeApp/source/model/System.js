import "firebase/firestore";

class System {
  constructor(isConnected, isSystemOn) {
    this.isConnected = isConnected;
    this.isSystemOn = isSystemOn;
  }
}

var systemConverter = {
  toFirestore: function (system) {
    return {
      isConnected: system.isConnected,
      isSystemOn: system.isSystemOn,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new System(data.isConnected, data.isSystemOn);
  },
};

export { System, systemConverter };

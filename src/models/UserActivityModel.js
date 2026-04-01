class UserActivityModel {
  constructor(sessions) {
    this.sessions = sessions;
  }

  format() {
    return this.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}

export default UserActivityModel;

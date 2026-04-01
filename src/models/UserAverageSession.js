class UserAverageSession {
  constructor(sessions) {
    this.sessions = sessions;
    this.days = ["L", "M", "M", "J", "V", "S", "D"];
  }

  format() {
    return this.sessions.map((session, index) => ({
      day: this.days[session.day - 1],
      sessionLength: session.sessionLength,
      index: index,
    }));
  }
}

export default UserAverageSession;

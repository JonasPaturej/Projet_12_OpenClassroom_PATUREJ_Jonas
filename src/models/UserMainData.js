class UserMainData {
  constructor(user) {
    this.user = user;
  }

  format() {
    return {
      ...this.user,
      score: this.user.todayScore ?? this.user.score,
    };
  }
}

export default UserMainData;

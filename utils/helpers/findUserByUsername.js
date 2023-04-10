function findUserByUsername(username) {
  let user = null;

  users.forEach((element) => {
    if (username === element.username) {
      user = element;
    }
  });

  return user;
}

//   console.log(username);

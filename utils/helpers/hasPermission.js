function hasPermisson(permission) {
  let permissions = JSON.parse(localStorage.getItem("user")).permissions;

  // if (permissions.includes(permission)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return permissions.includes(permission);
}

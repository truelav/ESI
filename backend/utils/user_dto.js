export default class UserDto {
  email;
  name;
  id;
  isActivated;
  roles;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.roles = roles
  }
}

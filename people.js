const { RESTDataSource } = require("apollo-datasource-rest");

class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async people() {
    const response = await this.get("people");
    return this.peopleResolver(response.results);
  }

  async peoplePage({ page }) {
    const response = await this.get(`people/?page=${page}`);
    console.log(response);
    response.results = this.peopleResolver(response.results);
    return response;
  }

  async getPerson({ name }) {
    const response = await this.get(`people/?search=${encodeURIComponent(name)}`);
    return this.peopleResolver(response.results);
  }

  async peopleResolver(People) //lack of a better solution
  {
    if (Array.isArray(People)) {
      for (let index = 0; index < People.length; index++) {
        let response = await this.get(People[index].homeworld);
        People[index].homeworld = response.name;
      }
      return People;
    }
    else return [];
  }
}

module.exports = PeopleAPI;


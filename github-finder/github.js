

class Github {
  constructor(){
    this.client_id = '73b0a5abb579761ccde5';
    this.client_secret = '55df68b32cd6e4153b60e8a0a4a55ed4485f207a';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users`);


    const profileData = await profileResponse.json();

    return {
      profile
    }
  }
}
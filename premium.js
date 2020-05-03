class Premium { 
    user(client, user, guild) {
      return this;
    }

    expire(client, guild) {
        return this;
    }
    
    userName(user, ...name) {
        return this;   
    }

    instance(client) {
        return this;
    }
}

return Premium();

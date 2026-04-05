function fetchPokemon(name, signal) {
  // Необязательный параметр options для signal – прерывания fetch - запроса
  const options = signal ? { signal } : {};
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, options).then(
    response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`Нет покемона с именем: ${name}`));
    },
  );
}

const api = {
  fetchPokemon,
};

export default api;

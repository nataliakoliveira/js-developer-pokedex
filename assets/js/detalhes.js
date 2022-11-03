function detalhesLi(abilities) {
  return `
      <li class="pokemon ${abilities.type}">
          <span class="number">#${abilities.number}</span>
          <span class="name">${abilities.name}</span>

          <div class="detail">
              <ol class="types">
                  ${abilities.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
              </ol>

              <img src="${abilities.photo}"
                   alt="${abilities.name}">
          </div>
          <a href=/'detalhes'
          <button>Detalhes<a href=/'detalhes'</button>
          
      </li>
  `
}
export function someMutation(/* state */) { }
export function saveData(state, comic) {
  state.id = comic.id
  state.name = comic.name
  state.image = comic.image
  state.gender = comic.gender
  state.type = comic.type
  state.isData = true;
}

export function setLoadingRating(state) {
  state.setLoadingRating = true;
}

export function setRating(state, rating) {
  state.rating = rating;
  state.isLoadingRating = false;
}

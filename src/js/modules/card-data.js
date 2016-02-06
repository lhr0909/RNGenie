function initCardData(callback) {
  window.$.ajax({
    url: "https://api.hearthstonejson.com/v1/latest/enUS/cards.json",
    method: "GET",
  }).done(callback);
}

export default initCardData;

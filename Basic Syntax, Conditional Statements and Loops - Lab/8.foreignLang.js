function foreignLang(country) {
  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;
    case "Argentina":
    case "Spain":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
  }
}

foreignLang("Mexico")

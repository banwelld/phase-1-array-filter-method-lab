function findMatching(list, criterion) {
    return list.filter(listItem => listItem.toUpperCase() === criterion.toUpperCase());
  }

  function fuzzyMatch(list, criterion) {
    return list.filter(listItem => listItem.substring(0,criterion.length).toUpperCase() === criterion.toUpperCase());
  }

  function matchName(list, criterion) {
    return list.filter(listItem => listItem.name.toUpperCase() === criterion.toUpperCase());
  }
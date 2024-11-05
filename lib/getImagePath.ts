const getImagePath = (path: string, fullSize?: boolean) => {
  return path
    ? "https://image.tmdb.org/t/p/" + (fullSize ? "original" : "w500") + path
    : "https://links.papareact.com/o8z";
};

export default getImagePath;

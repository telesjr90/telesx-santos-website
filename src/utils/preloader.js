export const preloadImages = (images) => {
  return new Promise((resolve, reject) => {
    const promises = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(promises)
      .then(resolve)
      .catch(reject);
  });
};

export const preloadFonts = (families) => {
  return new Promise((resolve, reject) => {
    WebFont.load({
      google: {
        families: families
      },
      active: resolve,
      inactive: reject
    });
  });
};

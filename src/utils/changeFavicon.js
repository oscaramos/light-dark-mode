const linkForFavicon = document.querySelector(`head > link[rel='icon']`)

const faviconTemplate = (string, icon) => `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim()

const changeFavicon = (icon) => {
  const newFavicon = faviconTemplate`${icon}`;
  linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
}

export default changeFavicon

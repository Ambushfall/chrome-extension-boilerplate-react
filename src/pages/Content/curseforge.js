
if (window.location.href.includes('addons?filter-game-version=')) {
  const gamever = encodeURIComponent(
    window.location.href.split('addons?')[1].split('version=')[1].split('&')[0]
  )

  const elementList = document.querySelectorAll('.project-listing-row')
  elementList.forEach((e, i) => {

    const downloadElement = e.querySelector('a[data-tooltip="Download file"]');
    let hrefText = downloadElement.href;
    hrefText = hrefText.replace('download', `files/all?filter-game-version=${gamever}`);
    hrefText = hrefText.replace(window.location.origin, '');
    downloadElement.href = hrefText;
  });
}

if (window.location.href.includes('&class=addons&version=')) {
  const gamever = window.location.href.split('version=')[1]
  const elementList = document.querySelectorAll('.project-card');
  elementList.forEach((e, i) => {
    const downloadElement = e.querySelector('a.btn-cta.download-cta');
    let hrefText = downloadElement.href;
    hrefText = hrefText.split('download')[0];
    hrefText += `files/all?page=1&pageSize=20&version=${gamever}`;
    downloadElement.href = hrefText;
  })
}
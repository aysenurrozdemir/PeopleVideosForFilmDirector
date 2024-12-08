// window.onload = () => {
//     if (!localStorage.getItem('watched-video')) {
//         showIntroVideo();
//         localStorage.setItem('watched-video', 'true');
//     } else {
//         document.getElementById('content').style.visibility = 'visible';
//     }
// };
// function showIntroVideo() {
//     const videoDiv = document.createElement('div');
//     videoDiv.id = 'intro-video';
//     videoDiv.style.position = 'fixed';
//     videoDiv.style.top = '0';
//     videoDiv.style.left = '0';
//     videoDiv.style.width = '100%';
//     videoDiv.style.height = '100%';
//     videoDiv.style.backgroundColor = 'black';
//     videoDiv.style.zIndex = '9999';
//     videoDiv.style.display = 'flex';
//     videoDiv.style.justifyContent = 'center';
//     videoDiv.style.alignItems = 'center';
//
//     const video = document.createElement('video');
//     video.src = './assets/introVideoShow.mp4';
//     video.autoplay = true;
//     video.controls = false;
//     video.muted = true;
//     video.style.maxWidth = '100%';
//     video.style.maxHeight = '100%';
//
//     // video.addEventListener('play', () => {
//     //     video.muted = false;
//     // });
//
//     video.addEventListener('ended', () => {
//         removeIntroVideo(videoDiv);
//     });
//
//     videoDiv.addEventListener('click', () => {
//         removeIntroVideo(videoDiv);
//     });
//
//     videoDiv.appendChild(video);
//     document.body.appendChild(videoDiv);
//
//     document.getElementById('content').style.visibility = 'hidden';
//     document.body.style.overflow = 'hidden';
// }
//
// function removeIntroVideo(videoDiv) {
//     videoDiv.remove(); // Video div'ini kaldır
//     document.getElementById('content').style.visibility = 'visible';
//     document.body.style.overflow = 'auto';
// }

var images= document.querySelectorAll('img');
console.log(img.length);
		// let i = 0;
		function toggleFullScreen(index) {
			if (!document.fullscreenElement) {
				images[index].requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen(); 
				}
			}
		}
		// img.addEventListener("dblclick", ()=> {
		// 	toggleFullScreen(this);
		// });
		images.forEach(hello= (image, index)=>{
			image.addEventListener("dblclick", ()=> {
				toggleFullScreen(index);
			});
		});
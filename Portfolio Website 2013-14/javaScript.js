<!--Javascript Code-->
			<script type="text/javascript">
			for (var i=0; i < imgArray1.length; i++) {
					imgArray2[i] = new image();
					imgArray2[i].src = imgArray1[i];
				}
			document.onload = setting();
			
			var slide;
			function setting() {
						slide = document.getElementById('pic');
						slide.src = imgArray1[0];
						slide.setAttribute("width",width);
						slide.setAttribute("height",height);
					}
			var picture = 0;
			function slideshow(){
				if(picture < imgArray1.length-1){
					picture=picture+1;
					slide.src = imgArray1[picture];
				}
			}

			function prev(){
				if(picture > 0 ){
					picture=picture-1;
					slide.src = imgArray1[picture];
				}
			}

			function start(){
					slide.src = imgArray1[0];
					picture = 0;
			}

			function end(){
					slide.src = imgArray1[imgArray1.length-1];
					picture = imgArray1.length-1
			}
		</script>		
var swipe = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

      var swiper1 = new Swiper('.swiper-container1');
      console.log(swiper);
      swiper1.on('slideChange', function () {
        if(this.activeIndex === 1) {
          console.log("slide 2");
        }
      });

      var swiper = new Swiper('.swiper-container');
      console.log(swiper);
      swiper.on('slideChange', function () {
        if(this.activeIndex === 0) {
          console.log("slide 2");
        }
      });
    //Go to Screens from home
      function azureDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("azureMain").style.display = "block";
      }

      function threadfinDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("threadfinMain").style.display = "block";
      }

      function triggerfishDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("triggerfishMain").style.display = "block";
      }

      function pufferDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("pufferMain").style.display = "block";
      }

      function angelfishDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("angelfishMain").style.display = "block";
      }

      function sweetlipsDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("sweetlipsMain").style.display = "block";
      }

      function unicornDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("unicornMain").style.display = "block";
      }

      function surgeonDisplay(){
        document.getElementById("main").style.display = "none";
        document.getElementById("surgeonMain").style.display = "block";
      }

      //Back to Home

      function azureHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("azureMain").style.display = "none";
      }

      function threadfinHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("threadfinMain").style.display = "none";
      }

      function triggerfishHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("triggerfishMain").style.display = "none";
      }

      function pufferHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("pufferMain").style.display = "none";
      }

      function angelfishHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("angelfishMain").style.display = "none";
      }

      function sweetlipsHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("sweetlipsMain").style.display = "none";
      }

      function unicornHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("unicornMain").style.display = "none";
      }

      function surgeonHome(){
        document.getElementById("main").style.display = "block";
        document.getElementById("surgeonMain").style.display = "none";
      }

      //left-arrows
      function threadfinLeft(){
        document.getElementById("azureMain").style.display = "block";
        document.getElementById("threadfinMain").style.display = "none";
      }

      function triggerfishLeft(){
        document.getElementById("threadfinMain").style.display = "block";
        document.getElementById("triggerfishMain").style.display = "none";
      }

      function pufferLeft(){
        document.getElementById("triggerfishMain").style.display = "block";
        document.getElementById("pufferMain").style.display = "none";
      }

      function angelfishLeft(){
        document.getElementById("pufferMain").style.display = "block";
        document.getElementById("angelfishMain").style.display = "none";
      }

      function sweetlipsLeft(){
        document.getElementById("angelfishMain").style.display = "block";
        document.getElementById("sweetlipsMain").style.display = "none";
      }

      function unicornLeft(){
        document.getElementById("sweetlipsMain").style.display = "block";
        document.getElementById("unicornMain").style.display = "none";
      }

      function surgeonLeft(){
        document.getElementById("unicornMain").style.display = "block";
        document.getElementById("surgeonMain").style.display = "none";
      }

      //right arrows
      function azureRight(){
        document.getElementById("threadfinMain").style.display = "block";
        document.getElementById("azureMain").style.display = "none";
      }

      function threadfinRight(){
        document.getElementById("triggerfishMain").style.display = "block";
        document.getElementById("threadfinMain").style.display = "none";
      }

      function triggerfishRight(){
        document.getElementById("pufferMain").style.display = "block";
        document.getElementById("triggerfishMain").style.display = "none";
      }

      function pufferRight(){
        document.getElementById("angelfishMain").style.display = "block";
        document.getElementById("pufferMain").style.display = "none";
      }

      function angelfishRight(){
        document.getElementById("sweetlipsMain").style.display = "block";
        document.getElementById("angelfishMain").style.display = "none";
      }

      function sweetlipsRight(){
        document.getElementById("unicornMain").style.display = "block";
        document.getElementById("sweetlipsMain").style.display = "none";
      }

      function unicornRight(){
        document.getElementById("surgeonMain").style.display = "block";
        document.getElementById("unicornMain").style.display = "none";
      }

      // pufferfish images

      function puffer1() {
        document.getElementById("bulletPuffer1").className = "image-gallery-bullet active";
          document.getElementById("bulletPuffer2").className = "image-gallery-bullet ";
          document.getElementById("bulletPuffer3").className = "image-gallery-bullet ";


          document.getElementById("thumbPuffer1").className = "image-gallery-thumbnail active";
          document.getElementById("thumbPuffer2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbPuffer3").className = "image-gallery-thumbnail ";

          document.getElementById("pufferImage").src = "assets/images/Dog Face Puffer.png";
      }
      function puffer2() {
        document.getElementById("bulletPuffer1").className = "image-gallery-bullet ";
          document.getElementById("bulletPuffer2").className = "image-gallery-bullet active";
          document.getElementById("bulletPuffer3").className = "image-gallery-bullet ";


          document.getElementById("thumbPuffer1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbPuffer2").className = "image-gallery-thumbnail active";
          document.getElementById("thumbPuffer3").className = "image-gallery-thumbnail ";

          document.getElementById("pufferImage").src = "assets/images/Guineafowl Puffer.png";
      }
      function puffer3() {
        document.getElementById("bulletPuffer1").className = "image-gallery-bullet ";
          document.getElementById("bulletPuffer2").className = "image-gallery-bullet ";
          document.getElementById("bulletPuffer3").className = "image-gallery-bullet active";


          document.getElementById("thumbPuffer1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbPuffer2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbPuffer3").className = "image-gallery-thumbnail active";

          document.getElementById("pufferImage").src = "assets/images/Starry Puffer.png";
      }

      // sweetlips images
      function sweetlips1() {
        document.getElementById("bulletSweetlips1").className = "image-gallery-bullet active";
          document.getElementById("bulletSweetlips2").className = "image-gallery-bullet ";
          document.getElementById("bulletSweetlips3").className = "image-gallery-bullet ";

          document.getElementById("thumbSweetlips1").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSweetlips2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSweetlips3").className = "image-gallery-thumbnail ";

          document.getElementById("sweetlipsImage").src = "assets/images/Harlequin Sweetlips.png";
      }
      function sweetlips2() {
        document.getElementById("bulletSweetlips1").className = "image-gallery-bullet ";
          document.getElementById("bulletSweetlips2").className = "image-gallery-bullet active";
          document.getElementById("bulletSweetlips3").className = "image-gallery-bullet ";

          document.getElementById("sweetlipsImage").src = "assets/images/Oriental Sweetlips.png";

          document.getElementById("thumbSweetlips1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSweetlips2").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSweetlips3").className = "image-gallery-thumbnail ";
      }
      function sweetlips3() {
        document.getElementById("bulletSweetlips1").className = "image-gallery-bullet ";
          document.getElementById("bulletSweetlips2").className = "image-gallery-bullet ";
          document.getElementById("bulletSweetlips3").className = "image-gallery-bullet active";

          document.getElementById("sweetlipsImage").src = "assets/images/Yellow-banded Sweetlips.png";

          document.getElementById("thumbSweetlips1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSweetlips2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSweetlips3").className = "image-gallery-thumbnail active";
      }

      //angelfish images

      function angel1() {
        document.getElementById("bulletAngel1").className = "image-gallery-bullet active";
          document.getElementById("bulletAngel2").className = "image-gallery-bullet ";
          document.getElementById("bulletAngel3").className = "image-gallery-bullet ";


          document.getElementById("thumbAngel1").className = "image-gallery-thumbnail active";
          document.getElementById("thumbAngel2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbAngel3").className = "image-gallery-thumbnail ";

          document.getElementById("angelImage").src = "assets/images/Bicolour Angelfish.png";
      }
      function angel2() {
        document.getElementById("bulletAngel1").className = "image-gallery-bullet ";
          document.getElementById("bulletAngel2").className = "image-gallery-bullet active";
          document.getElementById("bulletAngel3").className = "image-gallery-bullet ";


          document.getElementById("thumbPuffer1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbPuffer2").className = "image-gallery-thumbnail active";
          document.getElementById("thumbPuffer3").className = "image-gallery-thumbnail ";

          document.getElementById("angelImage").src = "assets/images/Emperor Angelfish.png";
      }
      function angel3() {
        document.getElementById("bulletAngel1").className = "image-gallery-bullet ";
          document.getElementById("bulletAngel2").className = "image-gallery-bullet ";
          document.getElementById("bulletAngel3").className = "image-gallery-bullet active";


          document.getElementById("thumbAngel1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbAngel2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbAngel3").className = "image-gallery-thumbnail active";

          document.getElementById("angelImage").src = "assets/images/Bluering Angelfish.png";
      }

      //Unicornfish images
      function unicorn1(){
        document.getElementById("bulletUnicorn1").className = "image-gallery-bullet active";
          document.getElementById("bulletUnicorn2").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn3").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn4").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn5").className = "image-gallery-bullet ";

          document.getElementById("thumbUnicorn1").className = "image-gallery-thumbnail active";
          document.getElementById("thumbUnicorn2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn5").className = "image-gallery-thumbnail ";

          document.getElementById("unicornImage").src = "assets/images/Humpnose Unicorn.png";

      }
      function unicorn2(){
        document.getElementById("bulletUnicorn1").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn2").className = "image-gallery-bullet active";
          document.getElementById("bulletUnicorn3").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn4").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn5").className = "image-gallery-bullet ";

          document.getElementById("thumbUnicorn1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn2").className = "image-gallery-thumbnail active";
          document.getElementById("thumbUnicorn3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn5").className = "image-gallery-thumbnail ";

          document.getElementById("unicornImage").src = "assets/images/Bignose Unicornfish.png";

      }
      function unicorn3(){
        document.getElementById("bulletUnicorn1").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn2").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn3").className = "image-gallery-bullet active";
          document.getElementById("bulletUnicorn4").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn5").className = "image-gallery-bullet ";

          document.getElementById("thumbUnicorn1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn3").className = "image-gallery-thumbnail active";
          document.getElementById("thumbUnicorn4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn5").className = "image-gallery-thumbnail ";

          document.getElementById("unicornImage").src = "assets/images/Orangespine Tang Unicornfish.png";

      }
      function unicorn4(){
        document.getElementById("bulletUnicorn1").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn2").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn3").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn4").className = "image-gallery-bullet active";
          document.getElementById("bulletUnicorn5").className = "image-gallery-bullet ";

          document.getElementById("thumbUnicorn1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn4").className = "image-gallery-thumbnail active";
          document.getElementById("thumbUnicorn5").className = "image-gallery-thumbnail ";

          document.getElementById("unicornImage").src = "assets/images/Humpback Unicornfish.png";

      }
      function unicorn5(){
        document.getElementById("bulletUnicorn1").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn2").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn3").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn4").className = "image-gallery-bullet ";
          document.getElementById("bulletUnicorn5").className = "image-gallery-bullet active";

          document.getElementById("thumbUnicorn1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbUnicorn5").className = "image-gallery-thumbnail active";

          document.getElementById("unicornImage").src = "assets/images/Bluespine Unicornfish.png";

      }

      //Surgeonfish images
      function surgeon1() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet active";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet ";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail ";

          document.getElementById("surgeonImage").src = "assets/images/Brown Tang.png";

      }
      function surgeon2() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet active";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet ";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail ";

          document.getElementById("surgeonImage").src = "assets/images/Orange-band Surgeonfish.png";

      }
      function surgeon3() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet active";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet ";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail ";

          document.getElementById("surgeonImage").src = "assets/images/Blue Tang.png";

      }
      function surgeon4() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet active";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet ";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail ";

          document.getElementById("surgeonImage").src = "assets/images/Yellow Tang.png";

      }
      function surgeon5() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet active";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet ";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail active";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail ";

          document.getElementById("surgeonImage").src = "assets/images/Sailfin Tang.png";

      }
      function surgeon6() {
        document.getElementById("bulletSurgeon1").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon2").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon3").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon4").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon5").className = "image-gallery-bullet ";
          document.getElementById("bulletSurgeon6").className = "image-gallery-bullet active";

          document.getElementById("thumbSurgeon1").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon2").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon3").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon4").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon5").className = "image-gallery-thumbnail ";
          document.getElementById("thumbSurgeon6").className = "image-gallery-thumbnail active";

          document.getElementById("surgeonImage").src = "assets/images/Elongate Surgeon.png";

      }

      //triggerfish images

      function trigger1() {
        document.getElementById("bullet1").className = "image-gallery-bullet active";
        document.getElementById("bullet2").className = "image-gallery-bullet ";
          document.getElementById("bullet3").className = "image-gallery-bullet ";
          document.getElementById("bullet4").className = "image-gallery-bullet ";

          document.getElementById("thumb1").className = "image-gallery-thumbnail active";
          document.getElementById("thumb2").className = "image-gallery-thumbnail ";
          document.getElementById("thumb3").className = "image-gallery-thumbnail ";
          document.getElementById("thumb4").className = "image-gallery-thumbnail ";

          document.getElementById("triggerImage").src = "assets/images/Clown Triggerfish.png";
      }
      function trigger2() {
        document.getElementById("bullet1").className = "image-gallery-bullet ";
        document.getElementById("bullet2").className = "image-gallery-bullet active";
          document.getElementById("bullet3").className = "image-gallery-bullet ";
          document.getElementById("bullet4").className = "image-gallery-bullet ";

          document.getElementById("thumb1").className = "image-gallery-thumbnail ";
          document.getElementById("thumb2").className = "image-gallery-thumbnail active";
          document.getElementById("thumb3").className = "image-gallery-thumbnail ";
          document.getElementById("thumb4").className = "image-gallery-thumbnail ";

          document.getElementById("triggerImage").src = "assets/images/Redtooth Triggertish.png";
      }
      function trigger3() {
        document.getElementById("bullet1").className = "image-gallery-bullet ";
        document.getElementById("bullet2").className = "image-gallery-bullet ";
          document.getElementById("bullet3").className = "image-gallery-bullet active";
          document.getElementById("bullet4").className = "image-gallery-bullet ";

          document.getElementById("thumb1").className = "image-gallery-thumbnail ";
          document.getElementById("thumb2").className = "image-gallery-thumbnail ";
          document.getElementById("thumb3").className = "image-gallery-thumbnail active";
          document.getElementById("thumb4").className = "image-gallery-thumbnail ";

          document.getElementById("triggerImage").src = "assets/images/Orange Line Triggerfish.png";
      }
      function trigger4() {
        document.getElementById("bullet1").className = "image-gallery-bullet ";
        document.getElementById("bullet2").className = "image-gallery-bullet ";
          document.getElementById("bullet3").className = "image-gallery-bullet ";
          document.getElementById("bullet4").className = "image-gallery-bullet active";

          document.getElementById("thumb1").className = "image-gallery-thumbnail ";
          document.getElementById("thumb2").className = "image-gallery-thumbnail ";
          document.getElementById("thumb3").className = "image-gallery-thumbnail ";
          document.getElementById("thumb4").className = "image-gallery-thumbnail active";

          document.getElementById("triggerImage").src = "assets/images/Picasso Triggerfish.png";
      }

      //conservation status

      function button1(){
      document.getElementById("c1").style.visibility='visible';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='visible';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='visible';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='visible';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='visible';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='visible';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='visible';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='visible';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button2(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='visible';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='visible';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='visible';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='visible';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='visible';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='visible';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='visible';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='visible';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button3(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='visible';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='visible';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='visible';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='visible';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='visible';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='visible';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='visible';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='visible';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button4(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='visible';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='visible';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='visible';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='visible';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='visible';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='visible';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='visible';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='visible';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button5(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='visible';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='visible';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='visible';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='visible';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='visible';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='visible';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='visible';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='visible';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button6(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='visible';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='visible';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='visible';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='visible';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='visible';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='visible';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='visible';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='visible';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button7(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='visible';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='visible';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='visible';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='visible';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='visible';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='visible';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='visible';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='visible';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button8(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='visible';
      document.getElementById("c9").style.visibility='hidden';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='visible';
      document.getElementById("a9").style.visibility='hidden';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='visible';
      document.getElementById("e9").style.visibility='hidden';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='visible';
      document.getElementById("i9").style.visibility='hidden';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='visible';
      document.getElementById("g9").style.visibility='hidden';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='visible';
      document.getElementById("b9").style.visibility='hidden';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='visible';
      document.getElementById("d9").style.visibility='hidden';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='visible';
      document.getElementById("h9").style.visibility='hidden';
    }
    function button9(){
      document.getElementById("c1").style.visibility='hidden';
      document.getElementById("c2").style.visibility='hidden';
      document.getElementById("c3").style.visibility='hidden';
      document.getElementById("c4").style.visibility='hidden';
      document.getElementById("c5").style.visibility='hidden';
      document.getElementById("c6").style.visibility='hidden';
      document.getElementById("c7").style.visibility='hidden';
      document.getElementById("c8").style.visibility='hidden';
      document.getElementById("c9").style.visibility='visible';
      document.getElementById("a1").style.visibility='hidden';
      document.getElementById("a2").style.visibility='hidden';
      document.getElementById("a3").style.visibility='hidden';
      document.getElementById("a4").style.visibility='hidden';
      document.getElementById("a5").style.visibility='hidden';
      document.getElementById("a6").style.visibility='hidden';
      document.getElementById("a7").style.visibility='hidden';
      document.getElementById("a8").style.visibility='hidden';
      document.getElementById("a9").style.visibility='visible';
      document.getElementById("e1").style.visibility='hidden';
      document.getElementById("e2").style.visibility='hidden';
      document.getElementById("e3").style.visibility='hidden';
      document.getElementById("e4").style.visibility='hidden';
      document.getElementById("e5").style.visibility='hidden';
      document.getElementById("e6").style.visibility='hidden';
      document.getElementById("e7").style.visibility='hidden';
      document.getElementById("e8").style.visibility='hidden';
      document.getElementById("e9").style.visibility='visible';
      document.getElementById("i1").style.visibility='hidden';
      document.getElementById("i2").style.visibility='hidden';
      document.getElementById("i3").style.visibility='hidden';
      document.getElementById("i4").style.visibility='hidden';
      document.getElementById("i5").style.visibility='hidden';
      document.getElementById("i6").style.visibility='hidden';
      document.getElementById("i7").style.visibility='hidden';
      document.getElementById("i8").style.visibility='hidden';
      document.getElementById("i9").style.visibility='visible';
      document.getElementById("g1").style.visibility='hidden';
      document.getElementById("g2").style.visibility='hidden';
      document.getElementById("g3").style.visibility='hidden';
      document.getElementById("g4").style.visibility='hidden';
      document.getElementById("g5").style.visibility='hidden';
      document.getElementById("g6").style.visibility='hidden';
      document.getElementById("g7").style.visibility='hidden';
      document.getElementById("g8").style.visibility='hidden';
      document.getElementById("g9").style.visibility='visible';
      document.getElementById("b1").style.visibility='hidden';
      document.getElementById("b2").style.visibility='hidden';
      document.getElementById("b3").style.visibility='hidden';
      document.getElementById("b4").style.visibility='hidden';
      document.getElementById("b5").style.visibility='hidden';
      document.getElementById("b6").style.visibility='hidden';
      document.getElementById("b7").style.visibility='hidden';
      document.getElementById("b8").style.visibility='hidden';
      document.getElementById("b9").style.visibility='visible';
      document.getElementById("d1").style.visibility='hidden';
      document.getElementById("d2").style.visibility='hidden';
      document.getElementById("d3").style.visibility='hidden';
      document.getElementById("d4").style.visibility='hidden';
      document.getElementById("d5").style.visibility='hidden';
      document.getElementById("d6").style.visibility='hidden';
      document.getElementById("d7").style.visibility='hidden';
      document.getElementById("d8").style.visibility='hidden';
      document.getElementById("d9").style.visibility='visible';
      document.getElementById("h1").style.visibility='hidden';
      document.getElementById("h2").style.visibility='hidden';
      document.getElementById("h3").style.visibility='hidden';
      document.getElementById("h4").style.visibility='hidden';
      document.getElementById("h5").style.visibility='hidden';
      document.getElementById("h6").style.visibility='hidden';
      document.getElementById("h7").style.visibility='hidden';
      document.getElementById("h8").style.visibility='hidden';
      document.getElementById("h9").style.visibility='visible';
    }
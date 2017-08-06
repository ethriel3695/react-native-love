// export const appContainer = {
//     fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
//     backgroundColor: '#D7D7D5'
// }

// .noJavascriptApp {
//     text-align: center;
// }

// .App-header {
//     height: 150px;
//     padding: 20px;
// }

// .App-intro {
//     font-size: large;
// }

// .container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// a {
//     text-decoration: none;
//     color: #d0021b;
// }

// ul {
//     padding: 0;
// }

// li {
//     list-style-type: none;
// }

// .navContainer {
//     position: relative;
//     min-width: 160px;
//     z-index: 1001;
// }

// .nav {
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     text-align: center;
// }

// .nav li {
//     display: inline-block;
//     color: white;
//     text-align: center;
//     padding: 3px 8px;
//     text-decoration: none;
//     color: #d0021b;
//     cursor: pointer;
//     list-style-type: none;
// }

// .active {
//     color: #000000 !important;
// }

// .home-container {
//     padding: 0;
//     text-align: center;
//     width: 240px;
//     height: 220px;
// }

// .header {
//     margin-bottom: 70px;
// }

// .imageContainer {
//     margin: 0 auto;
//     width: 140px;
//     height: 120px;
//     position: relative;
//     perspective: 1000px;
// }

// .carouselContainer {
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     transform-style: preserve-3d;
//     transition: transform 1s;
// }

// .carouselImages {
//     display: block;
//     position: absolute;
//     width: 140px;
//     height: 120px;
//     line-height: 100px;
//     text-align: center;
//     border-radius: 5px;
//     z-index: 1050;
//     image-orientation: flip;
// }

// .pic0 {
//     transform: rotateY(0deg) translateZ(130px);
// }

// .pic1 {
//     transform: rotateY(60deg) translateZ(130px);
// }

// .pic2 {
//     transform: rotateY(120deg) translateZ(130px);
// }

// .pic3 {
//     transform: rotateY(180deg) translateZ(130px);
// }

// .pic4 {
//     transform: rotateY(240deg) translateZ(130px);
// }

// .pic5 {
//     transform: rotateY(300deg) translateZ(130px);
// }

// .moveRight {
// transform: rotate(-45deg);
//     -webkit-transform: rotate(-45deg);
//     left: 13em;
//     display: none;
// }

// .moveLeft {
//     transform: rotate(135deg);
//     -webkit-transform: rotate(135deg);
//     right: 13em;
//     display: none;
// }

// i {
//   border: solid #000;
//     top: 60px;
//     cursor: pointer;
//     position: absolute;
//     border-width: 0 5px 5px 0;
//     display: inline-block;
//     padding: 7px;
//     display: none;
// }

// .captionContainer {
//     display: none;
// }

// .descriptionContainer {
//     margin: 0 auto;
//     position: relative;
//     top: 70px;
// }

// .descriptionHeader {
//     text-align: center;
// }

// .descriptionList {
//     text-align: center;
// }

// .descriptionItem {
//     list-style-type: none;
//     padding: 20px;
// }

// @media only screen and (min-width: 480px) and (max-width: 724px) 
// and (orientation: landscape) {
//     .home-container {
//         padding: 0;
//         text-align: center;
//         width: 340px;
//         height: 320px;
//     }

//     .imageContainer {
//         margin: 0 auto;
//         width: 240px;
//         height: 220px;
//         position: relative;
//         perspective: 1000px;
//     }

//     .carouselContainer {
//         height: 100%;
//         width: 100%;
//         position: absolute;
//         transform-style: preserve-3d;
//         transition: transform 1s;
//     }

//     .carouselImages {
//         display: block;
//         position: absolute;
//         width: 240px;
//         height: 220px;
//         line-height: 100px;
//         text-align: center;
//         border-radius: 5px;
//         z-index: 1050;
//         image-orientation: flip;
//     }

//     .pic0 {
//         transform: rotateY(0deg) translateZ(220px);
//     }

//     .pic1 {
//         transform: rotateY(60deg) translateZ(220px);
//     }

//     .pic2 {
//         transform: rotateY(120deg) translateZ(220px);
//     }

//     .pic3 {
//         transform: rotateY(180deg) translateZ(220px);
//     }

//     .pic4 {
//         transform: rotateY(240deg) translateZ(220px);
//     }

//     .pic5 {
//         transform: rotateY(300deg) translateZ(220px);
//     }
// }

// @media only screen and (min-width: 725px) {
//     ul {
//         padding: 0;
//     }
//     .navContainer {
//         display: flex;
//     }

//     li {
//         list-style-type: none;
//     }

//     .nav {
//         display: flex;
//     }

//     .nav li {
//         margin: 10px;
//         text-decoration: none;
//         color: #d0021b;
//         cursor: pointer;
//         list-style-type: none;
//         padding: 2px;
//     }
//     .home-container {
//         width: 500px;
//         height: 450px;
//     }

//     .imageContainer {
//         width: 270px;
//         height: 240px;
//     }
//     .carouselImages {
//         width: 270px;
//         height: 240px;
//         line-height: 100px;
//     }
    
//     .header {
//         margin-bottom: 130px;
//     }
//     .captionContainer {
//         display: block;
//         position: absolute;
//         text-align: center;
//         width: 270px;
//         height: 240px;
//         line-height: 520px;
//     }
//     .moveRight { 
//         left: 28em;
//         display: unset;
//      }
//     .moveLeft { 
//         right: 28em; 
//         display: unset;
//     }
//       i {
//         top: 110px;
//         padding: 15px;
//         display: unset;
//     }

//     .pic0 {
//         transform: rotateY(0deg) translateZ(250px);
//     }

//     .pic1 {
//         transform: rotateY(60deg) translateZ(250px);
//     }

//     .pic2 {
//         transform: rotateY(120deg) translateZ(250px);
//     }

//     .pic3 {
//         transform: rotateY(180deg) translateZ(250px);
//     }

//     .pic4 {
//         transform: rotateY(240deg) translateZ(250px);
//     }

//     .pic5 {
//         transform: rotateY(300deg) translateZ(250px);
//     }
// }

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

var xDown = null;
var yDown = null;
var direction = '';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            degreeVariation: 0
        }

        this.rotateImages = this.rotateImages.bind(this);
        this.updateImagesPosition = this.updateImagesPosition.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }

    handleTouchStart (evt) {
      console.log(evt.nativeEvent.touches[0]);
        xDown = evt.nativeEvent.touches[0].locationX;
        yDown = evt.nativeEvent.touches[0].locationY;
    }

    handleTouchMove (evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.nativeEvent.touches[0].locationX;
        var yUp = evt.nativeEvent.touches[0].locationY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                direction = 'right';
                this.rotateImages();
            } else {
                direction = 'left';
                this.rotateImages();
            }
        } else {
            if (yDiff > 0) {
                //console.log('up');
            } else {
                //console.log('down');
            }
        }

        xDown = null;
        yDown = null;
    }

    componentDidMount () {
        //var defaultImage = document.getElementsByClassName('carouselImages pic0');
        //defaultImage[0].dataset.first = 1
        //this.updateImagesPosition(this.state.degreeVariation);
    }

    componentWillReceiveProps() {
        this.setState({
            degreeVariation: 0
        })
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateImagesPosition(0);
    }

    rotateImages(evt) {
        var degreeModifier = 0;
        var classIdentifier = '';
        if (direction === '' || evt !== undefined) {
            classIdentifier = evt.target.className;
        }
        if (classIdentifier === 'moveLeft' || classIdentifier === 'moveRight') {
            direction = '';
        }
        if (classIdentifier === 'moveLeft' || direction === 'left') {
            degreeModifier = 60;
        }
        else if (classIdentifier === 'moveRight' || direction === 'right') {
            degreeModifier = -60;
        }
        this.setState({
            degreeVariation: this.state.degreeVariation + degreeModifier,
        }, function () {
            this.updateImagesPosition(this.state.degreeVariation);
        }.bind(this));
    }
//For touch https://facebook.github.io/react-native/docs/gesture-responder-system.html
//Transforms https://facebook.github.io/react-native/docs/transforms.html
    updateImagesPosition(currentPosition) {
      //   var carouselObject = document.getElementsByClassName("carouselContainer");
      //   carouselObject[0].style.transform = "rotateY(" + currentPosition + "deg)";
      //   carouselObject[0].style.webkitTransform = "rotateY(" + currentPosition + "deg)";
      //   carouselObject[0].style.mozTransform = "rotateY(" + currentPosition + "deg)";
      //  carouselObject[0].style.oTransform = "rotateY(" + currentPosition + "deg)";
    }

    render() {
        return (
            <View style={styles.homeContainer}>
                <View style={styles.imageContainer}>
                    <View style={styles.carouselContainer}>
                    {this.props.user.images.map((image, index) => {
                      var picClass = 'pic' + index;
                    return (
                      
                            <Image style={[styles.carouselImages, styles.picClass]}
                                source={image}
                                key={`image ${index}`} 
                                onTouchStart={this.handleTouchStart}
                                onTouchMove={this.handleTouchMove}/>
                        )
                    })}    
                    
                    {/*this.props.user.imageCaption.map((caption, index) => {
                        return (
                            <Text className={[styles.captionContainer, 
                              styles.picClass]}
                            key={caption + index}>
                                {caption}
                            </Text>
                        )
                    })*/} 
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
homeContainer: {
    alignItems: 'center',
  },
imageContainer: {
    margin: 0,
    width: 140,
    height: 120,
    position: 'relative',
    transform: [{perspective: 1000}]
  },
carouselContainer: {
  flex: 1,
  position: 'absolute',
  // transformStyle: 'preserve-3d',
  // transition: 'transform 1s'
  },
carouselImages: {
  display: 'block',
  position: 'absolute',
  width: 140,
  height: 120,
  alignItems: 'center',
  borderRadius: 5,
  zIndex: 1050,
  // imageOrientation: 'flip'
  },
pic0: {
  transform: [{rotateY: 0}, {translateX: 130}],
},
pic1: {
  transform: [{rotateY: 60}, {translateX: 130}],
},
pic2: {
  transform: [{rotateY: 120}, {translate: 130}],
},
pic3: {
  transform: [{rotateY: 180}, {translate: 130}],
},
pic4: {
  transform: [{rotateY: 240}, {translate: 130}],
},
pic5: {
  transform: [{rotateY: 300}, {translate: 130}],
},
captionContainer: {
  display: 'none'
}
});
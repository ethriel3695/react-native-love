import React from 'react';
import { View, Text, Image } from 'react-native';

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

    handleTouchStart (e) {
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
    }

    handleTouchMove (e) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

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

    rotateImages(e) {
        var degreeModifier = 0;
        var classIdentifier = '';
        if (direction === '' || e !== undefined) {
            classIdentifier = e.target.className;
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

    updateImagesPosition(currentPosition) {
        //var carouselObject = document.getElementsByClassName("carouselContainer");
        //carouselObject[0].style.transform = "rotateY(" + currentPosition + "deg)";
        //carouselObject[0].style.webkitTransform = "rotateY(" + currentPosition + "deg)";
        //carouselObject[0].style.mozTransform = "rotateY(" + currentPosition + "deg)";
       // carouselObject[0].style.oTransform = "rotateY(" + currentPosition + "deg)";
    }

    render() {
        return (
            <View className='home-container'>
                <Text className='header'>{this.props.user.name}</Text>
                <View className='imageContainer'>
                    <View className='carouselContainer'>
                        {this.props.user.images.map((image, index, front) => {
                        return (
                            <Image className={'carouselImages pic' + index}
                                src={image} alt='This is alex'
                                data-first='0'
                                key={image + index} 
                                onTouchStart={this.handleTouchStart}
                                onTouchMove={this.handleTouchMove}/>
                        )
                    })}    
                    {this.props.user.imageCaption.map((caption, index) => {
                        return (
                            <Text className={'captionContainer pic' + index}
                            key={caption + index}>
                                {caption}
                            </Text>
                        )
                    })}   
                    </View>
                    <View className="moveRight"
                        onClick={this.rotateImages}></View>
                    <View className="moveLeft"
                        onClick={this.rotateImages}></View>
                </View>
            </View>
        )
    }
}
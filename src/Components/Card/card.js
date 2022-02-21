import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../Card/cardStyle';
import {ShowhideCard} from '@Component'
import * as resources from 'resources';

const Card = (props) => {
    const [isVisible,setIsVisible]= React.useState(true)
	const { cardNo,title,cardDate,cardCvv,imageSource, imageSource2} = props;

    return (
        <View style={[styles.container]}>
            <ShowhideCard 
			title = {'Hide card number'}
			imageSource = {isVisible?resources.show:resources.hide}
            onPress={()=>{setIsVisible(!isVisible)}}
            style={styles.showhideButton}
			/>
       
        <View style={[styles.cardContainer]}>
                <View style = {styles.cardLogoContainer}>
                <Image source={imageSource} style = {styles.LogoStyle}  />
                </View>
                <View style = {styles.detailStyle}>
            <Text style={[styles.nameText]}>{title}</Text>
          { isVisible? <Text style={[styles.NumberText]}>{cardNo}</Text>:
          <Text style={[styles.NumberText2]}>{".... .... .... ...."}</Text>
          }
            <View style={[styles.txtContainer]}>
                <Text style={[styles.dateText]}>{cardDate}</Text>
                <Text style={[styles.cvvText]}>{"CVV:"}</Text>
                { isVisible? 
                <Text style={[styles.cvvText]}>{cardCvv}</Text> :
              <Text style={[styles.cvvText]}>{"* * *"}</Text>
          }
            </View>
            </View>
            <View style = {styles.cardLogoContainer2}>
                <Image source={imageSource2} style = {styles.LogoStyle2}  />
                </View>
        </View>
        </View>
    )
}

export default Card
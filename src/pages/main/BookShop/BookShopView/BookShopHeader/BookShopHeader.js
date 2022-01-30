import React from "react";
import {Pressable, View} from 'react-native'
import Typography from "../../../../../components/Typography";
import CustomIcon from "../../../../../components/CustomIcon";
import palette from "../../../../../theme/palette";
import styles from "./stylesheet";
export default function BookShopHeader(){
    return(
        <View style={styles.root}>
            <Pressable>
                <View style={styles.lefticon}>
                    <CustomIcon
                        name={"arrow_back_24px"}
                        size={24}
                    />
                </View>
            </Pressable>
            <View>
                <Typography  variant="medium18" color={palette.M_3_SYS_ON_SURFACE}>
                    کتاب یاب
                </Typography>
            </View>
            <View style={styles.righticon}>
                <Pressable>
                    <CustomIcon
                        name={'icons8_search_1-1'}
                        size={24}
                    />
                </Pressable>
              <Pressable>
                  <CustomIcon
                      name={'icons8_search_1-1'}
                      size={24}
                  />
              </Pressable>

            </View>
        </View>

    )

}
import React, {useRef, useState} from 'react'
import {FlatList, Pressable} from 'react-native'

import theme from '../../theme'
import Typography from '../Typography'
import makeStyles from "../../helpers/makeStyles";

function CustomPicker({options, onChange, selected, textVariant = 'body2'}) {
  const scrollRef = useRef()
  const [offset, setOffset] = useState(0)
    const styles = useStyles()
  return (
    <FlatList
      onMomentumScrollEnd={(e) => {
        const offsetDif = e.nativeEvent.contentOffset.y - offset
        let targetIndex = Math.floor(e.nativeEvent.contentOffset.y / 50) + 1
        targetIndex = offsetDif > 0 ? targetIndex : targetIndex - 1
        targetIndex =
          targetIndex === options.length ? options.length - 1 : targetIndex
        setOffset(targetIndex * 50)
        scrollRef.current.scrollToIndex({index: targetIndex})
        onChange({...options[targetIndex], index: targetIndex})
      }}
      initialScrollIndex={selected && selected.index ? selected.index : 0}
      ref={scrollRef}
      style={styles.root}
      data={[{value: -1, label: ''}, ...options, {value: -5, label: ''}]}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <Pressable
            // onPress={() => {
            //   onChange({...item, index: index})
            // }}
            style={item.label === '' ? styles.itemNull : styles.itemView}>
            <Typography
              variant={textVariant}
              style={
                selected && selected.value === item.value
                  ? styles.selectedItem
                  : styles.itemText
              }>
              {item.label}
            </Typography>
          </Pressable>
        )
      }}
      keyExtractor={(item, index) => index + ''}
    />
  )
}

export default React.memo(CustomPicker)

const useStyles = makeStyles(() => ({
  root: {
    padding: 5
  },
  itemView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // borderBottomColor: palette.fo,
    borderBottomWidth: 0.5,
    height: 50
  },
  itemNull: {
    height: 50
  },
  selectedItem: {
    // color: palette.link.text,
    fontFamily: theme.Shabnam
    // fontSize: 16
  },
  itemText: {
    // color: palette.balticSea
  }
}))

import { Modal, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { goBack } from '../utils/NavigationService'
import MenuIcon from '../assets/icons/menu.svg'
import AddIcon from '../assets/icons/addButton.svg'
import CloseIcon from '../assets/icons/closeButton.svg'
import BellIcon from '../assets/icons/bell.svg'
import { COLORS } from '../utils/colors'
import { scale } from 'react-native-size-matters'
import TextButton from '../components/TextButton'
import InputWithIcon from '../components/InputWithIcon'
import DropdownInput from '../components/DropDownInput'
import { NOTES_DROP_DOWN_LIST } from '../utils/data'

export default function AddNotes() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noteType, setNoteType] = useState("");

  const addNoteHandler = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Header
        title="Secure Notes"
        leftIcon={<MenuIcon width={25} height={25} />}
        rightIcon={[
          <AddIcon width={28} height={28} />,
          <BellIcon width={28} height={28} />,
        ]}
        onLeftPress={() => goBack()}
        onRightPress={(index) => {
          if (index === 0) {
            setIsModalVisible(true);
          }
          if (index === 1) {
            console.log("Bell pressed");
          }
        }}
      />
      <Modal
        animationType='fade'
        transparent={true}
        visible={isModalVisible}>
        <View style={styles.notesModal}>
          <View style={styles.modalHeader}>
            <CloseIcon width={30} height={30}
             onPress={()=>setIsModalVisible(false)}
            style={styles.closeIcon}/>
          </View>
          <View style={styles.innerContainer}>
            <DropdownInput
              label="Select category"
              placeholder="category"
              data={NOTES_DROP_DOWN_LIST}
              value={noteType}
              onSelect={setNoteType}
            />
            <InputWithIcon
              label="Note Entry"
              placeholder="Enter note...."
              secureTextEntry={false}
            />
            <InputWithIcon
              label="Additonal Information of note"
              placeholder="Enter information...."
              secureTextEntry={false}
            />
          </View>
          <TextButton onPress={addNoteHandler}>Add Note</TextButton>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pink
  },
  notesModal: {
    borderRadius: scale(10),
    marginHorizontal: scale(20),
    height: scale(400),
    marginTop: scale(120),
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  innerContainer: {
    marginHorizontal: scale(14),
    marginVertical: scale(40)
  },
  modalHeader:{
    marginVertical: scale(4),
  },
  closeIcon:{ 
    position: 'absolute',
    right:scale(10),
    top: scale(10)
  }
})
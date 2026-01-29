import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  configureTheme,
  CustomButton,
  CustomInput,
  CustomText,
  CustomTag,
  TextWithImage,
  CustomCheckbox,
  CustomDivider,
  CustomAvatar,
  CustomToggleSwitch,
  CustomBottomSheet,
  CustomCard,
  CustomModal,
  CustomSnackbar,
  CustomAccordion,
  CustomRadioGroup,
  CustomSlider,
  CustomDropDown,
  CustomMultiSelectDropDown,
  makeLogFolder,
  deleteLogFile,
  CustomImage
} from 'react-native-triveni-common-component';
import { apiUtils, LOG } from './utils';

// Configure fonts, sizes, and colors only once
configureTheme({
  fontSizes: {
    xxs: 10,
    xs: 12,
    base: 14,
    sm: 16,
    md: 18,
    xl: 20,
    xl2: 24,
    xl4: 40,
    xl3: 48,
  },
  fontFamily: {
    Regular: 'Arial',
    Bold: 'Arial-Bold',
    Medium: 'Arial-Medium',
    SemiBold: 'Arial-SemiBold',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    disable: '#D0D0D0',
    primary: '#0053FF',
    secondPrimary: '#001644',
    gray: '#7C7C7C',
    error: '#FF0000',
    transparent: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function App() {
  const [showSheet, setShowSheet] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showSnackbar, setShowSnackbar] = React.useState(false);
  const [fruit, setFruit] = React.useState('apple');
  const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);
  const [sliderVal, setSliderVal] = React.useState(25);
  const [dropDownValue, setDropDownValue] = React.useState<{
    label: string;
    value: string | number;
  } | null>(null);
  const [multiselectDropDownValue, setMultiselectDropDownValue] =
    React.useState<string[] | null>(null);

  const dropdownList = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const data = [
    {
      id: '1',
      title: 'FAQs',
      content: [
        'This is some additional content inside the accordion!',
        'Another FAQ point goes here.',
      ],
    },
    {
      id: '2',
      title: 'Terms & Conditions',
      content: ['All your legal stuff here.', 'Don’t forget the fine print!'],
    },
    {
      id: '3',
      title: 'Support',
      content: ['Email us at support@example.com', 'Call us: 123-456-7890'],
    },
  ];

  const handleCheckboxChange = (value: boolean) => {
    console.log('Checked:', value);
  };

  useEffect(() => {
    makeLogFolder()
    deleteLogFile()
  }, [])

  const handleCAllAPI = async () => {
    try {
      const response = await apiUtils.GET('/posts/1');
      LOG.info('API Response', { response });
    } catch (error) {
      LOG.error('API Call Failed', { error });
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* <CustomLoader /> */}
          <CustomText size="xl">Hello World</CustomText>
          <CustomInput isFloating title={'First Name'} mandatory />
          <CustomDropDown
            isFloating
            title={'Dropdown example'}
            searchPlaceholder={'Search...'}
            data={dropdownList}
            value={dropDownValue}
            search
            onChange={(value) => {
              setDropDownValue(value);
            }}
            mandatory
          />
          <CustomMultiSelectDropDown
            isFloating
            title={'Multi select dropdown example'}
            data={dropdownList}
            searchPlaceholder={'Search...'}
            value={multiselectDropDownValue}
            search
            selectAllLabel="All"
            isAllSelectedEnabled
            onChange={(value) => {
              setMultiselectDropDownValue(value);
            }}
            mandatory
          />

          <CustomButton title="Submit" />
          <CustomButton disabled title="Submit" />
          <CustomTag
            title="Custom"
            tagBackgroundColor="blue"
            textColor="white"
            fontSize="md"
          />
          <CustomButton title="Call API WITH LOG" onPress={handleCAllAPI} />
          <CustomImage source={{
            uri: "https://fastly.picsum.photos/id/239/200/300.jpg?hmac=jBV5mUiY1RXDAmu4rQXOdWeutyztlxqFSOVpnJ-QUb8",
            scale: 10,
            cache: 'reload',
          }}
            containerStyle={{ height: 200, width: 200 }}
          />
          <TextWithImage
            numberOfLines={3}
            renderLeftView={
              <Image
                source={{
                  uri: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
                }}
                style={styles.imageStyle}
              />
            }
            title={'The react-native-triveni-component'}
          />
          <CustomDivider thickness={1} color="black" />
          <View style={styles.toggleView}>
            <CustomCheckbox
              onValueChange={handleCheckboxChange}
              checkColor="primary"
              uncheckColor="black"
              size={30}
              title="Terms and conditions"
            />
            <CustomToggleSwitch
              value={false}
              onValueChange={(val) => console.log(val)}
              label="Enable Notifications"
              labelPosition="right"
              activeColor="primary"
              inactiveColor="gray"
              thumbColorOff="green"
              thumbColorOn="red"
            />
          </View>
          <CustomDivider thickness={1} color="black" />
          <CustomCard
            padding="large"
            radius="large"
            bgColor="disable"
            style={{ gap: 10, width: '100%' }}
          >
            <CustomText size="xl4" font="Bold">
              Card Title
            </CustomText>
            <CustomText size="base">This is a card description.</CustomText>
            <CustomButton
              title="Open Modal"
              onPress={() => {
                setShow(true);
              }}
            />
          </CustomCard>
          <CustomModal
            visible={show}
            onClose={() => {
              setShow(false);
            }}
            style={{ gap: 10 }}
          >
            <CustomText size="xl" font="Bold">
              Open Bottom sheet to see avatar
            </CustomText>
            <CustomDivider thickness={1} color="black" />
            <CustomButton
              title="Open Bottom sheet"
              onPress={() => {
                setShow(false);
                setShowSheet(true);
              }}
            />
          </CustomModal>
          <FlatList
            data={data}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CustomAccordion title={item.title}>
                {item.content.map((line, index) => (
                  <CustomText key={index}>{line}</CustomText>
                ))}
              </CustomAccordion>
            )}
          />
          <CustomRadioGroup
            containerStyle={styles.radioButton}
            value={fruit}
            onChange={setFruit}
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana', disabled: true },
              { label: 'Mango', value: 'mango' },
            ]}
          />
          <CustomRadioGroup
            type="multiple"
            labelStyle={{ fontSize: 18, color: 'purple' }}
            circleStyle={{ borderWidth: 3, borderColor: 'orange' }}
            containerStyle={styles.radioButton}
            value={selectedFruits}
            onChange={setSelectedFruits}
            options={[
              { label: 'Apple', value: 'apple' },
              { label: 'Banana', value: 'banana' },
              { label: 'Mango', value: 'mango', disabled: true },
            ]}
          />
          <CustomSlider
            label="Brightness"
            value={sliderVal}
            onChange={setSliderVal}
            min={0}
            max={100}
            step={1}
            showValue
            trackColor="orange"
            trackSecondaryColor="lightgray"
            thumbColor="purple"
            containerStyle={{ padding: 16 }}
            valueStyle={{ color: 'blue', fontWeight: 'bold' }}
            renderValue={(val) => (
              <CustomText size="xl2" font="Bold" style={{ color: 'green' }}>
                {val}%
              </CustomText>
            )}
            sliderProps={{ disabled: false }}
          />
        </ScrollView>
      </SafeAreaView>
      <CustomBottomSheet
        visible={showSheet}
        onClose={() => {
          console.log('closed');
          setShowSheet(false);
          setShowSnackbar(true);
        }}
        snapPoints={['50%', '90%']}
      >
        <View style={{ gap: 15, alignItems: 'center' }}>
          <CustomAvatar
            name="Ridham Tejani"
            uri=""
            size={160}
            showStatus
            isOnline
            backgroundColor="secondPrimary"
            textColor="white"
            containerStyle={{ alignSelf: 'center' }}
          />
          <CustomText size="xl">Hello World</CustomText>
          <CustomInput title={'First Name'} placeholder={'First Name'} />
          <CustomInput title={'Last Name'} placeholder={'Last Name'} />
          <CustomInput title={'Middle Name'} placeholder={'Middle Name'} />
          <CustomInput title={'Mother Name'} placeholder={'Mother Name'} />
        </View>
      </CustomBottomSheet>
      <CustomSnackbar
        visible={showSnackbar}
        message="bottom sheet close successfully! 🎉🥳"
        bgColor="primary"
        textColor="white"
        onHide={() => setShowSnackbar(false)}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 10,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  toggleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  radioButton: {
    flexDirection: 'row',
    gap: 15,
  },
});

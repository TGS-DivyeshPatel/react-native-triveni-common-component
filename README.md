# react-native-triveni-common-component

The `react-native-triveni-common-component` is a custom component library developed by **Triveni Global Software Services LLP** for React Native applications. This library provides a collection of reusable, high-quality, and customizable UI components to accelerate the development process and maintain consistency across projects.

## Installation

```sh
npm install react-native-triveni-common-component
```

## Installing dependencies into a bare React Native project

```sh
npm install react-native-device-info
```

```sh
npm install react-native-fast-image
```

```sh
npm install @gorhom/bottom-sheet
```

```sh
npm install @react-native-community/slider
```

### ios

```sh
npx pod-install
```

## Theme Configuration

This project contains a customizable theme configuration for font sizes, font families, and colors. It allows you to easily maintain consistent styling across your application.

## How to add custom font into you project

Follow this link
[Link Text](https://medium.com/@noamkurtzer/custom-fonts-in-react-native-app-7d07310f75e8)

```js
import { fontSizes, fontFamily, colorsLight } from './theme';

configureTheme({
  fontSizes: fontSizes,
  fontFamily: {
    Regular: fontFamily.Regular,
    Bold: fontFamily.Bold,
    Medium: fontFamily.Medium,
    SemiBold: fontFamily.SemiBold,
  },
  colors: {
    black: colorsLight.black,
    white: colorsLight.white,
    disable: colorsLight.gray200,
    primary: colorsLight.primary,
    secondPrimary: colorsLight.secondary,
    gray: colorsLight.gray400,
    error: colorsLight.red,
    transparent: colorsLight.transparent,
  },
});
```

## FontSize

Add the following code to the font file. If you are using the boilerplate, you can add it to the fonts.ts file. If not, you can add it to any other file.

```js
export const fontSizes = {
  xxs: 10,
  xs: 12,
  base: 14,
  sm: 16,
  md: 18,
  xl: 20,
  xl2: 24,
  xl3: 40,
  xl4: 48,
};
```

## FontFamily

Add the following code to the font file. If you are using the boilerplate, you can add it to the fonts.ts file. If not, you can add it to any other file.

```js
export const fontFamily = {
  Bold: 'Manrope-Bold',
  SemiBold: 'Manrope-SemiBold',
  Medium: 'Manrope-Medium',
  Regular: 'Manrope-Regular',
};
```

## CustomButton Component

```js
import { CustomButton } from 'react-native-triveni-common-component';

// ...

<CustomButton title="Submit" />;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/ButtonPreview.png 'CustomButton Preview')

Properties used to customize the rendering:

| Prop                | Default | Type        | Description                                                                                 |
| ------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------- |
| **title**           | -       | `string`    | To define button title                                                                      |
| **variant**         | default | `enum`      | Display the button as per the variant, default and border                                   |
| **radius**          | round   | `enum`      | Radius of button, total radius type none, normal and round                                  |
| **icon**            | -       | `ReactNode` | Display the icon with title                                                                 |
| **btnBgColor**      | primary | `enum`      | background color of button                                                                  |
| **isBottomMargin**  | false   | `boolean`   | Add bottom marge                                                                            |
| **btnTitleStyle**   | -       | `object`    | Add additional button title style                                                           |
| **style**           | -       | `object`    | Add additional button style                                                                 |
| **onPress**         | -       | `function`  | onPress of button                                                                           |
| **titleTextSize**   | -       | `enum`      | Adjust the title text size. like "xxs", "xs", "base", "sm", "md", "xl", "xl2", "xl3", "xl4" |
| **titleFontFamily** | -       | `enum`      | Adjust the title text font family. like "Bold", "SemiBold", "Medium", "Regular"             |

## CustomText Component

```js
import { CustomText } from 'react-native-triveni-common-component';

// ...

<CustomText>Your Text</CustomText>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/TextPreview.png 'CustomText Preview')

Properties used to customize the rendering:

| Prop          | Default | Type       | Description                                                          |
| ------------- | ------- | ---------- | -------------------------------------------------------------------- |
| **size**      | base    | `enum`     | Size of text component like xxs, xs, base, sm, md, xl, xl2, xl3, xl4 |
| **font**      | Regular | `enum`     | Custom font of text component like Bold, SemiBold, Medium, Regular   |
| **textColor** | black   | `enum`     | Color of text component                                              |
| **style**     | -       | `object`   | Add additional text style                                            |
| **onPress**   | -       | `function` | onPress of text component                                            |

## CustomInput Component

```js
import { CustomInput } from 'react-native-triveni-common-component';

// ...

<CustomInput title="First Name" placeholder="First Name" />;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomInput.png 'CustomInput Preview')

Properties used to customize the rendering:

| Prop                | Default   | Type        | Description                                                                                                                            |
| ------------------- | --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **title**           | undefine  | `string`    | Input title                                                                                                                            |
| **value**           | undefine  | `string`    | The value to show for the text input                                                                                                   |
| **isFloating**      | undefine  | `boolean`   | Enables floating label behavior (label floats above input when focused or filled)                                                      |
| **renderLeftIcon**  | undefine  | `ReactNode` | Render left input icon                                                                                                                 |
| **renderRightIcon** | undefine  | `ReactNode` | Render right input icon                                                                                                                |
| **renderErrorIcon** | undefine  | `ReactNode` | Render error input icon                                                                                                                |
| **errorText**       | undefine  | `string`    | Input error text                                                                                                                       |
| **inputContainer**  | undefine  | `ViewStyle` | Add additional input container style                                                                                                   |
| **mainContainer**   | undefine  | `ViewStyle` | Add additional main container style                                                                                                    |
| **titleTxtStyle**   | undefine  | `TextStyle` | Add additional title text style                                                                                                        |
| **style**           | undefine  | `TextStyle` | Add additional input style                                                                                                             |
| **onChangeText**    | undefine  | `function`  | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler |
| `mandatory`         | `boolean` | False       | If true, displays a red (\*) icon next to the title and in the placeholder when `isFloating` is enabled.                               |

## CustomImage Component

```js
import { CustomImage } from 'react-native-triveni-common-component';

// ...

<CustomImage
    source={{ uri: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" }}
/>
<CustomImage
    source={require('../images/Test.png')}
/>
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomImage.png 'CustomLoader Preview')

Properties used to customize the rendering:

| Prop           | Default  | Type         | Description                                                                                                                                                                                               |
| -------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **resizeMode** | undefine | `enum`       | contain, cover, stretch and center                                                                                                                                                                        |
| **style**      | undefine | `ImageStyle` | A React Native style. Supports using borderRadius.                                                                                                                                                        |
| **source**     | undefine | `object`     | Source for the remote image to load. Remote url to load the image from. e.g. 'https://facebook.github.io/react/img/logo_og.png'. Headers to load the image with. e.g. { Authorization: 'someAuthToken' }. |

## CustomLoader Component

```js
import { CustomLoader } from 'react-native-triveni-common-component';

// ...

<CustomLoader size="small"/>
<CustomLoader size="large"/>
<CustomLoader size={200}/>
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomLoader.gif 'CustomLoader Preview')

Properties used to customize the rendering:

| Prop                    | Default  | Type        | Description                               |
| ----------------------- | -------- | ----------- | ----------------------------------------- |
| **color**               | primary  | `enum`      | Loader color.                             |
| **size**                | large    | `enum`      | Loader size like large, small and number. |
| **loaderViewStyle**     | undefine | `ViewStyle` | Loader view style                         |
| **backgroundViewStyle** | undefine | `ViewStyle` | Loader background view style.             |

## CustomTag Component

```js
import { CustomTag } from 'react-native-triveni-common-component';

// ...

<CustomTag
  title="Custom"
  tagBackgroundColor="blue"
  textColor="white"
  fontSize="md"
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomTag.png 'CustomLoader Preview')

Properties used to customize the rendering:

| Prop                   | Default  | Type     | Description                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------- |
| **title**              | undefine | `string` | Tag title                                                                        |
| **height**             | 10       | `number` | Height of tag (This is a container with padding acting as height on both sides.) |
| **width**              | 20       | `number` | Width of tag (This is a container with padding acting as width on both sides.).  |
| **tagBackgroundColor** | blue     | `string` | Background color of tag.                                                         |
| **tagViewStyle**       | undefine | `Object` | Add additional style of customTag.                                               |
| **fontSize**           | base     | `enum`   | Font size of tagView title.                                                      |
| **fontFamily**         | Regular  | `enum`   | Font family of tagView title.                                                    |
| **textColor**          | black    | `string` | Color of tag title.                                                              |

## TextWithImage Component

```js
import { TextWithImage } from 'react-native-triveni-common-component';

// ...

<TextWithImage
  renderLeftView={
    <Image
      source={{
        uri: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
      }}
      style={{ height: 20, width: 20 }}
    />
  }
  title="Hello I am name is Triveni"
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/TextWithImage.png 'TextPreview Preview')

Properties used to customize the rendering:

| Prop                | Default  | Type        | Description                             |
| ------------------- | -------- | ----------- | --------------------------------------- |
| **title**           | undefine | `string`    | Tag title                               |
| **titleStyle**      | undefine | `TextStyle` | Add additional style of titleTxt.       |
| **containerStyle**  | undefine | `ViewStyle` | Add additional style of main container. |
| **renderLeftView**  | undefine | `ReactNode` | Add any component left side of text.    |
| **renderRightView** | undefine | `ReactNode` | Add any component right side of text.   |

# Custom Hooks

A custom hook in React is a reusable function that starts with the prefix `use` and lets you encapsulate logic for managing state or side effects. It enables you to extract logic from components and share it across multiple components, making your code cleaner, modular, and easier to maintain.

## useHasNotch

A custom React hook that detects whether the device has a notch (common on modern smartphones). It returns a boolean value (`true` if the device has a notch, `false` otherwise). This can be useful for adjusting UI layouts or spacing to accommodate devices with notches.

```js
import { useHasNotch } from 'react-native-triveni-common-component';

// ...

const hasNotch = useHasNotch();
```

## CustomCheckbox Component

A customizable checkbox component with optional title text and support for custom colors, size, and disabled state.

```js
import { CustomCheckbox } from 'react-native-triveni-common-component';

// ...

<CustomCheckbox
  onValueChange={handleCheckboxChange}
  checkColor="primary"
  uncheckColor="black"
  size={30}
  title="Terms and conditions"
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomCheckbox.png 'CustomCheckbox Preview')

Properties used to customize the rendering:

| Prop              | Default     | Type                       | Description                                                                   |
| ----------------- | ----------- | -------------------------- | ----------------------------------------------------------------------------- |
| **defaultValue**  | `false`     | `boolean`                  | Initial checkbox value (checked or unchecked).                                |
| **onValueChange** | `undefined` | `(value: boolean) => void` | Callback triggered when checkbox state changes.                               |
| **onTitlePress**  | `undefined` | `() => void`               | Callback triggered when the title text is pressed.                            |
| **style**         | `undefined` | `StyleProp<ViewStyle>`     | Additional styles for the main container.                                     |
| **checkColor**    | `'primary'` | `keyof ThemeColors`        | Color for the checkbox when checked (from `getCustomThemeConfig().colors`).   |
| **uncheckColor**  | `'primary'` | `keyof ThemeColors`        | Color for the checkbox when unchecked (from `getCustomThemeConfig().colors`). |
| **size**          | `25`        | `number`                   | Size (height and width) of the checkbox icon.                                 |
| **disabled**      | `false`     | `boolean`                  | If true, disables interaction and applies disabled styling.                   |
| **title**         | `undefined` | `string`                   | Optional label shown next to the checkbox.                                    |
| **titleStyle**    | `undefined` | `TextStyle`                | Additional style for the title text.                                          |

## CustomDivider Component

A simple horizontal divider component to visually separate sections. Supports customizable thickness, color, and margins.

```js
import { CustomDivider } from 'react-native-triveni-common-component';

// ...

<CustomDivider thickness={1} color="black" />;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomDivider.png 'CustomDivider Preview')

Properties used to customize the rendering:

| Prop                 | Default     | Type                   | Description                                                |
| -------------------- | ----------- | ---------------------- | ---------------------------------------------------------- |
| **thickness**        | `1`         | `number`               | Height of the divider line.                                |
| **color**            | `'gray'`    | `keyof ThemeColors`    | Color of the divider from `getCustomThemeConfig().colors`. |
| **style**            | `undefined` | `StyleProp<ViewStyle>` | Additional styles to apply to the divider.                 |
| **marginVertical**   | `8`         | `number`               | Vertical margin around the divider.                        |
| **marginHorizontal** | `0`         | `number`               | Horizontal margin around the divider.                      |

## CustomAvatar Component

A customizable avatar component that can display either a profile image or user initials with an optional online status indicator.

```js
import { CustomAvatar } from 'react-native-triveni-common-component';

// ...

<CustomAvatar
  name="Ridham Tejani"
  uri=""
  size={160}
  showStatus
  isOnline
  backgroundColor="secondPrimary"
  textColor="white"
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomAvatar.png 'CustomAvatar Preview')

Properties used to customize the rendering:

| Prop                | Default     | Type                | Description                                                              |
| ------------------- | ----------- | ------------------- | ------------------------------------------------------------------------ |
| **name**            | `undefined` | `string`            | Full name used to extract and display initials if `uri` is not provided. |
| **uri**             | `undefined` | `string`            | Remote image URL to display as the avatar.                               |
| **size**            | `60`        | `number`            | Diameter of the avatar in pixels.                                        |
| **showStatus**      | `false`     | `boolean`           | Whether to show the status indicator dot.                                |
| **isOnline**        | `false`     | `boolean`           | If `true`, shows the status dot in primary color; otherwise, in gray.    |
| **backgroundColor** | `'gray'`    | `keyof ThemeColors` | Background color used when displaying initials.                          |
| **textColor**       | `'white'`   | `keyof ThemeColors` | Text color of the initials.                                              |
| **containerStyle**  | `undefined` | `ViewStyle`         | Custom styles for the avatar container.                                  |
| **textStyle**       | `undefined` | `TextStyle`         | Custom styles for the initials text.                                     |

## CustomToggleSwitch Component

A flexible toggle switch component with optional label support and theme-based customization for both Android and iOS platforms.

```js
import { CustomToggleSwitch } from 'react-native-triveni-common-component';

// ...

<CustomToggleSwitch
  value={false}
  onValueChange={(val) => console.log(val)}
  label="Enable Notifications"
  labelPosition="right"
  activeColor="primary"
  inactiveColor="gray"
  thumbColorOff="green"
  thumbColorOn="red"
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomToggleSwitch.png 'CustomToggleSwitch Preview')

Properties used to customize the rendering:

| Prop              | Default        | Type                     | Description                                   |
| ----------------- | -------------- | ------------------------ | --------------------------------------------- |
| **value**         | `false`        | `boolean`                | Current state of the switch.                  |
| **onValueChange** | `undefined`    | `(val: boolean) => void` | Callback when the switch value changes.       |
| **style**         | `undefined`    | `StyleProp<ViewStyle>`   | Additional styling for the container.         |
| **activeColor**   | `'primary'`    | `keyof ThemeColors`      | Track color when the switch is ON.            |
| **inactiveColor** | `'gray'`       | `keyof ThemeColors`      | Track color when the switch is OFF.           |
| **disabled**      | `false`        | `boolean`                | Whether the switch is disabled.               |
| **label**         | `undefined`    | `string`                 | Text label to display alongside the switch.   |
| **labelPosition** | `'left'`       | \`'left'                 | Position of the label relative to the switch. |
| **thumbColorOn**  | `colors.white` | `string`                 | Custom color for the thumb when ON.           |
| **thumbColorOff** | `colors.white` | `string`                 | Custom color for the thumb when OFF.          |

## CustomBottomSheet Component

A reusable bottom sheet component built using @gorhom/bottom-sheet, providing responsive behavior, optional title, keyboard handling, and customizable snap points.

```js
import { CustomBottomSheet } from 'react-native-triveni-common-component';

// ...

const [showSheet, setShowSheet] = React.useState(false);

<CustomBottomSheet
  visible={showSheet}
  onClose={() => {
    setShowSheet(false);
  }}
  snapPoints={['50%', '90%']}
>
  // Bottom sheet content
</CustomBottomSheet>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomBottomSheet.gif 'CustomBottomSheet Preview')

Properties used to customize the rendering:

| Prop           | Default          | Type                 | Description                                                                                                                                                 |
| -------------- | ---------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **visible**    | `false`          | `boolean`            | Controls the visibility of the bottom sheet.                                                                                                                |
| **onClose**    | `undefined`      | `() => void`         | Callback invoked when the sheet is dismissed (via swipe or backdrop press).                                                                                 |
| **title**      | `undefined`      | `string`             | Optional header text shown at the top of the sheet.                                                                                                         |
| **children**   | _required_       | `React.ReactNode`    | Content to render inside the sheet.                                                                                                                         |
| **snapPoints** | `['50%', '90%']` | (string or number)[] | Defines the snap points for the sheet — accepts percentages (e.g., '50%') or pixel values (e.g., 300). The sheet will snap to these positions when dragged. |

## CustomCard Component

A flexible and theme-aware card component to wrap content with optional padding, elevation, border radius, and background color.

```js
import { CustomCard } from 'react-native-triveni-common-component';

// ...

<CustomCard
  padding="large"
  radius="large"
  bgColor="disable"
  style={{ width: '100%' }}
>
  // Your content
</CustomCard>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomCard.png 'CustomCard Preview')

Properties used to customize the rendering:

| Prop          | Default     | Type                                       | Description                                                                    |
| ------------- | ----------- | ------------------------------------------ | ------------------------------------------------------------------------------ |
| **children**  | _required_  | `React.ReactNode`                          | Elements or components rendered inside the card.                               |
| **elevation** | `3`         | `number`                                   | Sets elevation and shadow for Android/iOS.                                     |
| **padding**   | `'medium'`  | `'none' \| 'small' \| 'medium' \| 'large'` | Controls internal spacing of the card.                                         |
| **radius**    | `'medium'`  | `'none' \| 'small' \| 'medium' \| 'large'` | Sets border radius for rounded corners.                                        |
| **bgColor**   | `'white'`   | `keyof colors from theme`                  | Applies background color from theme (e.g., `'primary'`, `'disable'`).          |
| **style**     | `undefined` | `StyleProp<ViewStyle>`                     | Additional styles for the card container.                                      |
| _...props_    | _optional_  | `ViewProps`                                | Pass-through props for the `View` component (e.g., `testID`, `accessibility`). |

## CustomModal Component

A customizable modal component with theme-based background and centered content. Automatically includes a dimmed backdrop and dismiss-on-press-out behavior.

```js
import { CustomModal } from 'react-native-triveni-common-component';

// ...

const [show, setShow] = React.useState(false);

<CustomModal
  visible={show}
  onClose={() => {
    setShow(false);
  }}
>
  // Modal content
</CustomModal>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomModal.gif 'CustomModal Preview')

Properties used to customize the rendering:

| Prop         | Default     | Type                              | Description                                                                  |
| ------------ | ----------- | --------------------------------- | ---------------------------------------------------------------------------- |
| **visible**  | _required_  | `boolean`                         | Controls whether the modal is shown.                                         |
| **onClose**  | _required_  | `() => void`                      | Called when the user taps outside the modal (on the backdrop).               |
| **children** | `undefined` | `React.ReactNode`                 | Content displayed inside the modal.                                          |
| **bgColor**  | `'white'`   | `keyof colors from theme`         | Sets the modal background color using your theme config.                     |
| **style**    | `undefined` | `StyleProp<ViewStyle>`            | Custom styles applied to the modal container (e.g., padding, border radius). |
| _...props_   | _optional_  | `Omit<ModalProps, 'transparent'>` | Any other valid React Native `Modal` props except `transparent`.             |

## CustomSnackbar Component

A customizable snackbar component that slides in from the bottom and disappears automatically. Useful for brief messages or alerts.

```js
import { CustomSnackbar } from 'react-native-triveni-common-component';

// ...

const [showSnackbar, setShowSnackbar] = React.useState(false);

<CustomSnackbar
  visible={showSnackbar}
  message="Snackbar open successfully! 🎉🥳"
  bgColor="primary"
  textColor="white"
  onHide={() => setShowSnackbar(false)}
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomSnackbar.png 'CustomSnackbar Preview')

Properties used to customize the rendering:

| Prop          | Default     | Type                     | Description                                                           |
| ------------- | ----------- | ------------------------ | --------------------------------------------------------------------- |
| **visible**   | _required_  | `boolean`                | Whether the snackbar is visible on the screen.                        |
| **message**   | _required_  | `string`                 | The message text to display inside the snackbar.                      |
| **duration**  | `3000`      | `number` (milliseconds)  | How long the snackbar remains visible before auto-hiding.             |
| **bgColor**   | `'black'`   | `keyof theme.colors`     | The background color of the snackbar based on the theme.              |
| **textColor** | `'white'`   | `keyof theme.colors`     | The text color for the snackbar message.                              |
| **style**     | `undefined` | `StyleProp<ViewStyle>`   | Optional custom styles for the outer snackbar container.              |
| **textStyle** | `undefined` | `StyleProp<TextStyle>`   | Optional custom styles for the text inside the snackbar.              |
| **size**      | `'xl'`      | `keyof theme.fontSizes`  | Font size of the snackbar message from the theme.                     |
| **font**      | `'Bold'`    | `keyof theme.fontFamily` | Font family of the snackbar message from the theme.                   |
| **onHide**    | `undefined` | `() => void`             | Callback triggered when the snackbar is hidden (after duration ends). |

## CustomAccordion Component

An expandable/collapsible panel to show and hide content. Ideal for FAQs, sections, or grouped content.

```js
import { CustomAccordion } from 'react-native-triveni-common-component';

// ...
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

// ...

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
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomAccordion.gif 'CustomAccordion Preview')

Properties used to customize the rendering:

| Prop               | Default             | Type                   | Description                                                 |
| ------------------ | ------------------- | ---------------------- | ----------------------------------------------------------- |
| **title**          | _required_          | `string`               | The title of the accordion section.                         |
| **children**       | _required_          | `React.ReactNode`      | Content shown when the accordion is expanded.               |
| **initiallyOpen**  | `false`             | `boolean`              | Whether the accordion starts in the open state.             |
| **containerStyle** | `undefined`         | `StyleProp<ViewStyle>` | Custom styles for the accordion container.                  |
| **titleStyle**     | `undefined`         | `StyleProp<TextStyle>` | Custom styles for the title text.                           |
| **contentStyle**   | `undefined`         | `StyleProp<ViewStyle>` | Custom styles for the content view inside the accordion.    |
| **textColor**      | `'black'`           | `keyof theme.colors`   | Theme color used for the title text.                        |
| **expandedIcon**   | `<UpArrowIcon />`   | `React.ReactNode`      | Optional custom icon shown when accordion is open.          |
| **collapsedIcon**  | `<DownArrowIcon />` | `React.ReactNode`      | Optional custom icon shown when accordion is collapsed.     |
| **iconPosition**   | `'right'`           | `'left' \| 'right'`    | Position of the expand/collapse icon relative to the title. |

## CustomRadioGroup Component

A customizable radio group component that supports both single and multiple selections, including custom icons, styles, and disabled options.

```js
import { CustomRadioGroup } from 'react-native-triveni-common-component';

  // ...
const [fruit, setFruit] = React.useState('apple');
const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);

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

// For multiple selection

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

```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomRadioGroup.gif 'CustomRadioGroup Preview')

Properties used to customize the rendering:

Common Props
| Prop | Type | Default | Description |
| ---------------- | ---------------------- | ------- | --------------------------------- |
| `options` | `RadioOption[]` | — | Array of radio options to render. |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Style for the main container. |
| `optionStyle` | `StyleProp<ViewStyle>` | — | Style for individual option rows. |
| `labelStyle` | `StyleProp<TextStyle>` | — | Style for the text label. |
| `circleStyle` | `StyleProp<ViewStyle>` | — | Style for the radio circle. |

Single Select Props (type?: 'single')
| Prop | Type | Default | Description |
| ---------- | ------------------------- | ------- | -------------------------------------- |
| `value` | `string` | — | Currently selected value. |
| `onChange` | `(value: string) => void` | — | Callback when a new value is selected. |

Multiple Select Props (type: 'multiple')
| Prop | Type | Default | Description |
| ---------- | --------------------------- | ------- | ----------------------------------------------- |
| `type` | `'multiple'` | — | Required to enable multi-select mode. |
| `value` | `string[]` | — | Array of selected values. |
| `onChange` | `(value: string[]) => void` | — | Callback with updated array of selected values. |

## CustomSlider Component

A customizable and theme-aware slider component built on top of @react-native-community/slider, designed to display labels, current value, and allow advanced styling and extensibility.

```js
import { CustomSlider } from 'react-native-triveni-common-component';

// ...
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
/>;
```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomSlider.gif 'CustomSlider Preview')

Properties used to customize the rendering:

| Prop                  | Type                                           | Default         | Description                                                 |
| --------------------- | ---------------------------------------------- | --------------- | ----------------------------------------------------------- |
| `value`               | `number`                                       | **required**    | Current slider value.                                       |
| `onChange`            | `(value: number) => void`                      | **required**    | Callback when value changes.                                |
| `min`                 | `number`                                       | `0`             | Minimum value.                                              |
| `max`                 | `number`                                       | `100`           | Maximum value.                                              |
| `step`                | `number`                                       | `1`             | Step increment.                                             |
| `label`               | `string`                                       | —               | Optional text label shown above slider.                     |
| `showValue`           | `boolean`                                      | `true`          | Whether to show the current value below the slider.         |
| `containerStyle`      | `StyleProp<ViewStyle>`                         | —               | Style for the slider's outer container.                     |
| `sliderStyle`         | `StyleProp<ViewStyle>`                         | —               | Style for the actual slider.                                |
| `labelStyle`          | `StyleProp<TextStyle>`                         | —               | Style for the label text.                                   |
| `valueStyle`          | `StyleProp<TextStyle>`                         | —               | Style for the value text.                                   |
| `trackColor`          | `string`                                       | `theme.primary` | Color for the active track (left side of thumb).            |
| `trackSecondaryColor` | `string`                                       | `theme.gray`    | Color for the inactive track (right side of thumb).         |
| `thumbColor`          | `string`                                       | `theme.primary` | Color of the thumb (draggable circle).                      |
| `renderLabel`         | `() => React.ReactNode`                        | —               | Custom render function for the label area.                  |
| `renderValue`         | `(value: number) => React.ReactNode`           | —               | Custom render function for the value display.               |
| `sliderProps`         | `Partial<React.ComponentProps<typeof Slider>>` | `{}`            | Additional props passed to the underlying slider component. |

## CustomDropDown Component

A customizable dropdown component for React Native that supports single selection with optional search functionality, error display, custom icons, and flexible theming.

```js
import { CustomDropDown } from 'react-native-triveni-common-component';

  // ...
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

const [dropDownValue, setDropDownValue] = React.useState<{ label: string; value: string | number } | null>(null);

<CustomDropDown
    title={"Dropdown example"}
    searchPlaceholder={"Search..."}
    data={dropdownList}
    value={dropDownValue}
    search
    onChange={(value) => {
      setDropDownValue(value)
    }}
/>

```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomDropDown.gif '<CustomDropDown Preview')

Properties used to customize the rendering:

### Common Props

| Prop              | Type                                                         | Default | Description                                                                                              |
| ----------------- | ------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| `title`           | `string`                                                     | —       | Optional label/title displayed above the dropdown.                                                       |
| `placeholder`     | `string`                                                     | —       | Placeholder text shown when no item is selected.                                                         |
| `data`            | `{ label: string; value: string \| number }[]`               | —       | List of items to show in the dropdown.                                                                   |
| `value`           | `{ label: string; value: string \| number } \| null`         | —       | Currently selected item from the data list.                                                              |
| `onChange`        | `(item: { label: string; value: string \| number }) => void` | —       | Callback triggered when a new item is selected.                                                          |
| `disable`         | `boolean`                                                    | false   | Disables the dropdown when true.                                                                         |
| `errorText`       | `string`                                                     | —       | Optional error message displayed below the dropdown.                                                     |
| `renderErrorIcon` | `React.ReactNode`                                            | —       | Optional icon to display beside the error message.                                                       |
| `isFloating`      | `boolean`                                                    | false   | Enables floating label behavior (label floats above when focused or filled)                              |
| `mandatory`       | `boolean`                                                    | False   | If true, displays a red (\*) icon next to the title and in the placeholder when `isFloating` is enabled. |

Search Props
| Prop | Type | Default | Description |
| ------------------- | ------------ | ------- | ---------------------------------------------------------------------- |
| `search` | `boolean` | false | Enables search functionality within the dropdown. |
| `searchPlaceholder` | `string` | — | Placeholder text shown inside the search input. |

Style Props
| Prop | Type | Default | Description |
| ------------------- | -------------------------------- | ------- | ---------------------------------------------------------------------- |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Custom style for the main container view. |
| `style` | `StyleProp<ViewStyle>` | — | Custom style for the dropdown itself. |
| `titleTxtStyle` | `StyleProp<TextStyle>` | — | Style for the text label shown above the dropdown. |
| `selectedTextStyle` | `StyleProp<TextStyle>` | — | Style for the text displayed when an item is selected. |

## CustomMultiSelectDropDown Component

A fully customizable multi-select dropdown component for React Native, designed to support multiple selection with optional search functionality, "Select All" toggle, error display, custom icons, and flexible theming integration.

```js
import { CustomMultiSelectDropDown } from 'react-native-triveni-common-component';

  // ...
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

const [multiselectDropDownValue, setMultiselectDropDownValue] = React.useState<string[] | null>(null);

<CustomMultiSelectDropDown
    title={"Multi select dropdown example"}
    data={dropdownList}
    searchPlaceholder={"Search..."}
    value={multiselectDropDownValue}
    search
    selectAllLabel="All"
    isAllSelectedEnabled
    onChange={(value) => {
      setMultiselectDropDownValue(value)
    }}
/>

```

### Preview

![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/CustomMultiSelectDropDown.gif '<CustomMultiSelectDropDown Preview')

Properties used to customize the rendering:

| Prop                   | Type                                 | Default | Description                                                                                              |
| ---------------------- | ------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| `title`                | `string`                             | —       | Optional label/title displayed above the multi-select dropdown.                                          |
| `placeholder`          | `string`                             | —       | Placeholder text shown when no items are selected.                                                       |
| `data`                 | `{ label: string; value: string }[]` | —       | List of options to display in the dropdown. Each item must have `label` and `value`.                     |
| `value`                | `string[] \| null`                   | —       | Array of currently selected values.                                                                      |
| `onChange`             | `(items: string[]) => void`          | —       | Callback triggered when the selection changes.                                                           |
| `disable`              | `boolean`                            | false   | Disables the dropdown if set to true.                                                                    |
| `errorText`            | `string`                             | —       | Optional error message displayed below the dropdown.                                                     |
| `renderErrorIcon`      | `React.ReactNode`                    | —       | Optional icon shown next to the error message.                                                           |
| `isFloating`           | `boolean`                            | false   | Enables floating label behavior (label floats above when focused or filled).                             |
| `isRenderSelectedItem` | `boolean`                            | True    | If true (default), renders custom chips for selected items.                                              |
| `mandatory`            | `boolean`                            | False   | If true, displays a red (\*) icon next to the title and in the placeholder when `isFloating` is enabled. |

Search Props
| Prop | Type | Default | Description |
| -------------------| ---------- | ------- | ---------------------------------------------------------------------- |
| `search` | `boolean` | false | Enables a search bar within the dropdown list. |
| `searchPlaceholder` | `string` | — | Custom placeholder text for the search input. |

"Select All" Feature Props
| Prop | Type | Default | Description |
| ----------------------| ---------- | ------- | -------------------------------------------------------------------------------- |
| `selectAllLabel` | `string` | — | Label text for the "Select All" option. Can be localized or customized. |
| `isAllSelectedEnabled` | `boolean` | false | Enables or disables the "Select All" option in the dropdown list. |

Style Props
| Prop | Type | Default | Description |
| ------------------- | -------------------------------- | ------- | ---------------------------------------------------------------------- |
| `containerStyle` | `StyleProp<ViewStyle>` | — | Custom styles for the outer container of the dropdown component. |
| `style` | `StyleProp<ViewStyle>` | — | Custom styles for the dropdown itself. |
| `titleTxtStyle` | `StyleProp<TextStyle>` | — | Custom styles for the title text above the dropdown. |
| `selectedTextStyle` | `StyleProp<TextStyle>` | — | Custom styles for the selected item text shown in the dropdown. |

## APIUtils Service

```js
import { apiUtils } from 'react-native-triveni-common-component';

const fetchData = async () => {
  try {
    const data = await apiUtils.GET('/todos/1');
    console.log('GET Response:', data);
  } catch (error) {
    console.error('API Error:', error);
  }
};
```

### Overview

A centralized API service built on top of **Axios** that handles authentication, token refresh, request/response logging, standardized error handling, and optional user alerts.

### Overview

A flexible and extensible logging service built on top of **react-native-logs** with support for console logging, file-based logging, and optional network log transport. Designed for debugging, production monitoring, and issue tracking.

### Configuration Properties
| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **baseURL** | - | string | Base URL for API requests |
| **accessToken** | undefined | string | Optional access token |
| **refreshToken** | undefined | function | Function to refresh expired access token |
| **handleLogout** | undefined | function | Function to handle user logout on session expiry |
| **logger** | - | AppLogger | Logger instance for debug/error logs |
| **i18n** | undefined | I18nAdapter | Optional localization adapter |
| **isShowAlertOnError** | true | boolean | Enable or disable alert on API errors |

### Methods
| Method | Type | Description |
|--------|------|-------------|
| **GET(url: string)** | async | Perform GET request |
| **POST(url: string, params?: any)** | async | Perform POST request |
| **FORM_POST(url: string, params: any)** | async | POST request with multipart/form-data |
| **PUT(url: string, params: any)** | async | Perform PUT request |
| **DELETE(url: string, params?: any)** | async | Perform DELETE request |

---

## LogConfig Service

```js
import { LOG, createAppLogger, type LogMessage } from 'react-native-triveni-common-component';

LOG.debug('Debug message');
LOG.info('Info message');
LOG.warn('Warning message');
LOG.error('Error message');
```

### Preview
![Hosted Image](https://github.com/TGS-DivyeshPatel/react-native-triveni-common-component/blob/main/assets/LogPreview.png 'Log Service Preview')

### Configuration Properties
| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **fileName** | `app_logs_YYYY-MM-DD.txt` | string | Log file name |
| **enableConsole** | true | boolean | Enable console logs |
| **enableFile** | true | boolean | Enable file logs |
| **networkTransport** | undefined | function | Send logs to server |
| **severity** | debug | enum | Minimum log level: debug, info, warn, error |

### Methods
| Method | Type | Description |
|--------|------|-------------|
| **debug(...args: any[])** | function | Log debug messages |
| **info(...args: any[])** | function | Log info messages |
| **warn(...args: any[])** | function | Log warning messages |
| **error(...args: any[])** | function | Log error messages |
| **getCurrentLogFilePath()** | function | Get current log file path |
| **makeLogFolder()** | async | Create log folder if not exists |
| **deleteLogFile()** | async | Delete all existing log files |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

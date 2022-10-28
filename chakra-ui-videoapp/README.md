# I am creating this project using chakra UI

# 1) Run the command 
```
npx create-react-app .  --template @chakra-ui

```
# 2) Delete all the crap in src except the **App,Index,ColorModeSwitcher** 

# 3) Your **ColorModeSwitcher** file should look like this 
```
import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
```
# 4) your **App** file should look like this
```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route/>
            </Routes>
        </Router>
    )
}

export default App
```
# 5) your **index** file should look like this
```
import { ColorModeScript, ChakraProvider,theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </StrictMode>
);
```
## TADA a basic dark/light theme is ready 
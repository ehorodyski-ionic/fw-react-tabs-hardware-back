# Ionic Framework React

## Android Hardware Back Issue

### Issue

When utilizing Android's hardware back button, the navigation stack does not go backwards the same way observed through a web browser.

### How to Reproduce

After serving the application on a web browser:

1. Press the `Login` button
2. Navigate from `Tab 1` to `Tab 2`
3. Naviate from `Tab 2` to `Tab 3`

Using the browser's back button on the address bar, notice that the navigation is reversed.

Run the application on an Android simulator or device and perform the same navigation steps. Use the Android hardware back button to navigate backwards. Observe that the navigation history is not preserved.

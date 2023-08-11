## Day 1

1. Create a Welcome Screen With Buttons that leads to `Player vs Player` `Player vs Computer` and `Computer vs Computer` game modes

2. Create `Player Vs Computer` Screen.

   - Should have a Header and Score Board.
   - Should have a Exit Button to go back to Welcome Screen (To Choose Modes)
   - Create a Starting State With Three Buttons (Rock, Paper, Scissors)
   - Implement the Logic for Player Vs Computer Game
   - Make sure to remmember implementing resposiveness along the way. It will help in reusability.

3. Logic `Player Vs Computer` Game

   - Create an Onclick Handler for each Button
   - Get the Value from what user picked and Compare it to the Random Computer Choice
   - Implement the Logic for Win, Lose and Draw
   - Compare Results and Display the Winner
   - Update the Scoreboard

4. Testing the Functionality
   - Test the Functionality of the Game
   - Test the Functionality of the Scoreboard
   - Test the Functionality of the Exit Button

#### UI Purpose Only

- Pick some fonts and colors for the project.

## Day 2

1. Create a screen where user navigates when selected `Computer vs Computer`

- Once you have figured out how the logic works, reuse the components from `Player vs Computer` Screen and make an external funtion to handle Random generation of coomputer picks. whicvh will be used in both `Player vs Computer` and `Computer vs Computer` Screens.

2. Create `Player Vs Player` Screen.

- Same like Before, I think it should be better to extract the player logic as well (We will see about that later)

3. Setup some test along the way.

## Day 3

1. Testing and Deployment checklist.

- [x] Test the Functionality of the Game
- [x] Test the Functionality of the Scoreboard
- [x] Test the Functionality of the Exit Button
- [x] Test the Functionality of the Random Computer Pick
- [x] Test the Functionality of the Player Pick

2. Animations on Win, Lose and Draw (Maybe use a Popper.js or something)

3. Animations on minor stuff buttons e.t.c.

4. Deployment

- [] Deploy the Project on Vercel
- [] Add a Custom Domain
- [] Test if the Deployment works with different devices / browsers

## Bonus

- Implement Light/Dark Theme.
- Maybe make the theme a little chalky.
- Use custom Fonts
- Maybe implement screen transitions
- Winner Animations (Poppers would be fine but a bit more ethuiastic maybe bombs and stuff haha.)

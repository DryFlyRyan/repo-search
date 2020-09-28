This project is mostly still [Create React App](https://github.com/facebook/create-react-app), with a few differences for quality of life and the such.

## Available Scripts

Like normal CRA apps, you can interact with the app with the following commands:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Some notes regarding the code test and how I approached it:

### Application Basics

#### What I did

Given that it's been a couple years since I've used it, I wanted to use Create React App as close to out-of-the-box as possible. I made a few changes, mainly to use absolute imports since I find them to be more readible and it's easier to move components around the file tree easier.

I also focused on using the React data-flow and basic hooks to replicate what I'd usually do in Redux. Verdict: it's a little messier than it would have been with Redux, but there's much less boilerplate.

#### What I would do next

Like always, the way that I envisioned the structure at the beginning is different than how I envision it now. I'd probably go back and make the file structure more cohesive and follow the same vision.

This also isn't the dryest code I've ever written, especially when it comes to styling. Before I'd put this into 'production', I'd probably be spending half-a-day to combine similar components and styles.

### Application Features

#### What I did

I mostly stuck to the letter-of-the-law when it came to features, and tried to only use data that I could glean from the original repos call (with the exception of the user bar, of course). I added some links to GH where I could and where it made sense due to the straightforward way that GH does its routing.

I think it's pretty easy to add too much to these sorts of projects and wanted to keep it fairly basic.

#### What I would do next

I'm really itching to pull down Readmes from the repos on the detail page since I think it would likely be a pretty easy win and that page seems kind of empty to me.

### Styling

#### What I did

I used `styled-components` for my styling since I'm the most comfortable with it and it works well for projects of this size.

For the style itself, it's based (obviously) off of Github's styling. I tried to emulate most of their most visible UI features without necessarily copypasta-ing the styles themselves. Some of it is closer than other parts and given the disparity between what GH has access to and what we have access to with our call, I moved some things around and messed with the styling to make it look alright.

#### What I would do next

Definitely clean up the styles and add more organization to them. I generally opt to have too many styled components when I'm making a project in order to afford for different behaviors for different pages.

The next phase for that is to go back through and clean those up as it makes sense to (e.g. the stats links on the search result cards, user side bar, repo detail, etc.).

I also focused mainly on the desktop and the mobile views, so tablet styling is a little neglected. It could probably do with an increase to the text size and some more specific styling to take advantage of the space.

### App Tests

#### What I did

In order to give a couple examples of how I write tests, I wrote a few around the Utils functions in `src/utils/utils.test.js`. I also included a single smoke test for the main `App.js` component.

#### What I would do next

* Write smoke tests for each view-level component and likely the large sections as well to allow for some quick feedback when doing other changes

* Write tests around routing and pagination

* Write tests around the App.js-level methods to ensure we're countering some edge cases there. I'm sure there's ways to break this

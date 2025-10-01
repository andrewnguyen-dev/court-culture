# Creating a Marquee or Ticker Tape Scroll Effect in React | Ayush Gandhi
Introduction
------------

The marquee effect is a classic scrolling text animation that can add dynamic visual interest to your web applications. In this tutorial, we'll explore how to create a modern take on this effect using React and CSS animations.

What is a Marquee Effect?
-------------------------

A marquee effect is a text animation where content scrolls horizontally across the screen. Traditionally used for announcements or promotions, it can be adapted for various creative purposes in modern web design.

💡

While the original HTML `<marquee>` tag is deprecated, we can achieve similar and more customizable effects using CSS animations and React components.

The Marquee Tape Effect
-----------------------

Our version of the marquee effect, which we'll call the "Marquee Tape Effect," adds some stylish twists:

*   Continuous loop of scrolling text
*   Gradient background
*   Slight rotation for a dynamic look
*   Smooth fade-in and fade-out at the edges

Here's what we're aiming for:

Implementation Steps
--------------------

### Step 1: Create the Tape Component

First, let's set up our `Tape.tsx` component:

```
import React from 'react';

const Tape = () => {
  return (
    <div>Tape Component</div>
  );
};

export default Tape;

```


### Step 2: Add Content

We'll use an array of words for our scrolling content:

```
import React from 'react';

const words = [
  'Performant',
  'Efficient',
  'Reliable',
  'Secure',
  'Scalable',
  'Maintainable',
  'Testable',
  'Modular',
  'Documented',
  'Collaborative',
];

const Tape = () => {
  return (
    <div>Tape Component</div>
  );
};

export default Tape;

```


### Step 3: Add Animation

To create the scrolling effect, we need to add a CSS animation. You can include this in your global CSS file or use a CSS-in-JS solution:

```
@keyframes move-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-move-left {
  animation: move-left linear infinite;
}

```


### Step 4: Implement the Marquee Effect

Now, let's build out our component with the necessary HTML structure and CSS classes:

```
import { DotIcon } from '@radix-ui/react-icons';
import React from 'react';

const words = [
  'Performant',
  'Efficient',
  'Reliable',
  'Secure',
  'Scalable',
  'Maintainable',
  'Testable',
  'Modular',
  'Documented',
  'Collaborative',
];

const Tape = () => {
  return (
    <div className="overflow-x-clip pb-32 pt-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-orange-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-left gap-4 py-3 pr-4 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div key={wordIndex} className="inline-flex items-center gap-4">
                    <span className="text-sm font-extrabold uppercase text-gray-900">
                      {word}
                    </span>
                    <DotIcon className="size-6 -rotate-12 text-gray-900" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;

```


### Step 5: Use the Tape Component

Finally, import and use the `Tape` component in your desired page or component:

```
import Tape from '@/components/Tape';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Tape />
    </div>
  );
}

```


Conclusion
----------

You've now created a stylish Marquee Tape Scroll effect using React and CSS animations. This effect can be customized further by adjusting colors, speeds, and content to fit your specific design needs.

Further Enhancements
--------------------

*   Make the component more dynamic by passing the words as props
*   Add responsive design considerations for different screen sizes
*   Implement pause on hover functionality for better user interaction

Remember, while eye-catching animations can enhance user experience, they should be used judiciously to avoid overwhelming your users.

* * *

Support My Work

If you enjoy my content, consider buying me a pizza!

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg)Buy me a pizza

](https://www.buymeacoffee.com/ayushgandhi)
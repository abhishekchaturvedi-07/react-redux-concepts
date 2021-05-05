import React, { useState } from 'react';
import Questions from './basicQuestions';
import './basiccQuestions.css';


function BasicQuesntions() {
    let someValue;
    const [faqs, setfaqs] = useState([
        {
          question: 'How to create a React app?',
          answer: 'npx create-react-app my-app',
          open: true
        },
        {
          question: 'What is a React component and difference between a functional component and class component?',
          answer: `React Component are the building blocks of the application. A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the User Interface should appear.
          Funtional Component: A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. There is no render method used in functional components. React lifecycle methods cannot be used in functional components.
          Class Component: A class component requires us to extend from React. Component and create a render function which returns a React element. React lifecycle methods can be used inside class components.
          `,
          open: false
        },
        {
          question: 'Understanding of how JSX works, difference between JSX and HTML?',
          answer: `JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX Represents Objects, that means transpiler compiles JSX down to React.createElement() calls. Differnces: In HTML, multiple elements can be returned but in JSX, nested JSX must return one element, which we’ll call a parent element that wraps all other levels of nested elements.HTML elements have attributes and J
          XS have props. In HTML, it is not necessary to use camelCase for attributes, ids and event references. But in JSX, it is mandatory to have all HTML attributes and event references in JSX as camelCase. We dont use class attribute in JSX like in HTML, instead we use className.`,
          open: false
        },
        {
            question: 'How to use JSX interpolation?',
            answer: `By using {}, for example : <div someProp={\`${someValue} simple text\`}></div>`,
            open:false
        },
        {
            question: 'How component lifecycle works.?',
            answer: `MOUNTING: When an instance of a component is being created and inserted into the DOM. | UPDATING: When a component is being re-rendered as a result of changes to its propes or states. | UNMOUNTING: When a component is being removed from the DOM | ERROR HANDLING: When there is an error during rendering, in a ;ifecycle method, or in the construtor of any child component! |||| During MOUNTING -> constructor, static getDerivedStateFromProps, render, ccomponentDidMount | UPDATING -> static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate | UNMOUNTING-> compunentWillUnmount | ERROR HANDLING -> static getDerivedStateFromError, componentDidCatch
             `,
            open:false
        },
        {
            question: 'What is the React virtual DOM?',
            answer: `The virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets updated instead of the real DOM. It is much faster and efficient. When new elements are added to the UI, a virtual DOM, which is represented as a tree is created. Each element is a node on this tree. If the state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or “diffed” with the previous virtual DOM tree. Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM. This ensures that there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.`,
            open:false
        },
        {
            question: 'How hooks works?',
            answer: `React Hooks are functions that let us hook into the React state and lifecycle features from function components. Or in other words, a hook is a react function that lets you use state and react features from a function based component. We you can use the built in hooks(like useState, useEffect, useReducer) or we can create your own custom one. So the solution to our problem will be a just be in a single line by using hooks`,
            open:false
        },
        {
            question: 'How to use component props?',
            answer: `Props are used to pass data from one component to another component. Or we can say, Props are arguments passed into React components. We can pass to components via HTML attributes like <Component props="value" />, The Component receives the argument as a props object. In class based component we have to receive it via using this keyword but in funcction component we can directly access via props`,
            open:false
        },
        {
            question: 'How to update local state for class and functional components?',
            answer: `Before React 16.8, function components did not have state or lifecycle hooks. With 16.8+, function components can now use hooks to use state. The first noticeable difference between class and function components is, their syntax. The state is a JS object containing data that can be binded to the output of the render function. Whenever a state property is updated, React re-renders the component accordingly.  In class components, there are two ways to initialize state — in a constructor function or as a Class property. And with React 16.8, function components can now use state. We can use React hooks, and to use state we can use the useState hook(const [name, setNaem] = useState('defaultValue');) `,
            open:false
        }
      ]);

      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
  return (
    <div>
        <div className="faqs"><button type="button" class="btn btn-primary badges">
            <span class="badge badge-light">White Badge</span>
        </button></div>
        <div className="faqs">
        {faqs.map((faq, i) => (
          <Questions faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default BasicQuesntions;

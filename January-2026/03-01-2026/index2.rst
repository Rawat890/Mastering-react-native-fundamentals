5. Defining PropTypes in a Component
You can define prop types by adding the propTypes object to your component.

import PropTypes from 'prop-types';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

here: Adding PropTypes to validate the "name" prop
Expecting "name" to be a required string

6. Common PropTypes
Here are some common types of prop validations you can apply:

1. Primitive Types:

PropTypes.string - Ensures the prop is a string.
PropTypes.number - Ensures the prop is a number.
PropTypes.bool - Ensures the prop is a boolean.
PropTypes.func - Ensures the prop is a function.
PropTypes.object - Ensures the prop is an object.
PropTypes.array - Ensures the prop is an array.
PropTypes.node - Ensures the prop is any renderable content (numbers, strings, elements,
2. Required Props: Use .isRequired to enforce that a prop is passed:

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

3. Arrays of a Certain Type: You can validate arrays to ensure their contents are of a specific type:

MyComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
};

4. Objects of a Certain Shape:

MyComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

5. One of a Set of Values: You can enforce that a prop is one of several specified values:

MyComponent.propTypes = {
  status: PropTypes.oneOf(['success', 'error', 'loading']).isRequired,
};

6. Custom Prop Validation: You can create your own custom validation logic:

MyComponent.propTypes = {
  age: function (props, propName, componentName) {
    if (props[propName] < 18) {
      return new Error(
        `${propName} in ${componentName} must be at least 18 years old`
      );
    }
  },
};

7. Example of Validating Props
Let’s create a component that expects several types of props and validate them:

import PropTypes from 'prop-types';

function Profile({ name, age, hobbies, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>
      <p>Status: {status}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.oneOf(['active', 'inactive', 'pending']).isRequired,
};

function App() {
  return (
    <Profile
      name="John Doe"
      age={30}
      hobbies={['Reading', 'Traveling', 'Swimming']}
      status="active"
    />
  );
}

export default App;

8. Default Props
You can also define default props using defaultProps in case a prop isn't provided.

Profile.defaultProps = {
  age: 18, // Default age if not provided
};
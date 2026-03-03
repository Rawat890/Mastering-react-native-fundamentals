Props and immutabilty

Props are fundamental concept in React that allows us to pass data from parent to child components. They are immutable, meaning that once a prop is set, it cannot be changes by child components. This immutabilty ensures that the data flow in React is predictable and helps maintain the integrity of the app state.

props are an essential React tool to configure and also to customize components. So we can imagine props as settings that we can use to make a parent component control how its child component should look like and how it should work.

React renders a component based on its current data and that UI will always be kept in sync with that data, right? But now it's time to get a bit more specific about what that data actually is.

state is basically internal component data that can be updated by the component's logic, so by the component itself, while props on the other hand is data that is coming from the parent component, so from the outside basically. So it's the parent component who owns that data and so therefore it cannot be modified by the child component. Instead, props can only be updated by the parent component itself.
And this brings us to one of the few strict rules that React gives us, which is that props are immutable. So they cannot be changed, they are read-only.
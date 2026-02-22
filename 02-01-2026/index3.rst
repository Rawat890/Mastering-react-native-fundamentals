What are the React Life cycle methods ? 
A component lifecycle can be divided into 4 parts - 

1. Mounting - an instance of the cmponent is being created and inserted into DOM. 
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

(a) constructor - 
The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

2. static getDerivedStateFromProps()
getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

3. render()
he render() method is the only required method in a class component.
When called, it should examine this.props and this.state and return one of the following types:



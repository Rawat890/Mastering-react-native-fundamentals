UNDERSTANDING ABOUT THE BRIDGING ARCHITECTURE

React native was initially build on the bridge architecture and has some performing issues, So in 2018 Facbook started developing a new architecture called Fabric in 2018 and began its rollout in 2021. It's not fully deployed yet and many projects still using the bridging, But the new era of new architecture started when react native 0.82 version comes and it introduced a new architecture Fabric by default now, It now not use dthe bridging.

There are 3 threads exists as we can see in 'Bridging_Diagram.webp' 
1. JS thread - RUNS ALL OF OUR REACT OR REACT NATIVE CODE
2. Shadow thread - WILL CREATE THE NATIVE STYLES AND POSITIONS FROM OUR COMPONENTS
3. Main thread - WILL DRAW UI AND LISTEN TO EVENTS

JS thread -
The js thread runs our code, bundled by the metro bundler and interpreted by JSC or Hermes javascript engine
All of out code runs in js thread, undergoing bundling process with the metro bundler. This process generates the js bundle, which is then ready to be executed by a js engine.

Shadow thread - 
It transforms our flexbox layour into a format that is understandable by natve platforms Android/ios using Yoga layout engine
Although we write our layout in flexbox style, the host platforms (Android/iOS) have their own distinct layout systems and don’t inherently follow flexbox rules. To bridge this gap, React Native employs the Shadow thread. This thread processes the layout dimensions and positions from our flexbox code, creating a layout tree (React Shadow Tree) that corresponds to the native system’s requirements. At its core, the Shadow thread utilizes Yoga, a layout engine that effectively translates our flexbox-based layout into a format compatible with the native operating systems.

Main Thread - 
This thread converts the layout instructions into visual components, handkes the user interactions and events for the responsiveness, and manages Native modules for integrating native platform features.

The Main Thread plays a crucial role in React Native’s architecture. Its primary responsibility is to render the Shadow Tree, an operation that forms the basis of what is referred to as the ‘Host View Tree’ in the Fabric architecture. Essentially, this thread takes the layout calculations and instructions prepared by the Shadow thread and turns them into actual visual components on the screen

"Beyond UI rendering, the Main Thread handles user interactions and events, like taps and swipes, ensuring responsive and interactive user experiences.

Additionally, the Main Thread manages Native Modules. These modules enable access to native platform features, such as the device’s camera or push notifications, and are essential for integrating platform-specific functionalities not directly available in JavaScript."

How exactly does JavaScript communicate with native code, and vice versa?
The bridge in react native is a message queue system that utilizes JSON messages for communtication between Javascript and native platforms
The Bridge is a fundamental architecture in React Native, enabling the communication between JavaScript code and the native components of a mobile application. It operates asynchronously, utilizing JSON objects for a bidirectional exchange of information between JavaScript and the native environment. Key characteristics of the Bridge include:

1. Batched Bridge: Rather than sending operations individually, React Native batches them together before sending them over the Bridge. This approach significantly optimizes performance by reducing the communication overhead.
2. Serializability: All data transmitted across the Bridge must be serialized. This means complex JavaScript objects are converted into strings, sent across the Bridge, and then deserialized or parsed on the receiving side.
3. Asynchronous Nature: The Bridge’s operations are inherently asynchronous, meaning they don’t occur instantaneously. This characteristic ensures that the JavaScript thread remains unblocked, allowing the UI and other processes to run smoothly without waiting for the Bridge operations to complete.


The Bridge’s problem
Understanding that every interaction in React Native, from events to screen updates, requires data to be serialized, passed through the Bridge, and then deserialized — in an asynchronous manner — leads us to the crux of the issue: performance. Consider a scenario where your app needs to display a large amount of data, constantly updating in response to numerous events. In this situation, the Bridge becomes a bottleneck. The process of serializing, transmitting, and then deserializing vast amounts of data can lead to noticeable delays. The result? Your screen might temporarily go blank during heavy data updates, a clear indicator of performance strain in the Bridge architecture.

In an asynchronous environment, like that of React Native’s Bridge, native events, once initiated, cannot be canceled. This limitation means there’s an inherent delay in responsiveness. Consequently, the more data or events being processed asynchronously, the slower the response time becomes, impacting the app’s overall performance.


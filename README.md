# 4549 Robotics Website
> 4549 Robotics Website developed using ReactJS, a frontend JavaScript framework. 

 #### Table of Contents

 * [Vex Online Challenge](#Vex-Online-Challenge)
 * [ReactJS](#ReactJS)
 * [Components](#Components)
 * [Hosting](#Hosting)

### Vex Online Challenge
> The website was developed to enter in the Vex Online challenge. This challenge required us to create a website with a clear, thoughtout design, which contains content such as information about our robotics program, including our teams, school, etc. Learn more about the [Vex Online Challenge](https://challenges.robotevents.com/challenge/106).

### ReactJS
> The website was developed using ReactJS. ReactJS is a frontend JavaScript framework [developed by Facebook](https://github.com/facebook/react). ReactJS allows for streamlined and fast development on the frontend using as little code as possible using things like components with states and props. 

### Components
> The website uses mutliple UI based components such as basic text components, header, front page, etc. This allows for a streamlined development after these components are created, making updating and maintaining the website easier, even if you don't have a web development background. 

```js
class Text extends React.Component {
  render() {
    return(
      <div className={name}>
        <h1> {this.props.title} </h1>
      </div>
    );
  }
}
```

> This shows a basic React component. This component can be exported from it's own file and imported to another file where it needs to be used like `<Text>` in the render method of another component such as another page. Within the text component, you can pass props. This allows something like the title or any props within the component to be changed. For example `<Text title="Hello, World">` would change the title to "Hello, World". 

  [Text Component](../master/src/components/Text.js) 

> There are many more components then the text component such as Instagram, using JSON data from Instagram to fetch posts, captions, account name, etc. with a single prop, the username of the account. There are also other components such as members, header, awards, etc. 

  [View Components](../master/src/components/) 

### Hosting
> Due to ReactJS being a serverside framework, the website has to be hosted somewhere. We choose Google Firebase for hosting however, we could use something like AWS, GitHub pages, or other hosting options. Google Firebase was a free and simple solution to hosting.  Firebase also provides many analytics such as uptime, user engagement, etc. [Learn more about Firebase here.](https://firebase.google.com/)

/*
  Instructions
    Utilize the props passed to Badge to finish the Badge component
*/

import * as React from "react";

const USER_DATA = {
  name: "Tyler McGinnis",
  img: "https://avatars0.githubusercontent.com/u/2933430",
  handle: "tylermcginnis"
};

class Badge extends React.Component {
  render() {
    const { user, img, style } = this.props
    return (
      <div style={style}>
        <img alt={`Avatar for ${user.name}`} src={user.img} />
        <div>
          <h4>{user.name}</h4>
          <p>@{user.handle}</p>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Badge
        user={USER_DATA}
        style={{
          width: 300,
          margin: "0 auto",
          border: "1px solid var(--biege-10)",
          borderRadius: 8,
          backgroundColor: "var(--charcoal)",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center"
        }}
      />
    );
  }
}

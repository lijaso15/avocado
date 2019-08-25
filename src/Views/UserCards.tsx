import React from "react";
import Users from "../assets/user.json";
import UserCard from "../components/UserCard";
import EmptyCard from "../components/UserCard/EmptyCard";
import { connect } from "react-redux";

interface UserCardsProps {
  active: boolean;
}

class UserCards extends React.Component<UserCardsProps> {
  render() {
    let { active } = this.props;
    let arr =
      Users.users.length < 15
        ? [...Array(15 - Users.users.length).keys()]
        : [...Array(3 - (Users.users.length % 3))];
    if (!active) {
      return null;
    }
    return (
      <div
        style={{
          maxHeight: "87vh",
          overflow: "auto"
        }}
      >
        <div className="columns is-desktop is-centered is-gapless is-multiline">
          <div className="column is-half">
            <div className="columns is-gapless is-multiline">
              {Users.users.map(u => {
                return <UserCard {...u} />;
              })}
              {arr.map(i => (
                <EmptyCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.UserCards.isViewing
  };
};

export default connect(mapStateToProps)(UserCards);

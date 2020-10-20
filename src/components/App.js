import React from "react";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/Transactions";

import user from "../components/Profile/user.json";
import statsData from "../components/Statistics/statistical-data.json";
import friends from "../components/FriendList/friends.json";
import transactions from "../components/Transactions/transactions.json";

export default function App() {
  return (
    <>
      <Profile {...user} />

      <Statistics stats={statsData} title="Upload stats" />

      <FriendList friends={friends} />

      <Transactions items={transactions} />
    </>
  );
}
